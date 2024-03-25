export const formulasForm = {
	name: 'Contact',
	title: 'Formulas Form',
	// template: '1;1;1x3',
	template: ['1fr', '1fr', '1fr'],
	gap: '3rem',
	formulas:[ {

		name: 'totalCosto',
		formula: 'a * b'
	}],
	fields: [
		{
			type: 'wrapper',
			template: {
				structure: ['1x4'],
				gap: '3rem',
			},
			control: 'baseWrapper',
			name: 'wrapper-element',
			fields: [
				{
					name: 'totalGraphic',
					label: 'Total grafico',
					type: 'text',
					value: 10,
				},
				{
					name: 'netGraphic',
					type: 'text',
					required: true,
					label: 'Total neto grafico',
				},
				{
					name: 'discountPercentGraphic',
					label: '% de descuento grafico',
					type: 'text',
				},
				{
					name: 'discountAuthorGraphic',
					label: 'Porcentaje de autor grafico',
					type: 'text',
				},
			],
		},

		{
			type: 'wrapper',
			template: {
				structure: ['1x4'],
				gap: '3rem',
			},
			control: 'baseWrapper',
			name: 'wrapper-element2',
			fields: [
				{
					name: 'totalDigital',
					label: 'Total digital',
					type: 'text',
				},
				{
					name: 'netDigital',
					type: 'text',
					required: true,
					label: 'Total neto digital',
				},
				{
					name: 'discountPercentDigital',
					label: '% de descuento digital',
					type: 'text',
				},
				{
					name: 'discountAuthorDigital',
					label: 'Porcentaje de autor digital',
					type: 'text',
				},
			],
		},
		/// SECCION DE FORMULAS Deben estar deshabilitados, se pasa disabled true y dan error
		{
			type: 'wrapper',
			template: {
				structure: ['1x4'],
				gap: '3rem',
			},
			control: 'baseWrapper',
			name: 'wrapper-formulas',
			fields: [
				{
					name: 'formula1',
					label: 'formula 1',
					type: 'text',
					formula: 'totalGraphic / netGraphic', // considerar netGraphic pueder ser 0
				},
				{
					name: 'formula2',
					type: 'text',
					required: true,
					label: 'formula 2',
					formula:
						'((totalGraphic * netGraphic) + (discountPercentGraphic * discountAuthorGraphic)) - ((totalDigital * netDigital) * discountPercentDigital)',
				},
				{
					name: 'formula3',
					label: 'formula 3',
					type: 'text',
					formula: 'totalGraphic * discountPercentGraphic', // Si hay almenos 1 campo lleno en digitales
					//	formula: "discountPercentGraphic + netGraphic" Si no hay campos llenos en digitales
				},
				{
					name: 'formula4',
					label: 'formula 4',
					type: 'text',
					formula: 'A + B + C + / discountPercentGraphic', // B Viene de bd al seleccionar un sello con un select se busca,
					// A = al maximo entre totalGraphic * discountAuthorGraphic y totalDigital * netDigital
					// C = Se tienen 3 tabs
					// si se esta en tab 1 C = minimo ente totalGraphic * totalDigital y discountPercentGraphic * discountAuthorGraphic
					// si esta tab 2 0 3 totalGraphic
				},
			],
		},
	],
};
