import React from 'react';
import { ConditionItem } from './item';
import { IconButton } from 'pragmate-ui/icons';



export function BasedField() {
	
	const [items, setItems] = React.useState([]);

	const onFill = () => setItems([...items, {}]);

	const onDelete = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	const output = items.map((_, index) => (
		<ConditionItem onDeleteCondition={() => onDelete(index)} key={index} />
	));
	return (
		<main className='main__based-field'>
			<header className='header__based-field'>
				<h2>Add Formula</h2>
				<IconButton title='add' variant="primary" onClick={onFill} className="xs circle" icon="add" />
			</header>
			<article className="article__based-field">
				{output}
			</article>
		</main>
	);
}
