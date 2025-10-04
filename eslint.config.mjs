// @ts-check
import pluginVue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here
  [
    ...pluginVue.configs['flat/recommended'],
    {
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
)
