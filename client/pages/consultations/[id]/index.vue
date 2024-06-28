<script setup lang="ts">

import {FetchError} from "ofetch";
import type Consultation from "~/client/types/consultation/consultation";
import {AsyncData} from "nuxt/app";
import Link from "~/client/types/dsfr/link";

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

const { data: consultation, error } = await useFetch(routeUrl) as AsyncData<Consultation, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  
  <div>
    
    <ConsultationContent :consultation="consultation" />
    
    <ConsultationHistory v-if="consultation.history" :history="consultation.history" :consultation-id="consultationId" :current-update-id="consultation.history.find(el => el.status === 'current')?.updateId" class="fr-mt-6w"/>

    <BandeauTelechargement v-if="consultation.feedbackQuestion" class="feedback-question fr-mt-6w">
      <div class="fr-text--lg fr-mb-1w feedback-question-title" >{{ consultation.feedbackQuestion.picto}} {{ consultation.feedbackQuestion.title}}</div>
      <div v-html="consultation.feedbackQuestion.description"/>
      <div class="fr-text--sm">Téléchargez l'application pour donner votre avis.</div>
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

