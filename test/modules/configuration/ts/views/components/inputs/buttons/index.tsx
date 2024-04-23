import React, { useState } from 'react';
import { List } from 'pragmate-ui/list';
import { AsideItem } from './item';
import { useInputContext } from '../context';

export function AsideButtons() {
    const { formDataParse } = useInputContext();

    const items = formDataParse.fields;

    return (
        <aside className='aside-buttons'>
            <List className='list-unstyled' items={items} index={items} control={AsideItem} />
        </aside>
    );
}
