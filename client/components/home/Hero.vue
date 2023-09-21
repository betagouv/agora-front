<script setup lang="ts">

</script>

<template>
  <div class="hero fr-grid-row">
    <div class="fr-col-12 fr-col-md-6 fr-grid-row fr-grid-row--middle">
      <div>
        <h1>Agora</h1>
        <p>
          Les citoyens aspirent à partager leurs convictions et idées régulièrement, pas seulement à chaque élection : c’est pourquoi Agora
          propose, pour la première fois, de créer les conditions d’un dialogue démocratique continu entre les citoyens et le Gouvernement.
        </p>
        <div class="fr-grid-row fr-grid-row--gutters">
          <div class="fr-col-12 fr-col-lg-6">
            <a
              class="fr-btn fr-btn--secondary"
              href="https://apps.apple.com/app/6449599025"
              target="_blank"
              rel="noopener"
            >
              <VIcon
                name="agora-apple"
                class="fr-mr-1w"
              />
              Télécharger sur l’AppStore
            </a>
          </div>
          <div class="fr-col-12 fr-col-lg-6">
            <a
              class="fr-btn fr-btn--secondary"
              href="https://play.google.com/store/apps/details?id=fr.gouv.agora"
              target="_blank"
              rel="noopener"
            >
              <VIcon
                name="agora-google"
                class="fr-mr-1w"
              />
              Télécharger pour GooglePlay
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="fr-col-12 fr-col-md-6">
      <img
        src="/hero.png"
        style="max-width: 100%"
        alt="Image d'illustration de l'application Agora"
        title="Image d'illustration de l'application Agora"
      >
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

    &:after {
      display: none;
    }
  }
}

@media screen and (max-width: 767px) {
  .hero {
    text-align: center;
  }
}
</style>
