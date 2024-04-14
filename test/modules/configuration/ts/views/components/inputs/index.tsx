import React from 'react';
import { Button } from 'pragmate-ui/components';
import { Input } from 'pragmate-ui/form';
import { Empty } from 'pragmate-ui/empty';

export function InputsList() {

    const formData = localStorage.getItem('formData');
    const formDataParse = JSON.parse(formData);
    const inputs = formDataParse.fields.map((field: string) => <Input key={field} type='text' label={field} value='' />)

    const output = formDataParse?.fields ? inputs : <Empty text="No records to display" icon="info" />

	return (
		<main className="inputs-list">
            <section className="inputs-list__section">
                {output}
            </section>
        </main>
	);
}
