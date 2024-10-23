<script setup lang="ts">

import { AsyncData } from "nuxt/app";
import AccueilContent from "~/client/types/content/accueilContent";
import { FetchError } from "ofetch";

const runtimeConfig = useRuntimeConfig()

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/content/page-site-vitrine-accueil`

const { data: accueilContent, error } = await useFetch(routeUrl) as AsyncData<AccueilContent, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

const data = [
  {
    "description": accueilContent.value.texteImage1,
    "img": "/fonctionnalite_2.png"
  },
  {
    "description": accueilContent.value.texteImage2,
    "img": "/fonctionnalite_1.png"
  },
  {
    "description": accueilContent.value.texteImage3,
    "img": "/fonctionnalite_3.png"
  }
]
</script>

<template>
  <div class="fr-grid-row fr-grid-row fr-grid-row--gutters fr-grid-row--center">
    <Carte
      v-for="fonctionnalite in data"
      :data="fonctionnalite"
    />
  </div>
</template>