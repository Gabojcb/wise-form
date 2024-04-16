import React from 'react';
import { Input } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { IconButton } from 'pragmate-ui/icons';
import { ConditionSubItem } from './sub-item';

export function ConditionItem({onDeleteCondition}) {
	const [items, setItems] = React.useState([]);

	const onFill = () => setItems([...items, {}]);

	const onDelete = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	const output = items.map((_, index) => (
		<ConditionSubItem onDelete={() => onDelete(index)} key={index} />
	));

	return (
		<section className='container__based-item'>
			<CollapsibleContainer>
				<div className="block-based">
					<CollapsibleHeader className='block-based__header'>
						<h3 className='block-based__strong'>Formula: </h3>
						<IconButton title='remove' variant="danger" className="xs circle" icon="close" onClick={onDeleteCondition} />
					</CollapsibleHeader>
					<Input placeholder="field" name='fields' />
					<div className="block-based__condition">
						<CollapsibleContent className='based-collapsible'>
							<div className="based-collapsible__action">
								<h4>Condition:</h4>
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
