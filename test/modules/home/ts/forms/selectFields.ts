export const selectFields = {
	name: 'selectFields',
	title: 'Select Fields',
	template: ['1', '1'],
	fields: [
		{
			name: 'selectComponent',
			type: 'select',
			placeholder: 'select',
			required: true,
            options: [
				{
					value: 'Colombia',
					label: 'Colombia',
				},
				{
					value: 'Ecuador',
					label: 'Ecuador',
				},
				{
					value: 'Peru',
					label: 'Peru',
				},
				{
					value: 'Venezuela',
					label: 'Venezuela',
				},
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
