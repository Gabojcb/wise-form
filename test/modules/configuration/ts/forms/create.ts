export const CreateForm = {
	name: 'createForm',
	title: 'Creation',
	template: ['1', '1', '1'],
	fields: [
		{
			name: 'nameForm',
			type: 'text',
			label: 'Name',
			variant: 'floating',
            disabled: false
		},
		{
			name: 'litsFields',
			type: 'textarea',
			label: 'fields',
			variant: 'floating',
			required: true,
		},
		{
			name: 'btnSend',
			type: 'buttonSend',
		}
	],
};
