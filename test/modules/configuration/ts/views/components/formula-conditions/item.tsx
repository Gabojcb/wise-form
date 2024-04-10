import React from 'react';
import { Input } from 'pragmate-ui/form';
export function ConditionItem() {
	return (
		<div>
			<label>Condition</label>
			<Input name='condition' />
			<label>Formula</label>
			<Input name='Formula' />
		</div>
	);
}
