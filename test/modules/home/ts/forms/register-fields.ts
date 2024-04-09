export const registerFields = {
	name: 'registerFields',
	title: 'Register Fields',
	template: ['1', '1'],
	fields: [
		{
			name: 'nameForm',
			type: 'text',
			placeholder: 'form...',
			required: true, 
			label: 'form',
            disabled: false
		},
		{
			name: 'litsFields',
			type: 'textarea',
			placeholder: 'fields...',
			required: true,
		},
	],
};
