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

	const isDisabled = items.length < 2;

	const output = items.map((_, index) => (
		<MultipleSubItem disabled={isDisabled} onDelete={() => onDelete(index)} key={index} />
	));

	  
	return (
		<section className='container__multiply-item'>
			<CollapsibleContainer>
				<div className="block-multiply">
					<CollapsibleHeader className='my-header'><strong className='block-formula__strong'>Conditions:</strong></CollapsibleHeader>
					<div className="block-multiply__condition">
						<CollapsibleContent className='formula-collapsible'>
							<div className="formula-collapsible__block">
								<Input type="textarea" label="fields" />
								<div className="content-action">
									<strong className='content-condition__strong'>Conditions :</strong>
									<IconButton variant="primary" onClick={onFill} className="xs circle" icon="add" />
								</div>
							</div>
							{output}
						</CollapsibleContent>
					</div>
				</div>
			</CollapsibleContainer>
		</section>
	);
}
