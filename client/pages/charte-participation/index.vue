<script setup lang="ts">
import type { Ref } from 'vue'
import type Link from '~/client/types/dsfr/link';
import { AsyncData } from "nuxt/app";
import { FetchError } from "ofetch";
import Participation_charter from "~/client/types/participation_charter/participation_charter";

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Charte de participation - Agora',
})


const runtimeConfig = useRuntimeConfig()

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/participation_charter`

const {data: charte, error} = await useFetch(routeUrl) as AsyncData<Participation_charter, FetchError>

if (error.value) {
  throw createError({statusCode: error.value!.statusCode})
}

const links: Ref<Link[]> = ref([{ to: '/', text: 'Accueil' }, { text: 'Charte de participation' }])
</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <h1>Charte de participation</h1>
  <div v-html="charte.extraText" class="fr-mt-8w">
  </div>
</template>