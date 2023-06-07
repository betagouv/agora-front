<script setup lang="ts">

</script>

<template>
  <div class="hero fr-grid-row">
    <div class="fr-col-12 fr-col-md-6 fr-grid-row fr-grid-row--middle">
      <div>
        <h1>Nom de l'application</h1>
        <p>
          Proposition de valeur de l’application.<br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-12 fr-col-lg-6">
            <DsfrButton icon="agora-apple"
                        label="Télécharger sur l’AppStore"
                        secondary/>
          </div>
          <div class="fr-col-12 fr-col-lg-6">
            <DsfrButton icon="agora-google"
                        label="Télécharger pour GooglePlay"
                        secondary/>
          </div>
        </div>
      </div>
    </div>
    <div class="fr-col-12 fr-col-md-6">
      <img src="/hero.png"
           style="max-width: 100%"
           alt="Image d'illustration de l'application Agora"
           title="Image d'illustration de l'application Agora"
      />
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  position: relative;
  color: var(--blue-france-sun-113-625);

  &:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: calc(100% - 7px);
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: var(--blue-france-975-75);
    z-index: -1;
  }

  h1 {
    color: var(--blue-france-sun-113-625);
  }

  .fr-btn {
    width: 100%;
    justify-content: center;
  }
}

@media screen and (max-width: 767px) {
  .hero {
    text-align: center;
  }
}
</style>