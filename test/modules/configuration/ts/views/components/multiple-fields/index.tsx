import React from 'react';
import { MultiplyItem } from './item';
import { Button } from 'pragmate-ui/components';
import { IconButton } from 'pragmate-ui/icons';

export function MultiplyFields() {
	const [items, setItems] = React.useState([]);

	const onFill = () => setItems([...items, {}]);

	const onDelete = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	const output = items.map((_, index) => (
		<MultiplyItem onDeleteCondition={() => onDelete(index)} key={index} />
	));

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
