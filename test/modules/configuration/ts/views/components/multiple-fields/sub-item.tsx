import React from 'react';
import { Input, Select } from 'pragmate-ui/form';
import { conditionsFormula } from '../../options';
import { IconButton } from 'pragmate-ui/icons';

export function MultipleSubItem({ conditionIndex, condition, deleteCondition, updateCondition }) {

  const { type, value, formula } = condition;
	  
	return (
		<> 
            <div className="content-condition">
                <div className="condition">
                    <Select
                        label="Type"
                        options={conditionsFormula}
                        value={type}
                        onChange={(event) => updateCondition(conditionIndex, event .target.value, value, formula)}
                    />
                    <Input
                        type="text"
                        className="center-input"
                        placeholder="value"
                        value={value}
                        onChange={(event) => updateCondition(conditionIndex, type, event.target.value, formula)}
                    />
                    <IconButton
                        title='deleted'
                        variant="danger"
                        className="xs circle"
                        icon="delete"
                        onClick={deleteCondition}
                    />
                    </div>
                    <div className="formula">
                    <Input
                        type="text"
                        placeholder="formula"
                        value={formula}
                        onChange={(event) => updateCondition(conditionIndex, type, value, event.target.value)}
                    />
                </div>
            </div>				
        </>
	);
}
