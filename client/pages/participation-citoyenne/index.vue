<script setup lang="ts">
import Link from "~/client/types/dsfr/link";

definePageMeta({
  layout: 'basic',
})

useHead({
  title: 'Mentions légales - Agora',
})
const links: Ref<Link[]> = ref([{ to: '/', text: 'Accueil' }, { text: 'Participation citoyenne' }])
</script>

<template>
  <DsfrBreadcrumb :links="links" />
  <div class="fr-grid-row">
    <img class="fr-col-md-6" src="/en_construction.png"  alt="" />
    <h3 class="fr-col-md-6 fr-mt-5w">Le site <i>participation-citoyenne.gouv.fr</i> fait peau neuve !
      <br><br>
      Nous sommes bientôt de retour.</h3>  
  </div>
</template>

<style>
img {
}

h3 {
  color: var(--blue-france-sun-113-625);
}
</style>