const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin')

// Disable typescript linting rules for certain kinds of files
const permissiveTypescriptRules = Object.keys(
	typescriptEslintPlugin.rules
).reduce((table, rule) => {
	table[`@typescript-eslint/${rule}`] = ['off']
	return table
}, {})

/** @type {import('@types/eslint').Linter.BaseConfig}*/
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	plugins: ['@typescript-eslint', 'jest', 'jsx-a11y'],
	extends: [
		'eslint:recommended',
		'next/core-web-vitals',
		'plugin:@typescript-eslint/strict',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	rules: {
		'no-console': ['warn'],
		'import/newline-after-import': ['error'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'function' },
		],
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports' },
		],
		'@typescript-eslint/consistent-type-definitions': 'off',
	},
	// While we use vitest instead of jest, because of the very similar API, we
	// can still make good use of jest's linting plugin
	settings: {
		jest: {
			version: 28,
		},
		react: {
			version: '18',
		},
	},
	overrides: [
		{
			files: ['*.test.*'],
			rules: {
				...permissiveTypescriptRules,
			},
		},
	],
}
