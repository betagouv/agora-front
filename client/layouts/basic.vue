<script setup lang="ts">
import { useScheme } from '@gouvminint/vue-dsfr'

const logoText = ['Gouvernement']
const a11yCompliance = 'Non conforme'
const operatorImgSrc: string = '/logo_agora.svg'
const operatorImgAlt: string = 'Logo du produit Agora'
const operatorImgStyle: any = {
  'max-height': '60px'
}
const operatorImgStyleFooter: any = {
  'max-height': '120px',
  'margin-left': '2rem'
}

const mandatoryLinks: any[] = [{
  label: `Accessibilité : ${a11yCompliance}`,
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

const preferences = reactive({
  theme: undefined,
  scheme: undefined,
})

onMounted(() => {
  const {theme, scheme, setScheme} = useScheme()
  // preferences.scheme = 'dark';
  preferences.scheme = 'light'

  watchEffect(() => {
    preferences.theme = theme.value
  })

  watchEffect(() => setScheme(preferences.scheme))
})
</script>

<template>
  <DsfrHeader :logo-text="logoText"
              :operatorImgSrc="operatorImgSrc"
              :operatorImgAlt="operatorImgAlt"
              :operatorImgStyle="operatorImgStyle"
              serviceTitle="Agora"
              serviceDescription="La première application qui fait dialoguer les citoyens et le Gouvernement"
  />
  <div class="fr-container fr-mb-8w">
    <slot/>
  </div>
  <DsfrFooter :logo-text="logoText"
              :mandatory-links="mandatoryLinks"
              :operatorImgSrc="operatorImgSrc"
              :operatorImgAlt="operatorImgAlt"
              :operatorImgStyle="operatorImgStyleFooter"
  />
</template>
