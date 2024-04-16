import React from 'react';
import { WiseForm } from '@bgroup/wise-form/form';
import { useFormContext } from './context';
import { FormModel } from '@bgroup/wise-form/form';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { FormulaInput } from './components/formula-conditions';
import { BasedField } from './components/based-field';
import { MultiplyFields } from './components/multiple-fields';
import { ButtonSend } from './components/button-send';
import { InputsList } from './components/inputs';

interface ISettings {
	[key: string]: any;
}

export /*bundle*/
function Main(): JSX.Element {
	const { store } = useFormContext();

	const [active, setActive] = React.useState<FormModel>(store.active);
	const title = `Form: ${active.name}`;

	useBinder([store], () => setActive(store.active));
	
	const types = {
		formula: FormulaInput,
		basedField: BasedField,
		multiplyFields: MultiplyFields,
		buttonSend: ButtonSend,
		inputsList: InputsList
	};
	return (
		<main>
			<h1>{title}</h1>
			<WiseForm types={types} model={active}></WiseForm>
		</main>
	);
}
