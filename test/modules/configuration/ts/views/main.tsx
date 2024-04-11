import React from 'react';
import { WiseForm } from '@bgroup/wise-form/form';
import { useFormContext } from './context';
import { Button } from 'pragmate-ui/components';
import { FormModel } from '@bgroup/wise-form/form';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { FormulaInput } from './components/formula-conditions';
import { BasedField } from './components/based-field';
import { MultiplyFields } from './components/multiple-fields';

interface ISettings {
	[key: string]: any;
}

export /*bundle*/
function Main(): JSX.Element {
	const { store } = useFormContext();

	const [active, setActive] = React.useState<FormModel>(store.active);
	const current = store.selected;
	const title = `Form: ${active.name}`;

	useBinder([store], () => setActive(store.active));
	console.log(MultiplyFields);
	const types = {
		formula: FormulaInput,
		basedField: BasedField,
		multiplyFields: MultiplyFields
	};
	return (
		<main>
			<h1>{title}</h1>
			<WiseForm types={types} model={active}>
				{/* <Button onClick={handleSendInfo} variant='primary'>
					Enviar
				</Button> */}
			</WiseForm>
		</main>
	);
}
