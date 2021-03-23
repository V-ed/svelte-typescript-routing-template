module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
			},
		],
		indentation: ['tab'],
		'declaration-block-trailing-semicolon': null,
		'no-descending-specificity': null,
		'rule-empty-line-before': ['always', { ignore: ['inside-block'] }],
	},
	ignoreFiles: ['dist/**/*', 'node_modules/**/*'],
};
