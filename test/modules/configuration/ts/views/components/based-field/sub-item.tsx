import React from 'react';
import { Input, Select } from 'pragmate-ui/form';
import { conditionsFormula } from '../../options';

export function ConditionSubItem() {

	const [selectedValue, setSelectedValue] = React.useState(null);

	const handleSelectChange = (event) => {
		const {value} = event.currentTarget
		setSelectedValue(value);
	};
	  
	return (
		<> 
            <div className="content-condition">
                <div className="condition">
                    <Select
                        label="Type"
                        options={conditionsFormula}
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
