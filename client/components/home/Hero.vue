<script setup lang="ts">

import { FetchError } from "ofetch";
import AccueilContent from "~/client/types/content/accueilContent";
import { AsyncData } from "nuxt/app";

const runtimeConfig = useRuntimeConfig()

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/content/page-site-vitrine-accueil`

const { data: accueilContent, error } = await useFetch(routeUrl) as AsyncData<AccueilContent, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}
</script>

<template>
  <BandeauTelechargementAdaptatif 
    :title="accueilContent.titreBody" 
    :description="accueilContent.descriptionBody"
  />
</template>