import { AgoraApple, AgoraGoogle } from '../assets/icons'
import { DsfrBreadcrumb, DsfrFooter, DsfrHeader } from "@gouvminint/vue-dsfr";
import { addIcons, OhVueIcon } from 'oh-vue-icons';

const icons = [
  AgoraApple,
  AgoraGoogle,
]

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DsfrHeader', DsfrHeader);
  nuxtApp.vueApp.component('DsfrFooter', DsfrFooter);
  nuxtApp.vueApp.component('DsfrBreadcrumb', DsfrBreadcrumb);
  addIcons(...icons);
  nuxtApp.vueApp.component('VIcon', OhVueIcon);
})
