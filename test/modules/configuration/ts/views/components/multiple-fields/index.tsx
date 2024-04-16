import React from 'react';
import { MultiplyItem } from './item';
import { Button } from 'pragmate-ui/components';
import { IconButton } from 'pragmate-ui/icons';

export function MultiplyFields() {
	const [items, setItems] = React.useState(1);

	const onFill = () => setItems(items + 1);

	const output = [];
	for (let i = 0; i < items; i++) {
		output.push(<MultiplyItem key={i} />);
	}

	return (
		<main className='main__multiple-fields'>
			<header className='header__multiple-fields'>
				<h2>Add condition</h2>
				<IconButton title='add' variant="primary" onClick={onFill} className="xs circle" icon="add" />
			</header>
			<article className="article__multiple-fields">
				{output}
			</article>
		</main>
	);
}
