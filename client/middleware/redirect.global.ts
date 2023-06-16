export default defineNuxtRouteMiddleware((to: any, from: any) => {
  if (to.path.includes('/qags/') || to.path.includes('/consultations/')) {
    return navigateTo('/');
  }
})