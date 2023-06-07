<script setup lang="ts">
const props = defineProps<{
  data: { titre: string, description: string, img: string }
}>()
</script>

<template>
  <div class="fr-col-12 fr-col-md-4">
    <div class="agora-carte fr-p-2w">
      <img
        v-if="data.img"
        :src="data.img"
        class="agora-carte__img"
        alt="Image d'illustration de l'application Agora"
        title="Image d'illustration de l'application Agora"
      >
      <h6 class="agora-carte__titre fr-my-2w">
        {{ data.titre }}
      </h6>
      <div
        class="agora-carte__desc"
        v-html="data.description"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.agora-carte {
  width: 100%;
  border: 1px var(--grey-950-100) solid;
  box-sizing: border-box;

  &__img {
    position: relative;
    width: calc(100% + 2rem);
    left: -1rem;
    top: -1rem;
  }

  &__title {
    color: var(--blue-france-sun-113-625);
    line-height: 1.5rem;
  }

  &__desc {
    font-size: 0.9rem;
  }
}
</style>
