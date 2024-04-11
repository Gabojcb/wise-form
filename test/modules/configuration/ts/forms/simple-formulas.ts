export const simpleFormulas = {
	name: "simpleFormulas",
	title: 'Simple Formulas',
	template: ['1', '1'],
	fields: [
		{
			name: 'nameFormulaSimple',
			type: 'text',
			label: 'name',
			required: true,
		},
		{
			name: 'formula',
			type: 'text',
			label: 'formula',
			variant: 'floating',
			required: true,
		},
	],
};
