<script setup lang="ts">

import { AsyncData } from "nuxt/app";
import type Consultation from "~/client/types/consultation/consultation";
import { FetchError } from "ofetch";

const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const consultationId = route.params.id
const consultationUpdateId = route.params.updateId
const links = ref()

definePageMeta({
  layout: 'basic'
})

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/v2/consultations/${consultationId}/updates/${consultationUpdateId}`

const {data: consultationUpdate, error} = await useFetch(routeUrl, {
  onResponse({response}) {
    links.value = [
      {to: '/', text: 'Accueil'},
      {to: `/consultations/${consultationId}`, text: "Consultation citoyenne"},
      {text: response._data.history?.find(element => element.updateId == response._data.updateId)?.title ?? ""}
    ]
  },
}) as AsyncData<Consultation, FetchError>

if (error.value) {
  throw createError({statusCode: error.value!.statusCode})
}

</script>

<template>
  <DsfrBreadcrumb :links="links"/>

  <div>
    <ConsultationContent :consultation="consultationUpdate"/>

    <ConsultationHistory v-if="consultationUpdate.history" :history="consultationUpdate.history" :consultation-id="consultationId"
                         :current-update-id="consultationUpdateId" class="fr-mt-6w"/>

    <BandeauTelechargement v-if="consultationUpdate.feedbackQuestion" class="feedback-question fr-mt-6w">
      <div class="fr-text--lg fr-mb-1w feedback-question-title">{{ consultationUpdate.feedbackQuestion.picto }}
        {{ consultationUpdate.feedbackQuestion.title }}
      </div>
      <div v-html="consultationUpdate.feedbackQuestion.description"/>
      <div class="fr-text--sm">Téléchargez l'application pour donner votre avis.</div>
    </BandeauTelechargement>

    <BandeauTelechargement class="fr-mt-2w"
                           v-if="consultationUpdate.questionsInfo && new Date(consultationUpdate.questionsInfo.endDate) >= new Date()">
      Pour répondre à cette consultation, rendez-vous sur l’application Agora.
    </BandeauTelechargement>

  </div>

</template>

<style>

.feedback-question {
  .feedback-question-title {
    color: var(--text-title-blue-france)
  }
}

</style>