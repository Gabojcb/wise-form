import React from 'react';
import { Input } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { IconButton } from 'pragmate-ui/icons';
import { ConditionSubItem } from './sub-item';

export function ConditionItem() {
	const [items, setItems] = React.useState([]);

	const onFill = () => setItems([...items, {}]);

	const onDelete = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	const isDisabled = items.length < 2;

	const output = items.map((_, index) => (
		<ConditionSubItem disabled={isDisabled} onDelete={() => onDelete(index)} key={index} />
	));

	return (
		<section className='container__formula-item'>
			<CollapsibleContainer>
				<div className="block-formula">
					<CollapsibleHeader className='block-formula__header'>
						<strong className='block-formula__strong'>Formula: </strong>
					</CollapsibleHeader>
					<Input placeholder="field" name='fields' />
					<div className="block-formula__condition">
						<CollapsibleContent className='formula-collapsible'>
							<div className="formula-collapsible__action">
								<strong>Condition:</strong>
								<IconButton title='add' variant="primary" onClick={onFill} className="xs circle" icon="add" />
							</div>
							{output}
						</CollapsibleContent>
					</div>
				</div>
			</CollapsibleContainer>
		</section>
	);
}
