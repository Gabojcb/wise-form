import React from 'react';
import { WiseForm } from '@bgroup/wise-form/form';
import { useFormContext } from './context';
import { Button } from 'pragmate-ui/components';
import { ReactSelect } from 'pragmate-ui/form/react-select';
import { Wrapper } from './wrapper';
import { AppInput } from './components/app-input';
import { FormModel } from '@bgroup/wise-form/form';
import { Div } from './components/div';
import { Section } from './components/section';
import { Select } from './components/select';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { FormulaInput } from './components/formula-conditions';

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
	const types = {
		formula: FormulaInput,
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
