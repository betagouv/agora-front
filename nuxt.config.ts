import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: `Agora`,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          name: 'description',
          content: `Avec Agora, bla bla bla.`
        },
        {name: 'format-detection', content: 'telephone=no'},
        {property: 'og:title', content: `Agora`},
        {
          property: 'og:description',
          content: `Avec Agora, bla bla bla.`
        },
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: `https://${process.env.DOMAIN_NAME}`},
        {property: 'og:locale', content: 'fr_FR'},
        {property: 'og:image', content: `https://${process.env.DOMAIN_NAME}/favicon.svg`},
      ],
      link: [
        {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'}
      ],
      htmlAttrs: {
        lang: 'fr'
      }
    }
  },
  css: [
    '@gouvfr/dsfr/dist/dsfr.min.css',
    '@gouvfr/dsfr/dist/utility/icons/icons.min.css',
    '@gouvminint/vue-dsfr/styles',
  ],
  ignore: [
    '**/*.test.*',
    '**/*.spec.*',
    '**/*.cy.*',
  ],
  srcDir: 'client/',
  runtimeConfig: {
    public: {
      domainName: process.env.DOMAIN_NAME
    }
  },
})
