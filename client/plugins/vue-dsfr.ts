import VueDsfr from '@gouvminint/vue-dsfr'
import { AgoraApple, AgoraGoogle } from '../assets/icons'

const icons = [
  AgoraApple,
  AgoraGoogle,
]

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDsfr, { icons })
})
