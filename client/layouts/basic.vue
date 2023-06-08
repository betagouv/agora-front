<script setup lang="ts">
import { useScheme } from '@gouvminint/vue-dsfr'

const logoText = ['Gouvernement']
const a11yCompliance = 'Non conforme'
const operatorImgSrc: string = '/logo_agora.svg'
const operatorImgAlt: string = 'Logo du produit Agora'
const operatorImgStyle: any = {
  'max-height': '80px'
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
  />
  <div class="fr-container fr-mb-8w">
    <slot/>
  </div>
  <DsfrFooter :logo-text="logoText"
              :mandatory-links="mandatoryLinks"
              :operatorImgSrc="operatorImgSrc"
              :operatorImgAlt="operatorImgAlt"
              :operatorImgStyle="operatorImgStyle"
  />
</template>
