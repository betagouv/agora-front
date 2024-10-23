<script setup lang="ts">
import type { Ref } from 'vue'
import type Link from '~/client/types/dsfr/link';
import { AsyncData } from "nuxt/app";
import DeclarationAccessibiliteContent from "~/client/types/content/declarationAccessibiliteContent";
import { FetchError } from "ofetch";
import PolitiqueConfidentialiteContent from "~/client/types/content/politiqueConfidentialiteContent";

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Politique de confidentialité - Agora',
})

const runtimeConfig = useRuntimeConfig()

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/content/page-site-vitrine-politique-confidentialite`

const { data: politiqueConfidentialite, error } = await useFetch(routeUrl) as AsyncData<PolitiqueConfidentialiteContent, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

const links: Ref<Link[]> = ref([{ to: '/', text: 'Accueil' }, { text: 'Politique de confidentialité' }])
</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <div class="fr-mt-8w" v-html="politiqueConfidentialite.politiqueDeConfidentialite"></div>
</template>