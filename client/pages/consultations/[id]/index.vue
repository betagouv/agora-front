<script setup lang="ts">

import { FetchError } from "ofetch";
import type Consultation from "~/client/types/consultation/consultation";
import { AsyncData } from "nuxt/app";
import ConsultationsContent from "~/client/types/content/consultationsContent";

definePageMeta({
  layout: 'basic'
})

const platformRef: Ref<string | null> = ref('desktop')
const isMobileRef = ref(false)

onMounted(() => {
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


const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const consultationId = route.params.id

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeConsultationUrl = `${apiBaseUrl}/v2/consultations/${consultationId}`
const {data: consultation, error: errorConsultation} = await useFetch(routeConsultationUrl) as AsyncData<Consultation, FetchError>
if (errorConsultation.value) {
  throw createError({statusCode: errorConsultation.value!.statusCode})
}

const routeUrl = `${apiBaseUrl}/content/page-site-vitrine-consultation`
const { data: content, error } = await useFetch(routeUrl) as AsyncData<ConsultationsContent, FetchError>
if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

const estEnLancement = consultation.value?.consultationDates?.endDate
  && new Date() < new Date(consultation.value.consultationDates.endDate)
</script>

<template>
  <div>

    <ConsultationContent :consultation="consultation"/>

    <!--     ToDo: bouger dans le content -->
    <ConsultationHistory v-if="consultation.history && !estEnLancement"
                         :history="consultation.history"
                         :consultation-slug="consultation.slug"
                         :current-update-id="consultation.lastUpdateSlug ?? consultation.updateId"
                         class="fr-my-6w" />

    <BandeauTelechargement v-if="consultation.feedbackQuestion" class="feedback-question fr-mt-6w">
      <div class="fr-text--lg fr-mb-1w feedback-question-title">{{ consultation.feedbackQuestion.picto }}
        {{ consultation.feedbackQuestion.title }}
      </div>
      <div v-html="consultation.feedbackQuestion.description"/>
      <div class="fr-text--sm" v-html="content.donnezVotreAvis"></div>
    </BandeauTelechargement>

    <BandeauTelechargementAdaptatif
      title="Pour participer, rendez-vous sur l'application Agora"
      v-if="consultation.questionsInfo && new Date(consultation.questionsInfo.endDate) >= new Date()"
    />

  </div>
</template>

<style>
.ov-icon {
  color: var(--text-title-blue-france)
}

.sections {
  .section {
    .section-title {
      color: var(--text-title-blue-france)
    }
  }
}

.feedback-question {
  .feedback-question-title {
    color: var(--text-title-blue-france)
  }
}

.title {
  color: var(--text-title-blue-france)
}

</style>