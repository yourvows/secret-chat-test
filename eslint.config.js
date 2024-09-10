import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	{ languageOptions: { globals: globals.browser } },
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } }
	},
	{
		rules: {
			'vue/no-multiple-objects-in-class': 'warn',
			'vue/no-async-in-computed-properties': 'error',
			'vue/no-child-content': 'error',
			'vue/no-unused-vars': 'warn',
			'vue/no-use-v-if-with-v-for': 'error',
			'vue/prefer-separate-static-class': 'error',
			'vue/prefer-true-attribute-shorthand': 'warn',
			'vue/html-self-closing': 'off',
			'vue/html-comment-content-newline': 'warn',
			'vue/multi-word-component-names': 'off',
			// TypeScript rules
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-empty-function': 'warn',
			'@typescript-eslint/no-empty-object-type': 'warn',
			'no-console': 'warn',
			eqeqeq: 'off'
		}
	}
]
