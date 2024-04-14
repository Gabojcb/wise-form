export const FieldsForm = {
	name: 'fieldsForm',
	title: 'Fields',
	template: ['1', '1', '1'],
	fields: [
		{
			name: 'listOfInputs',
			type: 'inputsList',
			label: 'listOfInputs',
		},
		{
			name: 'formula',
			type: 'formula',
			label: 'Formula',
		},
		{
			name: 'create',
			type: 'button',
			label: 'Create',
			variant: 'primary',
			className: 'right',
		},
	],
};
