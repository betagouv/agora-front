<script setup lang="ts">

import { FetchError } from "ofetch";
import AccueilContent from "~/client/types/content/accueilContent";
import { AsyncData } from "nuxt/app";
import { Ref } from "vue";

const mobilePlatformRef : Ref<string| null> = ref(null)
const isMobileRef = ref(false)

const runtimeConfig = useRuntimeConfig()

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/content/page-site-vitrine-accueil`

const { data: accueilContent, error } = await useFetch(routeUrl) as AsyncData<AccueilContent, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

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
</script>

<template>
  <div class="hero fr-grid-row">
    <div class="fr-col-12 fr-col-md-6 fr-grid-row fr-grid-row--middle">
      <div>
        <h1>{{accueilContent.titreBody}}</h1>
        <p>
          {{accueilContent.descriptionBody}}
        </p>
        <p>
          <b></b>
        </p>
        <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
          <div v-if="!isMobileRef || mobilePlatformRef=='iOS'" class="fr-col-12 fr-col-lg-6">
            <a
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
            <div v-if="!isMobileRef" class="qr-code fr-my-2w">
              <img
                alt="QR code Agora AppStore"
                src="/qrCodes/qr-code-ios.png"
                style="max-width:150px;"
              />
            </div>
          </div>
          <div v-if="!isMobileRef || mobilePlatformRef=='android'" class="fr-col-12 fr-col-lg-6">
            <a
              class="fr-btn fr-btn--secondary"
              href="https://play.google.com/store/apps/details?id=fr.gouv.agora"
              target="_blank"
              rel="noopener"
              title="Télécharger sur GooglePlay - nouvelle fenêtre"
            >
              <VIcon
                name="agora-google"
                class="fr-mr-1w"
              />
              Télécharger sur GooglePlay
            </a>
            <div v-if="!isMobileRef" class="qr-code fr-my-2w">
              <img
                alt="QR code Agora Google Play"
                src="/qrCodes/qr-code-android.png"
                style="max-width:150px;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fr-col-offset-md-1"/>
    <div class="fr-col-12 fr-col-md-5 hero-image-wrapper">
      <img
        src="/smartphones_complet.png"
        style="max-width: 90%"
      >
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  position: relative;
  color: var(--blue-france-sun-113-625);

  &:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: calc(100%);
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: var(--blue-france-975-75);
    z-index: -1;
  }

  h1 {
    color: var(--blue-france-sun-113-625);
  }

  .fr-btn {
    width: 100%;
    justify-content: center;

    &:after {
      display: none;
    }
  }

  &-image-wrapper {
    display: flex;
    align-items: flex-end;
  }
  
  .qr-code{
    display: flex;
    justify-content: center;
  }
}



@media screen and (max-width: 767px) {
  .hero {
    text-align: center;
  }
}
</style>