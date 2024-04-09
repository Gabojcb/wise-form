export const formForFields = {
	name: 'formForFields',
	title: 'Form For Fields',
	template: ['1', '1'],
	fields: [
		{
			name: 'selectComponent',
			type: 'select',
			placeholder: 'select',
			required: true,
            options: [
				{ value: '1', label: 'Name' },
				{ value: '2', label: 'Label' },
				{ value: '3', label: 'Title' },
				{ value: '4', label: 'Type' },
				{ value: '5', label: 'Placeholder' },
				{ value: '6', label: 'Value' },
				{ value: '7', label: 'Maxlength' },
			],
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
