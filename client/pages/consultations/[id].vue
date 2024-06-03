<script setup lang="ts">

import {FetchError} from "ofetch";
import type Consultation from "~/client/types/consultation/consultation";
import {AsyncData} from "nuxt/app";
import Link from "~/client/types/dsfr/link";

definePageMeta({
  layout: 'basic'
})

const mobilePlatformRef : Ref<string| null> = ref(null)
const isMobileRef = ref(false)

onMounted(()=>{
  const userAgent = navigator.userAgent
  if (/android/i.test(userAgent)) {
    mobilePlatformRef.value = 'android'
    isMobileRef.value = true
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    mobilePlatformRef.value = "iOS";
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
    console.log('Interceptor', context.response._data.body.sections);
  },
}) as AsyncData<Consultation, FetchError>

if (error.value) {
  // throw createError({ statusCode: error.value!.statusCode})
}



</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  
  test : {{  foo }}

  <div>
    <div class="fr-grid">
      <div class="fr-grid-row fr-grid-row--middle">
        <div class="fr-col-md-6 fr-col-12">
          <img class="fr-responsive-img" :src="consultation.coverURL" alt="">
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
    
<!-- SECtiONS  
  todo : accordions , focus number, images,
 -->
    
    <div class="sections fr-mt-5w" v-if="consultation.body">
      <div class="section" v-for="section in consultation.body.sections">
        <div v-if="section.type=='title'">
          <h2 class="fr-text--lg section-title">{{section.title}}</h2>
        </div>
        
        <div v-else-if="section.type=='richText'">
          <p v-html="section.description"></p>
        </div>
        
        <div v-else-if="section.type=='quote'" class="fr-highlight">
          <p v-html="section.description"></p>
        </div>

        <div v-else-if="section.type=='video'">
          <div v-if="section.authorInfo">
            Par <b>{{ section.authorInfo.name }}</b>, le {{ new Date(section.authorInfo.date).toLocaleDateString() }}
            <p class="fr-text--xs"> {{ section.authorInfo.message}}</p>
          </div>
          <DsfrVideo
            :src="section.url"
            :transcription-content="section.transcription"
          />
        </div>
      </div>
    </div>

<!-- FEEDBACK QUESTIONS   -->
    <div v-if="consultation.feedbackQuestion" class="feedback-question fr-grid">
      <div class="fr-grid-row fr-grid-row--middle">
        <div class="fr-col-12 fr-col-md">
          <div class="fr-text--lg fr-mb-1w feedback-question-title" >{{ consultation.feedbackQuestion.picto}} {{ consultation.feedbackQuestion.title}}</div>
          <div v-html="consultation.feedbackQuestion.description"/>
          <div class="fr-text--sm">Téléchargez l'application pour donnez votre avis </div>
        </div>
        <div class="fr-col-12 fr-col-md fr-grid-row">
          <div v-if="!isMobileRef || mobilePlatformRef=='iOS'" class="fr-col-12 fr-col-md-3">
            
            <div v-if="!isMobileRef" class="qr-code fr-my-2w">
              <img
                alt="QR code Agora AppStore"
                src="/qrCodes/qr-code-ios.png"
                style="max-width:100px;"
              />
            </div>
          </div>
          <div v-if="!isMobileRef || mobilePlatformRef=='android'" class="fr-col-12 fr-col-md-3">
            <div v-if="!isMobileRef" class="qr-code fr-my-2w">
              <img
                alt="QR code Agora Google Play"
                src="/qrCodes/qr-code-android.png"
                style="max-width:100px;"
              />
            </div>
          </div>
          <div class="fr-col-offset-md-6"></div>
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

