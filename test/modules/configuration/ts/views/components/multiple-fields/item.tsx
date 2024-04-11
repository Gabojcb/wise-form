import React from 'react';
import { Input, Select } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';

export function MultiplyItem() {

	const [selectedValue, setSelectedValue] = React.useState(null);

	const handleSelectChange = (event) => {
		const {value} = event.currentTarget
		setSelectedValue(value);
	};

	const conditions = [
		{ value: 'equal', label: 'Equal' },
		{ value: 'lower', label: 'Lower Than' },
		{ value: 'upper', label: 'Greater Than' },
		{ value: 'between', label: 'Between' },
		{ value: 'different', label: 'Different' },
		{ value: 'hasValue', label: 'Has Value' },
		{ value: 'lessOrEqual', label: 'Less or Equal Than' },
		{ value: 'greaterOrEqual', label: 'Greater or Equal Than' },
	];	  
	  
	return (
		<section className='container__multiply-item'>
			<CollapsibleContainer>
				<div className="block-multiply">
					<CollapsibleHeader className='my-header'><strong className='block-formula__strong'>Conditions:</strong></CollapsibleHeader>
					<div className="block-multiply__condition">
						<CollapsibleContent className='formula-collapsible'>
							<div className="formula-collapsible__block">
								<Input type="textarea" label="fields" />
								<strong className='content-condition__strong'>Conditions :</strong>
							</div>
							<div className="content-condition">
								<div className="condition">
									<Select
										label="Type"
										options={conditions}
										value={selectedValue}
										onChange={handleSelectChange}
									/>
									<Input type="text" className="center-input" placeholder="value" />
								</div>
								<div className="formula">
									<Input type="text" placeholder="formula" />
								</div>
							</div>			
						</CollapsibleContent>
					</div>
				</div>
			</CollapsibleContainer>
		</section>
	);
}
