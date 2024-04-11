export const MultiplyFields = {
	name: "multiplyFields",
	title: 'multiply Fields',
	template: ['1', '1', '1'],
	fields: [
		{
			name: 'formula',
			type: 'text',
			placeholder: 'form...',
			required: true, 
            disabled: false
		},
		{
			name: 'nameFormulaMultiply',
			type: 'text',
			placeholder: 'form...',
			required: true, 
            disabled: false
		},
		{
			name: 'estrutureMultiply',
			type: 'multiplyFields',
			label: 'Multiply Fields',
		},
	],
	
};
