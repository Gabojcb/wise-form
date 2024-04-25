export const MultiplyFields = {
	name: "multiplyFields",
	title: 'Formulas multiples campos',
	template: ['1', '1', '1'],
	fields: [
		{
			name: 'formula',
			type: 'text',
			label: 'Formula',
			required: true, 
            disabled: false
		},
		{
			name: 'Nombre',
			type: 'text',
			label: 'form...',
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
