import React from 'react';
import { ConditionItem } from './item';
import { Button } from 'pragmate-ui/components';
import { useWiseFormContext } from '@bgroup/wise-form/form';
export function BasedField(data) {
	const [items, setItems] = React.useState(1);

	const onFill = () => setItems(items + 1);

	const output = [];
	for (let i = 0; i < items; i++) {
		output.push(<ConditionItem key={i} />);
	}

	return (
		<div>
			<header>
				<Button variant='primary' bordered onClick={onFill}>
					Agregar
				</Button>
			</header>
			{output}
		</div>
	);
}
