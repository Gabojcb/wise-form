export const conditionsMultipleFields = {
	name: "conditionsMultipleFields",
	title: 'Conditions Multiple Fields',
	template: ['1', '1'],
	formula: "discountPercentGraphic * discountAuthorGraphic",
    conditions: [
		{
			fields: ["totalGraphic", "netGraphic", "discountPercentGraphic", "discountAuthorGraphic"],
			conditions: [
				{ condition: "hasValue", formula: "totalGraphic * discountAuthorGraphic" },
				{ upper: 5, formula: "totalGraphic * discountAuthorGraphic + 10" }
			]
		}
	],
	fields: [
		{
			name: 'nameFormulaField',
			type: 'text',
			placeholder: 'form...',
			required: true, 
            disabled: false
		},
	],
	
};
