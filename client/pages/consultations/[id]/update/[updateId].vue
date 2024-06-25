<script setup lang="ts">

import {AsyncData} from "nuxt/app";
import type Consultation from "~/client/types/consultation/consultation";
import {FetchError} from "ofetch";
import svgBook from "@gouvfr/dsfr/dist/artwork/pictograms/leisure/book.svg";

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const consultationId = route.params.id
const consultationUpdateId = route.params.updateId
const links = ref()

definePageMeta({
  layout: 'basic'
})

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/api/public/consultations/${consultationId}/updates/${consultationUpdateId}`
const { data: consultationUpdate } = await useFetch(routeUrl,{
  onResponse({ response }) {
    links.value = [
      { to: '/', text: 'Accueil' },
      { to: `/consultations/${consultationId}`, text: "Consultation citoyenne"},
      { text: response._data.history.find(element => element.updateId == consultationUpdateId).title}
    ]
  }
}) as AsyncData<Consultation, FetchError>

</script>

<template>
  <DsfrBreadcrumb :links="links"/>

  <div>
    <div class="fr-grid fr-mb-1w">
      <div class="fr-grid-row fr-grid-row--middle fr-grid-row--gutters">
        <div class="fr-col-md-6 fr-col-12">
          <img class="fr-responsive-img" :src="consultationUpdate.coverUrl" alt="">
        </div>
        <div class="fr-col-md-6 fr-col-12">
          <p class="fr-text--lead">
            {{ consultationUpdate.thematique.picto + " " + consultationUpdate.thematique.label }}
          </p>
          <h1>{{ consultationUpdate.title }}</h1>

          <div v-if="consultationUpdate.questionsInfo" class="info-question fr-px-2w fr-py-1w">
            <div class="fr-mb-1w">
              <VIcon
                name="ri-calendar-2-line"
              />
              Jusqu'au {{ new Date(consultationUpdate.questionsInfo.endDate).toLocaleDateString()}}
            </div>
            <div class="fr-mb-1w">
              <VIcon
                name="ri-questionnaire-line"
              />
              {{ consultationUpdate.questionsInfo.questionCount }}
            </div>
            <div class="fr-mb-1w">
              <VIcon
                name="ri-timer-line"
              />
              {{ consultationUpdate.questionsInfo.estimatedTime }}
            </div>
            <div class="fr-mb-1w">
              <VIcon
                name="ri-group-line"
              />
              <span v-if="consultationUpdate.questionsInfo.participantCount == 0">
                Aucun participant
              </span>
              <span v-else-if="consultationUpdate.questionsInfo.participantCount == 1">
                1 participant
              </span>
              <span v-else>
                {{ consultationUpdate.questionsInfo.participantCount }} participants
              </span>
              <div class="fr-mt-1w fr-ml-3w">
                <div class="progress-bar fr-mb-1w">
                  <div class="progress-value" :style="{ width:  (consultationUpdate.questionsInfo.participantCount / consultationUpdate.questionsInfo.participantCountGoal) *100 + '%' }"></div>
                </div>
                Prochain objectif : {{ consultationUpdate.questionsInfo.participantCountGoal }} participants !
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="consultationUpdate.consultationDates" class="consultation-dates fr-mb-4w">
      <h2 class="fr-text--lg title">Lancement de la consultation</h2>
      <div class="fr-mb-1w">
        <VIcon
          name="ri-calendar-2-line"
        />
        Du {{ new Date(consultationUpdate.consultationDates.startDate).toLocaleDateString()}}
        au {{ new Date(consultationUpdate.consultationDates.endDate).toLocaleDateString()}}
      </div>
    </div>

    <div v-if="consultationUpdate.responsesInfo" class="info-response fr-px-2w fr-py-1w fr-mb-1w">
      <span class="fr-text--lead">
        {{ consultationUpdate.responsesInfo.picto}}
      </span>
      <span class="fr-text--lg" v-html="consultationUpdate.responsesInfo.description">
      </span>
    </div>

    <div v-if="consultationUpdate.infoHeader" class="info-header fr-px-2w fr-py-1w fr-mb-1w">
      <span class="fr-text--lead">
        {{ consultationUpdate.infoHeader.picto}}
      </span>
      <span class="fr-text--lg" v-html="consultationUpdate.infoHeader.description">
      </span>
    </div>

    <ConsultationSections :sections="consultationUpdate.body.sections"/>

    <DsfrTile
      v-if="consultationUpdate.downloadAnalysisUrl"
      title="Télécharger la synthèse complète"
      description="Pour aller plus loin, retrouvez l'analyse détaillée de l'ensemble des réponses à cette consultation."
      :to="consultationUpdate.downloadAnalysisUrl"
      :download="true"
      :img-src="svgBook"
      class="fr-mb-4w"
    />

    <div v-if="consultationUpdate.goals" class="goals" >
      <div class="fr-mt-1v" v-for="goal in consultationUpdate.goals">
        <span class="fr-text--lead fr-mr-2w">{{ goal.picto }}</span>
        <span v-html="goal.description"></span>
      </div>
    </div>

    <div v-if="consultationUpdate.footer" class="footer">
      <h2 class="fr-text--lg title">{{ consultationUpdate.footer.title }}</h2>
      <div v-html="consultationUpdate.footer.description"></div>
    </div>

    <ConsultationHistory v-if="consultationUpdate.history" :history="consultationUpdate.history"  :consultation-id="consultationId" :current-update-id="consultationUpdateId" class="fr-mt-6w"/>

    <BandeauTelechargement v-if="consultationUpdate.feedbackQuestion" class="feedback-question fr-mt-6w">
      <div class="fr-text--lg fr-mb-1w feedback-question-title" >{{ consultationUpdate.feedbackQuestion.picto}} {{ consultationUpdate.feedbackQuestion.title}}</div>
      <div v-html="consultationUpdate.feedbackQuestion.description"/>
      <div class="fr-text--sm">Téléchargez l'application pour donnez votre avis.</div>
    </BandeauTelechargement>

    <BandeauTelechargement class="fr-mt-2w" v-if="consultationUpdate.questionsInfo && new Date(consultationUpdate.questionsInfo.endDate) >= new Date()">
      Pour répondre à cette consultation, rendez-vous sur l’application Agora.
    </BandeauTelechargement>

  </div>

</template>

<style>
.info-header, .info-response{
  background-color: #f5f7ff;
  border: 1px solid #c2cefd;
  border-radius: 10px;
}

.info-question{
  .progress-bar{
    background-color: #dcdcdc;
    border-radius: 8px;
    height: 10px;

    .progress-value{
      background-color: var(--text-title-blue-france);
      border-radius: 8px;
      height: 10px;

    }
  }
}

.call-to-action{
  background: var(--background-open-blue-france-hover);
}
.ov-icon{
  color: var(--text-title-blue-france)
}
.sections{
  .section{
    .section-title{
      color: var(--text-title-blue-france)
    }
  }
}
.feedback-question{
  .feedback-question-title{
    color: var(--text-title-blue-france)
  }
}
.title{
  color: var(--text-title-blue-france)
}

</style>

