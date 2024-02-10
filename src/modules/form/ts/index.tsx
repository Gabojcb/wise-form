import React from 'react';
import { useModel } from './use-model';
import { Control } from './field';
import { ErrorRenderer } from './error';
import { ReactiveFormContext } from './context';
import { FieldContainer } from './rows/row-container';
import { useTemplate } from './use-template';

export /*bundle */ function WiseForm({ children, settings, types, data }): JSX.Element {
	const [ready, model] = useModel(settings, data);

	const { type, styles, items } = useTemplate(settings.template);
	console.log(21, type, styles, items);
	if (!settings.fields) {
		return <ErrorRenderer error='the form does not have fields' />;
	}

	if (!settings.name) {
		return <ErrorRenderer error='the form does not have a name' />;
	}
	const fields = [...settings.fields];
	const Containers = items.map((num, index) => {
		const items = fields.splice(0, num[0]);

		return <FieldContainer template={num} items={items} key={`rf-row--${index}.${num}`} styles={styles} />;
	});

	const value = {
		model,
		name: settings.name,
		template: { type, styles, items },
		formTypes: types ?? {},
	};

	return (
		<ReactiveFormContext.Provider value={value}>
			<form className='reactive-form-container'>
				{Containers}
				<hr />
				{children}
			</form>
		</ReactiveFormContext.Provider>
	);
}
