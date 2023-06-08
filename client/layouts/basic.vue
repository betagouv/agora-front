<script setup lang="ts">
import { useScheme } from '@gouvminint/vue-dsfr'

const serviceTitle = 'Agora'
const serviceDescription = 'Description du service'
const logoText = ['Intitulé']
const a11yCompliance = 'Non conforme'

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
  const { theme, scheme, setScheme } = useScheme()
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
    v-model="query"
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
  />
  <div class="fr-container fr-mb-8w">
    <slot />
  </div>
  <DsfrFooter
    :logo-text="logoText"
    :mandatory-links="mandatoryLinks"
  />
</template>
