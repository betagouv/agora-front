<script setup lang="ts">
import type{ Ref } from 'vue'
import type Link from '~/client/types/dsfr/link';

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Retours sur l\'application - Agora',
})

const links: Ref<Link[]> = ref([{to: '/', text: 'Accueil'}, {text: 'Retours sur l\'application'}])
</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  <div class="fr-mt-8w">
    <h1>Retours sur l'application</h1>
  </div>
  <div>
    <p>
      Vous pouvez nous envoyer vos remarques, idées et remontées d'anomalie par email à l'adresse suivante&nbsp;: <a
      href="mailto:contact@agora.gouv.fr"                                                                                                    
      rel="external">contact@agora.gouv.fr</a>
    </p>
  </div>
  <div class="fr-grid-row fr-grid-row--center iframe-wrapper">
    <iframe
      itemid='frameSphinx'
            src='https://cvip.sphinxonline.net/surveyserver/s/Experience_usagers/AGORA_RETEX/questionnaire.htm?ORIGINE_SAISIE=iframe'
            frameborder='0' scrolling='auto' marginheight='0' marginwidth='0'/>   
  </div>
</template>

<style lang="scss">
.iframe-wrapper {
  iframe {
    width: 100%;
    height: 800px;
  }
}
</style>
