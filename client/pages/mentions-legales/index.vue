<script lang="ts" setup>
import type { Ref } from 'vue'
import type Link from '~/client/types/dsfr/link';
import { AsyncData } from "nuxt/app";
import DeclarationAccessibiliteContent from "~/client/types/content/declarationAccessibiliteContent";
import { FetchError } from "ofetch";
import MentionsLegalesContent from "~/client/types/content/mentionsLegalesContent";

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Mentions légales - Agora',
})

const runtimeConfig = useRuntimeConfig()

const apiBaseUrl = runtimeConfig.public.apiBaseUrl
const routeUrl = `${apiBaseUrl}/content/page-site-vitrine-mentions-legales`

const { data: mentionsLegales, error } = await useFetch(routeUrl) as AsyncData<MentionsLegalesContent, FetchError>

if (error.value) {
  throw createError({ statusCode: error.value!.statusCode})
}

const links: Ref<Link[]> = ref([{ to: '/', text: 'Accueil' }, { text: 'Mentions légales' }])
</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <div class="fr-mt-8w" v-html="mentionsLegales.mentionsLegales"></div>
</template>