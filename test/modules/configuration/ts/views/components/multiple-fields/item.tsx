import React from 'react';
import { Input } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { MultipleSubItem } from './sub-item';
import { IconButton } from 'pragmate-ui/icons';

export function MultiplyItem() {

	const [items, setItems] = React.useState([]);

	const onFill = () => setItems([...items, {}]);

	const onDelete = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	const output = items.map((_, index) => (
		<MultipleSubItem onDelete={() => onDelete(index)} key={index} />
	));

	return (
		<CollapsibleContainer>
			<section className='container__multiply-item'>
				<div className="block-multiply">
					<CollapsibleHeader className='my-header'>
						<h3 className='block-formula__strong'>Conditions:</h3>
					</CollapsibleHeader>
					<div className="block-multiply__condition">
						<CollapsibleContent className='formula-collapsible'>
							<div className="formula-collapsible__block">
								<Input type="textarea" variant='floating' label="fields" />
								<div className="content-action">
									<h4 className='content-condition__strong'>Conditions :</h4>
									<IconButton variant="primary" onClick={onFill} className="xs circle" icon="add" />
								</div>
							</div>
							{output}
						</CollapsibleContent>
					</div>
				</div>
			</section>
		</CollapsibleContainer>
	);
}
