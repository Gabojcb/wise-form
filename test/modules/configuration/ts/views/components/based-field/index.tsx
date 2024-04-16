import React from 'react';
import { ConditionItem } from './item';
import { IconButton } from 'pragmate-ui/icons';



export function BasedField() {
	const [items, setItems] = React.useState(1);

	const onFill = () => setItems(items + 1);

	const output = [];
	for (let i = 0; i < items; i++) {
		output.push(<ConditionItem key={i} />);
	}

	return (
		<main className='main__based-field'>
			<header className='header__based-field'>
				<h3>Add Formula</h3>
				<IconButton title='add' variant="primary" onClick={onFill} className="xs circle" icon="add" />
			</header>
			<article className="article__based-field">
				{output}
			</article>
		</main>
	);
}
