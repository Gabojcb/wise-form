import React from 'react';
import { Input } from 'pragmate-ui/form';
import { Empty } from 'pragmate-ui/empty';
import { ContentFieldItem } from './item';

export function InputsList() {

    const formData = localStorage.getItem('formData');
    const formDataParse = JSON.parse(formData);

    const numberConverted = Number(formDataParse.numberFields);

    const output = formDataParse.numberFields > 0 ? (
        Array.from({ length: numberConverted }).map((_, index) => (
            <ContentFieldItem key={index} index={index} />
        ))
    ) : (
        <Empty text="There are no saved fields to configure" icon="info" />
    );
	return (
		<main className="inputs-list">
            <section className="inputs-list__section">
                {output}
            </section>
        </main>
	);
}
