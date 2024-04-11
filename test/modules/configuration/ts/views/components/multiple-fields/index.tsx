import React from 'react';
import { MultiplyItem } from './item';
import { Button } from 'pragmate-ui/components';

export function MultiplyFields(data) {
	const [items, setItems] = React.useState(1);

	const onFill = () => setItems(items + 1);

	const output = [];
	for (let i = 0; i < items; i++) {
		output.push(<MultiplyItem key={i} />);
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
