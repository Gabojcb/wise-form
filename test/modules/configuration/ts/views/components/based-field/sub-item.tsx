import React from 'react';
import { Input, Select } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { IconButton } from 'pragmate-ui/icons';

export function ConditionSubItem() {

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
		<> 
            <strong>Condition:</strong>
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
        </>
	);
}
