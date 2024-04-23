import React, { useState } from 'react';
import { Input } from 'pragmate-ui/form';
import { Empty } from 'pragmate-ui/empty';
import { ContentFieldItem } from './item';
import { AsideButtons } from './buttons';
import { InputContext } from './context';

export function InputsList() {

    const formData = localStorage.getItem('formData');
    const formDataParse = JSON.parse(formData);

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [itemName, setItemName] = useState(null);

    const output = selectedItemIndex !== null ? (
        <ContentFieldItem index={selectedItemIndex} />
      ) : (
        <Empty text="Please select an item from the list" icon="info" />
      );

    const value = {selectedItemIndex, setSelectedItemIndex, formDataParse, itemName, setItemName}

    return (
        <InputContext.Provider value={value}>
            <main className="inputs-list">
                <AsideButtons />
                <section className="inputs-list__section">
                    {output}
                </section>
            </main>
        </InputContext.Provider>
    );
}
