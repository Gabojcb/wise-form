import React from 'react';
import { Input } from 'pragmate-ui/form';
export function ConditionItem() {
	return (
		<div>
			<label>Formula</label>
			<Input name='Formula' />
			<label>Condition</label>
			<Input name='condition' />
		</div>
	);
}
