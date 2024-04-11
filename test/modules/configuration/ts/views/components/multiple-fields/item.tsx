import React from 'react';
import { Input } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { MultipleSubItem } from './sub-item';
import { IconButton } from 'pragmate-ui/icons';

export function MultiplyItem() {

	const [items, setItems] = React.useState(1);

	const onFill = () => setItems(items + 1);

	const output = [];
	for (let i = 0; i < items; i++) {
		output.push(<MultipleSubItem key={i} />);
	}
	  
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
