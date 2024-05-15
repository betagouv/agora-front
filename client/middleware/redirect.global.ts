import type { RouteLocationNormalized } from "~/.nuxt/vue-router-stub";

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, _from: RouteLocationNormalized) => {
  if (to.path.includes('/qags/') || to.path.includes('/consultations/')) {
    return navigateTo('/');
  }
})