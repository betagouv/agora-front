<script setup lang="ts">
import fonctionnalites from '../../data/fonctionnalites.json'

</script>

<template>
  <div class="fr-grid-row fr-grid-row fr-grid-row--gutters fr-grid-row--center">
    <Carte v-for="fonctionnalite in fonctionnalites.data"
           :data="fonctionnalite"
    />
  </div>
</template>