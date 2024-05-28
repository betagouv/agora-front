<script setup lang="ts">
import type Link from '~/client/types/dsfr/link';
import type Qag from '~/client/types/qag/qag';
import {Ref} from "vue";
import {FetchError} from "ofetch";
import {AsyncData} from "nuxt/app";

definePageMeta({
  layout: 'basic'
})

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const qagId = route.params.id

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/api/public/qags/${qagId}`

const { data: qag, error } = await useFetch(routeUrl) as AsyncData<Qag, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

const links: Link[] = [{ to: '/', text: 'Accueil' }, { text: 'Questions citoyennes' }]

const mobilePlatformRef: Ref<string | null> = ref(null)
const isMobileRef = ref(false)

onMounted(() => {
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

</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <div class="fr-mt-10w">
    <h1>Questions citoyennes</h1>

    <p class="fr-text--lead">
      {{ `${qag.username} a posé une question au Gouvernement :` }}
    </p>
  
    <div class="question fr-p-2w fr-mx-1w">
      <div>
        <p class="fr-text--lead">
          {{ qag.thematique.picto + " " + qag.thematique.label }}
        </p>
        <h2 class="fr-mt-4w question-text">{{ qag.title }}</h2>
      </div> 
      <div class="fr-mt-6w">
        <p>{{ qag.description }}</p>
      </div>
    </div>



    <div class="video-response fr-mt-2w" v-if="qag.response">
      <p class="fr-text--lead">
        Réponse du gouvernement
      </p>
      
      <div class="fr-px-1w">
        Par <b>{{ qag.response.author }}</b>, le {{ new Date(qag.response.responseDate).toLocaleDateString() }}
        <p class="fr-text--xs"> {{ qag.response.authorDescription}}</p>

        <DsfrVideo
          :src="qag.response.videoUrl"
          :transcription-content="qag.response.transcription"
        />
      </div>

    </div>

    <div class="text-response fr-mt-2w" v-if="qag.textResponse">
      <p class="fr-text--lead">{{ qag.textResponse.responseLabel}}</p>
      <p class="fr-px-1w" v-html="qag.textResponse.responseText"></p>
    </div>
    

    <div class="fr-grid-row fr-grid-row--middle fr-grid-row--center fr-grid-row--gutters fr-mt-1w">
      <div class="fr-col-12 fr-col-md-8">
        <div class="text-grey fr-highlight fr-highlight--orange-terre-battue">
          <div v-if="!qag.response && !qag.textResponse">
            Sa question est actuellement soutenue par
            
              <VIcon
                name="ri-heart-line"
                class="fr-mr-1v heart-icon"
              /> 
            <b>{{ qag.supportCount }} Agoranautes</b>.
            Pour obtenir une réponse, elle devra être en tête des soutiens sur Agora <b>lundi à 14h</b>.
            <p class="fr-mt-2w">Soutenez la question de Jordan ! Télécharger l'application :</p>
          </div>
          <div v-else-if="qag.response">
            <b>{{ qag.response.feedbackQuestion }}</b>
            <p>Répondez à cette question en télechargeant l'application :</p>
          </div>
          <div v-else-if="qag.textResponse">
            <b>{{ qag.textResponse.feedbackQuestion }}</b>
            <p>Répondez à cette question en télechargeant l'application :</p>
          </div>
          <div class="fr-mt-1w fr-grid-row fr-grid-row--middle fr-grid-row--gutters fr-px-md-6w">
            <div v-if="!isMobileRef || mobilePlatformRef == 'iOS'" class="fr-col-12 fr-col-lg-6">
              <a class="fr-btn fr-btn--secondary" href="https://apps.apple.com/app/6449599025" target="_blank"
                rel="noopener" title="Télécharger sur l’AppStore - nouvelle fenêtre">
                <VIcon name="agora-apple" class="fr-mr-1w" />
                Télécharger sur l’AppStore
              </a>
            </div>

            <div v-if="!isMobileRef || mobilePlatformRef == 'android'" class="fr-col-12 fr-col-lg-6">
              <a class="fr-btn fr-btn--secondary" href="https://play.google.com/store/apps/details?id=fr.gouv.agora"
                target="_blank" rel="noopener" title="Télécharger sur GooglePlay - nouvelle fenêtre">
                <VIcon name="agora-google" class="fr-mr-1w" />
                Télécharger sur GooglePlay
              </a>
            </div>

          </div>
        </div>

      </div>
      <div class="fr-col-12 fr-col-md-4">
        <img src="/hero.png" style="width: 95%;
        max-width: 100vw;">
      </div>
    </div>

  </div>
</template>

<style lang="scss">
  .heart-icon {
    color: var(--red-marianne-main-472);
  }
  .question{
    background-color: var(--blue-france-975-75);
  }
  .question-text{
    color: var(--blue-france-sun-113-625)
  }
</style>