import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: {}, // ESLint 9+ fix
});

const eslintConfig = [
	...compat.config({
		extends: [
			'eslint:recommended',
			'plugin:react/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:prettier/recommended',
			'plugin:import/errors',
			'plugin:import/warnings',
		],
		plugins: ['react', '@typescript-eslint', 'import'],
		rules: {
			semi: ['error', 'always'],
			'react/jsx-pascal-case': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-template': 'error',
			'react/jsx-filename-extension': [
				1,
				{ extensions: ['.js', '.jsx', '.tsx'] },
			],
			'react/react-in-jsx-scope': 'off',
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'no-var': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
					destructuredArrayIgnorePattern: '^_',
				},
			],
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						['internal'],
						['parent', 'sibling', 'index'],
					],
					'newlines-between': 'always',
				},
			],
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'import/no-unresolved': ['error'],
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			},
		},
	}),
];

export default eslintConfig;
