import React from 'react';
import { Input } from 'pragmate-ui/form';
import { IconButton } from 'pragmate-ui/icons';


export function ConditionItem({onDelete}) {
	return (
		<section className='formula-condition-item'>
			<div className="content-input--delete">
				<Input name='Formula' variant='floating' type='text' label='Formula' />
				<Input name='condition'variant='floating' type='text' label='Condition' />
				<IconButton title='deleted' variant="danger" className="xs circle" icon="delete" onClick={onDelete} />
			</div>
		</section>
	);
}
