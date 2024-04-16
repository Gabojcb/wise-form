export const MultiplyFields = {
	name: "multiplyFields",
	title: 'multiply Fields',
	template: ['1', '1', '1'],
	fields: [
		{
			name: 'formula',
			type: 'text',
			label: 'Formula',
			required: true, 
			variant: 'floating',
            disabled: false
		},
		{
			name: 'Nombre',
			type: 'text',
			label: 'form...',
			variant: 'floating',
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
