import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';

export default [
  { ignores: ['dist/**', 'dev-dist/**', 'node_modules/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // route views use single-word names (Home, Music, ...)
      'vue/multi-word-component-names': 'off',
      // Modal.vue is mounted/unmounted by its parent with v-if, so the transition only animates entry
      'vue/require-toggle-inside-transition': 'off',
    },
  },
];
