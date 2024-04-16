import React from 'react';
import { Input, Select } from 'pragmate-ui/form';
import { conditionsFormula } from '../../options';
import { IconButton } from 'pragmate-ui/icons';

export function MultipleSubItem({onDelete}) {

	const [selectedValue, setSelectedValue] = React.useState('');

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
                    <IconButton title='deleted' variant="danger" className="xs circle" icon="delete" onClick={onDelete} />
                </div>
                <div className="formula">
                    <Input type="text" placeholder="formula" />
                </div>
            </div>			
        </>
	);
}
