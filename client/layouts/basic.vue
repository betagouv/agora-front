<script setup lang="ts">
import { useScheme } from '@gouvminint/vue-dsfr'
import type { CSSProperties } from 'nuxt/dist/app/compat/capi';

const logoText = ['Gouvernement']
const a11yCompliance = 'Partiellement conforme'
const operatorImgSrc: string = '/logo_agora.svg'
const operatorImgStyle: Record<string, string> = {
  'max-height': '60px',
  'width': '60px'
}
const operatorImgStyleFooter: CSSProperties = {
  'max-height': '120px',
  'margin-left': '2rem'
}

const mandatoryLinks: {label: string, to: string}[] = [{
  label: `Accessibilité: ${a11yCompliance}`,
  to: '/accessibilite',
}, {
  label: 'Mentions légales',
  to: '/mentions-legales',
}, {
  label: 'Politique de confidentialité',
  to: '/politique-confidentialite',
}, {
  label: 'Conditions générales d\'utilisation',
  to: '/cgu',
}, {
  label: 'Charte de participation',
  to: '/charte-participation',
}, {
  label: 'Retours sur l\'application',
  to: '/retours-application',
}]

const ecosystemLinks: {label: string, href: string}[] = [{  
    href: 'https://www.info.gouv.fr/',
    label: 'info.gouv.fr',
  }, {
    href: 'https://www.service-public.fr/',
    label: 'service-public.fr',
  }, {
    href: 'https://legifrance.gouv.fr/',
    label: 'legifrance.gouv.fr',
  }, {
    href: 'https://data.gouv.fr/',
    label: 'data.gouv.fr',
}]

const preferences = reactive({
  theme: '',
  scheme: '',
})

onMounted(() => {
  const {theme, setScheme} = useScheme()
  // preferences.scheme = 'dark';
  preferences.scheme = 'light'

  watchEffect(() => {
    preferences.theme = theme.value
  })

  watchEffect(() => setScheme(preferences.scheme))
})
</script>

<template>
  <DsfrHeader
    :logo-text="logoText"
    :operator-img-src="operatorImgSrc"
    :operator-img-style="operatorImgStyle"
    service-title="Agora"
    service-description="La première application qui fait dialoguer les citoyens et le Gouvernement"
  />
  <main>
    <div class="fr-container fr-mb-8w">
      <slot/>
    </div>    
  </main>
  <DsfrFooter
    :logo-text="logoText"
    :mandatory-links="mandatoryLinks"
    :operator-img-src="operatorImgSrc"
    :operator-img-style="operatorImgStyleFooter"
    :ecosystem-links="ecosystemLinks"
  />
</template>
