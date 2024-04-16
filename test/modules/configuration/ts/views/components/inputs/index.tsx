import React from 'react';
import { Input } from 'pragmate-ui/form';
import { Empty } from 'pragmate-ui/empty';

export function InputsList() {

    const [fields, setFields] = React.useState(null);
    const [listInput, setListInput] = React.useState(null);
    
    React.useEffect(() => {
        if(localStorage.getItem('formData')) {
            const formData = localStorage.getItem('formData');
            const formDataParse = JSON.parse(formData);
            setFields(formDataParse?.fields);

            const inputs = formDataParse.fields.map((field: string) => <Input key={field} type='text' variant='floating' label={field} value='' />)
            setListInput(inputs);
        }
    }, []);

    const isOutput = fields || localStorage.getItem('formData');  
    const output = isOutput ? listInput : <Empty text="There are no saved fields to configure" icon="info" />

	return (
		<main className="inputs-list">
            <section className="inputs-list__section">
                {output}
            </section>
        </main>
	);
}
