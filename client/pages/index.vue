<script setup lang="ts">
import Presentation from "~/client/components/home/Presentation.vue";

definePageMeta({
  layout: 'basic',
})

useHead({
  title: `Agora - Accueil`
})
</script>

<template>
  <HomeHero class="fr-pt-4w"/>
  <HomeFonctionnalites class="fr-mt-4w"/>
  <HomePresentation class="fr-mt-4w"/>
</template>
