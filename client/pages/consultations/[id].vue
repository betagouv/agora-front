<script setup lang="ts">

import {FetchError} from "ofetch";
import type Consultation from "~/client/types/consultation/consultation";
import {AsyncData} from "nuxt/app";
import Link from "~/client/types/dsfr/link";
import svgBook from '@gouvfr/dsfr/dist/artwork/pictograms/leisure/book.svg'
import svgDocumentDownload from '@gouvfr/dsfr/dist/artwork/pictograms/document/document-download.svg'

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

const { data: consultation, error } = await useFetch(routeUrl,{
  onResponse(context) {
    console.log('Interceptor', context.response._data);
  },
}) as AsyncData<Consultation, FetchError>

if (error.value) {
  // throw createError({ statusCode: error.value!.statusCode})
}

</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  
  <div>
    <div class="fr-grid">
      <div class="fr-grid-row fr-grid-row--middle">
        <div class="fr-col-md-6 fr-col-12">
          <img class="fr-responsive-img" :src="consultation.coverUrl" alt="">
        </div>
        <div class="fr-col-md-6 fr-col-12">
          <p class="fr-text--lead">
            {{ consultation.thematique.picto + " " + consultation.thematique.label }}
          </p>
          <h1>{{ consultation.title }}</h1>
        </div>
      </div>
    </div>
    
    <!--    INFO HEADER-->
    <div v-if="consultation.infoHeader" class="info-header fr-px-2w fr-py-1w">
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

<!-- FEEDBACK QUESTIONS   -->
    <div v-if="consultation.feedbackQuestion" class="feedback-question fr-grid">
      <div class="fr-grid-row fr-grid-row--middle">
        <div class="fr-col-12 fr-col-md">
          <div class="fr-text--lg fr-mb-1w feedback-question-title" >{{ consultation.feedbackQuestion.picto}} {{ consultation.feedbackQuestion.title}}</div>
          <div v-html="consultation.feedbackQuestion.description"/>
          <div class="fr-text--sm">Téléchargez l'application pour donnez votre avis </div>
        </div>
        <div class="fr-col-12 fr-col-md fr-grid-row">
          <div v-if="platformRef=='desktop'|| platformRef=='iOS'" class="fr-col-12 fr-col-md-4">
            <a
              v-if="platformRef=='iOS'"
              class="fr-btn fr-btn--secondary"
              href="https://apps.apple.com/app/6449599025"
              target="_blank"
              rel="noopener"
              title="Télécharger sur l’AppStore - nouvelle fenêtre"
            >
              <VIcon
                name="agora-apple"
                class="fr-mr-1w"
              />
              Télécharger sur l’AppStore

            </a>
            <div v-if="platformRef=='desktop'" class="qr-code fr-my-2w">
              <img
                alt="QR code Agora AppStore"
                src="/qrCodes/qr-code-ios.png"
                style="max-width:100px;"
              />
            </div>
          </div>
          <div v-if="platformRef=='desktop'|| platformRef=='android'" class="fr-col-12 fr-col-md-4">
            <a
              v-if="platformRef=='android'"
              class="fr-btn fr-btn--secondary"
              href="https://play.google.com/store/apps/details?id=fr.gouv.agora"
              target="_blank"
              rel="noopener"
              title="Télécharger sur GooglePlay - nouvelle fenêtre"
            >
              <VIcon name="agora-google" class="fr-mr-1w" />
              Télécharger sur GooglePlay
            </a>
            <div v-if="platformRef=='desktop'" class="qr-code fr-my-2w">
              <img
                alt="QR code Agora Google Play"
                src="/qrCodes/qr-code-android.png"
                style="max-width:100px;"
              />
            </div>
          </div>
          <div class="fr-col-offset-md-4"></div>
        </div>
        <div class="fr-col-offset-md-3"></div>
      </div>
       
      
    </div>
  </div>
</template>

<style>
.info-header{
  background-color: #f5f7ff;
  border: 1px solid #c2cefd;
  border-radius: 10px;
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

</style>

