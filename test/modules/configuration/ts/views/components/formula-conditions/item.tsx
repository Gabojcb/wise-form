import React from 'react';
import { Input } from 'pragmate-ui/form';
import { IconButton } from 'pragmate-ui/icons';


export function ConditionItem({onDelete, disabled}) {
	return (
		<section className='formula-condition-item'>
			<div className="content-input--delete">
				<Input name='Formula' variant='floating' type='text' label='Formula' />
				<IconButton title='deleted' disabled={disabled} variant="danger" className="xs circle" icon="delete" onClick={onDelete} />
			</div>
			<Input name='condition'variant='floating' type='text' label='Condition' />
		</section>
	);
}
