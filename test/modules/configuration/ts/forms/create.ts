export const CreateForm = {
	name: 'createForm',
	title: 'Creation',
	template: ['1', '1'],
	fields: [
		{
			name: 'nameForm',
			type: 'text',
			placeholder: 'form...',
			required: true, 
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
