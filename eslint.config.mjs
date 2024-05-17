import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    ignores: [
      "node_modules/*",
      "dist/*"
    ],
    rules: {
      "vue/multi-word-component-names" : "off",
      "vue/valid-v-for" : "off", //index not always be usefull
      "vue/no-multiple-template-root": "off" //vue3 manage this
    }
  }
)
