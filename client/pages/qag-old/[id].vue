<script setup lang="ts">
import type Link from '~/client/types/dsfr/link';
import type Qag from '~/client/types/qag/qag';

definePageMeta({
  layout: 'basic'
})

const route = useRoute()
const qagId = route.params.id

const qag : Qag = { 
  id: qagId,
  thematique: {
    label: "Transports",
    picto: "🚊",
  },
  title: `Pourquoi les hoverboards de type "${qagId}" ne sont pas soumis au contrôle technique comme de nombreux moyens de transport ?`,
  description: "Les Hoverboards sont de nos jours de plus en plus présents et surtout en agglomération, ils sont la cause de nombreux accidents. Cela s'explique en grande partie puiqu'il n'y a pas de réglementation quant à une éventuelle bride pour contrôler leur vitesse. La mise en place d'un contrôle technique permettrait de vérifier si le matériel est apte à se retrouver sur la route.",
  date: "23/02/2077",
  username: "Jordan",
  supportCount: "4500"
}

const links: Link[] = [{to: '/', text: 'Accueil'}, {text: 'Question au gouvernement'}]

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

</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  <div class="fr-mt-6w">
    <div>
      <p class="fr-text--lead">
        {{ qag.thematique.picto +" "+ qag.thematique.label }}
      </p>
      <div>
        Par <b>{{ qag.username }}</b> le {{ qag.date }} 
        <div class="fr-ml-2w fr-tag"> 
          <VIcon
            name="ri-heart-line"
            class="fr-mr-1w heart-icon"
          />
          {{ qag.supportCount }} 
        </div>
    </div>     

      <h1 class="fr-mt-4w">{{ qag.title }}</h1>
    </div>
    
    
    <div class="fr-mt-6w">
        <p>{{ qag.description }}</p>  
    </div>

      <div class="fr-grid-row fr-grid-row--middle fr-grid-row--center fr-grid-row--gutters">
        <div class="fr-col-12 fr-col-md-8">
          <div class="text-grey fr-highlight fr-highlight--green-emeraude">


         <div>Nous vous invitons à télécharger l'application Agora pour <b>soutenir</b> la question de {{ qag.username }} ou <strong>partager </strong> la vôtre afin d'obtenir une <b>réponse du gouvernement</b> :</div> 
        <div class="fr-mt-1w fr-grid-row fr-grid-row--middle fr-grid-row--gutters fr-px-md-6w">
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
          </div>
            
        </div>
      </div>

        </div>
        <div class="fr-col-12 fr-col-md-4">
          <img
        src="/hero.png"
        style="width: 95%;
        max-width: 100vw;"
      >
        </div>
      </div>

  </div>
</template>

<style lang="scss">
  .heart-icon {
    color: var(--red-marianne-main-472);
  }
</style>