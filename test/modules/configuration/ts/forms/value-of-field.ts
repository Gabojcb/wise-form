export const valueOfField = {
	name: "valueOfField",
	title: 'Value Of Field',
	template: ['1', '1'],
    formula: {
		field: "country",
		conditions: [
			{ equal: "0", formula: "discountPercentGraphic + netGraphic" },
			{ equal: "1", formula: "totalGraphic * discountAuthorGraphic" },
			{ equal: "2", formula: "totalDigital * netDigital" }
		]
	},
	fields: [
		{
			name: 'nameValueField',
			type: 'text',
			placeholder: 'form...',
			required: true, 
            disabled: false
		},
	],
};
