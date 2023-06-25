<script setup lang="ts">
import { Ref } from 'vue'

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Agora - Retours sur l\'application',
})

const domainName = useRuntimeConfig().public.domainName
const links: Ref<any[]> = ref([{to: '/', text: 'Accueil'}, {text: 'Retours sur l\'application'}])
</script>

<template>
  <DsfrBreadcrumb :links="links"/>
  <div class="fr-mt-8w">
    <h1>Retours sur l'application</h1>
  </div>
  <div class="fr-grid-row fr-grid-row--center iframe-wrapper">
    <iframe iItemId='frameSphinx'
            src='https://cvip.sphinxonline.net/surveyserver/s/Experience_usagers/AGORA_RETEX/questionnaire.htm?ORIGINE_SAISIE=iframe'
            frameborder='0' scrolling='auto' marginheight='0' marginwidth='0'></iframe>    
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
