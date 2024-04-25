export const valueOfField = {
	name: "Formula basado en valores de campos",
	title: 'Value Of Field',
	template: ['1', '1'],
	fields: [
		{
			name: 'nameFormula',
			type: 'text',
			label: 'Name',
			required: true, 
		},
		{
			name: 'formulaField',
			type: 'basedField',
			label: 'Based Field',
		},
	],
};
