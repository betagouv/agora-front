<script setup lang="ts">

import {FetchError} from "ofetch";
import type Consultation from "~/client/types/consultation/consultation";
import {AsyncData} from "nuxt/app";
import Link from "~/client/types/dsfr/link";
import svgBook from '@gouvfr/dsfr/dist/artwork/pictograms/leisure/book.svg'

definePageMeta({
  layout: 'basic'
})

const platformRef : Ref<string| null> = ref('desktop')
const isMobileRef = ref(false)

onMounted(()=>{
  const userAgent = navigator.userAgent
  if (/android/i.test(userAgent)) {
    platformRef.value = 'android'
    isMobileRef.value = true
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    platformRef.value = "iOS";
    isMobileRef.value = true
  }
})

const links: Link[] = [{ to: '/', text: 'Accueil' }, { text: 'Consultation citoyenne' }]

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const consultationId = route.params.id

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/api/public/consultations/${consultationId}`

const { data: consultation, error } = await useFetch(routeUrlgi) as AsyncData<Consultation, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  
  <div>
    <div class="fr-grid fr-mb-1w">
      <div class="fr-grid-row fr-grid-row--middle fr-grid-row--gutters">
        <div class="fr-col-md-6 fr-col-12">
          <img class="fr-responsive-img" :src="consultation.coverUrl" alt="">
        </div>
        <div class="fr-col-md-6 fr-col-12">
          <p class="fr-text--lead">
            {{ consultation.thematique.picto + " " + consultation.thematique.label }}
          </p>
          <h1>{{ consultation.title }}</h1>

          <div v-if="consultation.questionsInfo" class="info-question fr-px-2w fr-py-1w">
            <div class="fr-mb-1w">
              <VIcon
                name="ri-calendar-2-line"
              />
              Jusqu'au {{ new Date(consultation.questionsInfo.endDate).toLocaleDateString()}}
            </div>
            <div class="fr-mb-1w">
              <VIcon
                name="ri-questionnaire-line"
              />
              {{ consultation.questionsInfo.questionCount }}
            </div>
            <div class="fr-mb-1w">
              <VIcon
                name="ri-timer-line"
              />
              {{ consultation.questionsInfo.estimatedTime }}
            </div>
            <div class="fr-mb-1w">
              <VIcon
                name="ri-group-line"
              />
              <span v-if="consultation.questionsInfo.participantCount == 0">
                Aucun participant
              </span>
              <span v-else-if="consultation.questionsInfo.participantCount == 1">
                1 participant
              </span>
              <span v-else>
                {{ consultation.questionsInfo.participantCount }} participants
              </span>
              <div class="fr-mt-1w fr-ml-3w">
                <div class="progress-bar fr-mb-1w">
                  <div class="progress-value" :style="{ width:  (consultation.questionsInfo.participantCount / consultation.questionsInfo.participantCountGoal) *100 + '%' }"></div>
                </div>
                Prochain objectif : {{ consultation.questionsInfo.participantCountGoal }} participants !
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="consultation.consultationDates" class="consultation-dates fr-mb-4w">
      <h2 class="fr-text--lg title">Lancement de la consultation</h2>
      <div class="fr-mb-1w">
        <VIcon
          name="ri-calendar-2-line"
        />
        Du {{ new Date(consultation.consultationDates.startDate).toLocaleDateString()}}
        au {{ new Date(consultation.consultationDates.endDate).toLocaleDateString()}}
      </div>
    </div>

    <div v-if="consultation.responsesInfo" class="info-response fr-px-2w fr-py-1w fr-mb-1w">
      <span class="fr-text--lead">
        {{ consultation.responsesInfo.picto}}
      </span>
      <span class="fr-text--lg" v-html="consultation.responsesInfo.description">
      </span>
    </div>
    
    <div v-if="consultation.infoHeader" class="info-header fr-px-2w fr-py-1w fr-mb-1w">
      <span class="fr-text--lead">
        {{ consultation.infoHeader.picto}}
      </span>
      <span class="fr-text--lg" v-html="consultation.infoHeader.description">
      </span>
    </div>
    
    <ConsultationSections :sections="consultation.body.sections"/>
    
    <DsfrTile 
      v-if="consultation.downloadAnalysisUrl" 
      title="Télécharger la synthèse complète"
      description="Pour aller plus loin, retrouvez l'analyse détaillée de l'ensemble des réponses à cette consultation."
      :to="consultation.downloadAnalysisUrl"
      :download="true"
      :img-src="svgBook"
      class="fr-mb-4w"
    />
    
    <div v-if="consultation.goals" class="goals" >
      <div class="fr-mt-1v" v-for="goal in consultation.goals">
        <span class="fr-text--lead fr-mr-2w">{{ goal.picto }}</span>
        <span v-html="goal.description"></span>
      </div>
    </div>

    <div v-if="consultation.footer" class="footer">
      <h2 class="fr-text--lg title">{{ consultation.footer.title }}</h2>
      <div v-html="consultation.footer.description"></div>
    </div>
    
    <ConsultationHistory v-if="consultation.history" :history="consultation.history" class="fr-mt-6w"/>

    <BandeauTelechargement v-if="consultation.feedbackQuestion" class="feedback-question fr-mt-6w">
      <div class="fr-text--lg fr-mb-1w feedback-question-title" >{{ consultation.feedbackQuestion.picto}} {{ consultation.feedbackQuestion.title}}</div>
      <div v-html="consultation.feedbackQuestion.description"/>
      <div class="fr-text--sm">Téléchargez l'application pour donnez votre avis.</div>
    </BandeauTelechargement>
    
    <BandeauTelechargement class="fr-mt-2w" v-if="consultation.questionsInfo && new Date(consultation.questionsInfo.endDate) >= new Date()">
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

