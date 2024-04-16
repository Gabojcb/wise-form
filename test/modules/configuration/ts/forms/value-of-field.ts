export const valueOfField = {
	name: "valueOfField",
	title: 'Value Of Field',
	template: ['1', '1'],
	fields: [
		{
			name: 'nameFormula',
			type: 'text',
			label: 'Name',
			variant: 'floating',
			required: true, 
		},
		{
			name: 'formulaField',
			type: 'basedField',
			label: 'Based Field',
		},
	],
};
