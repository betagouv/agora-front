<script setup lang="ts">
import Consultation from "~/client/types/consultation/consultation";
import svgBook from "@gouvfr/dsfr/dist/artwork/pictograms/leisure/book.svg";

const props = defineProps<{
  consultation: Consultation
}>()

const estEnLancement = props.consultation.consultationDates?.endDate
  && new Date() < new Date(props.consultation.consultationDates.endDate)
</script>

<template>
  <p class="announcer fr-h3 fr-my-4w">
      Grande consultation citoyenne
      <span class="fr-text--xl">lancée par le ministère ???</span>
<!--     ToDo: compléter le ministère-->
  </p>
  
  <div class="fr-grid fr-mb-2w">
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
            <span class="fr-pl-1v" v-if="consultation.questionsInfo.participantCount == 0">Aucun participant</span>
            <span class="fr-pl-1v" v-else-if="consultation.questionsInfo.participantCount == 1">
                1 participant
              </span>
            <span class="fr-pl-1v" v-else>
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

  <div v-if="consultation.goals" class="goals fr-p-3w fr-my-4w" >
    <div class="fr-mt-1v" v-for="goal in consultation.goals">
      <span class="fr-text--lead fr-mr-2w">{{ goal.picto }}</span>
      <span v-html="goal.description"></span>
    </div>
  </div>

  <ConsultationHistory
    v-if="consultation.history && !estEnLancement"
    :history="consultation.history"
    :consultation-slug="consultation.slug"
    :current-update-id="consultation.lastUpdateSlug ?? consultation.updateId"
    class="fr-my-6w"
  />

  <div v-if="consultation.responsesInfo" class="info-response fr-px-2w fr-py-1w fr-mb-1w">
    <span class="fr-text--lead">
      {{ consultation.responsesInfo.picto }}
    </span>
    <span class="fr-text--lg fr-ml-1w" v-html="consultation.responsesInfo.description"></span>
  </div>

  <div v-if="consultation.infoHeader" class="info-header fr-px-2w fr-py-1w fr-mb-1w">
      <span class="fr-text--lead">
        {{ consultation.infoHeader.picto }}
      </span>
    <span class="fr-text--lg fr-ml-1w" v-html="consultation.infoHeader.description"></span>
  </div>
  
  <ConsultationSections :sections="consultation.body.headerSections"/>
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

  <div v-if="consultation.footer" class="footer">
    <h2 class="fr-text--lead title">{{ consultation.footer.title }}</h2>
    <div v-html="consultation.footer.description"></div>
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
.title{
  color: var(--text-title-blue-france)
}

.goals{
  background-color: #eeeeee;
}

.announcer {
  text-align: center;
  > span {
    display: block;
  }
}
</style>