<script setup lang="ts">
import type { Ref } from 'vue'
import type Link from '~/client/types/dsfr/link';
import { AsyncData } from "nuxt/app";
import DeclarationAccessibiliteContent from "~/client/types/content/declarationAccessibiliteContent";
import { FetchError } from "ofetch";
import ConditionGeneralesContent from "~/client/types/content/conditionGeneralesContent";

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'CGU - Agora',
})

const runtimeConfig = useRuntimeConfig()

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/content/page-site-vitrine-conditions-generales`

const { data: conditionGenerales, error } = await useFetch(routeUrl) as AsyncData<ConditionGeneralesContent, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

const links: Ref<Link[]> = ref([{ to: '/', text: 'Accueil' }, { text: 'Conditions générales d\'utilisation' }])
</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <div class="fr-mt-8w" v-html="conditionGenerales.conditionsGeneralesDUtilisation"></div>
</template>