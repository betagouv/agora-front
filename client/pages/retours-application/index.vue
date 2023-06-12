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
</template>
