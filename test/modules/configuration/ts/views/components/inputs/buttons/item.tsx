import React from 'react';
import { useFormContext } from '../../../context';
import { Button } from 'pragmate-ui/components';
import { useInputContext } from '../context';

export function AsideItem({ item, index }) {

    const { setSelectedItemIndex, itemName , setItemName  } = useInputContext();
	
	
	const handleItemClick = () => {
		setSelectedItemIndex(index);
		setItemName(item);
    };

	const attrs = { variant: 'primary', bordered: true };
	if (itemName === item) attrs.bordered = false;

	return (
		<li>
			<Button {...attrs} onClick={handleItemClick}>{item}</Button>
		</li>
	);
}
