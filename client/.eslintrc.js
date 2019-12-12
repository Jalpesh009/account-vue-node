module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'standard',
		'plugin:vue/recommended'
	],
	rules: {
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': 'off',
    	'no-tabs': 'off',
    	'vue/html-indent': 'off',
		'vue/max-attributes-per-line': 'off',
		'space-before-function-paren': 0,
		'vue/space-before-function-paren': 0
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
