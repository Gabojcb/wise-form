import React from 'react';
import { Input, Select } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { IconButton } from 'pragmate-ui/icons';
import { ConditionSubItem } from './sub-item';

export function ConditionItem() {
	const [items, setItems] = React.useState(1);

	const onFill = () => setItems(items + 1);

	const output = [];
	for (let i = 0; i < items; i++) {
		output.push(<ConditionSubItem key={i} />);
	}

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
								<IconButton variant="primary" onClick={onFill} className="xs circle" icon="add" />
							</div>
							{output}
						</CollapsibleContent>
					</div>
				</div>
			</CollapsibleContainer>
		</section>
	);
}
