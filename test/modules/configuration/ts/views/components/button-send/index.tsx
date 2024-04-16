import React from 'react';
import { Button } from 'pragmate-ui/components';
import { useWiseFormContext } from '@bgroup/wise-form/form';
import { useFormContext } from '../../context';

export function ButtonSend() {
	const [items, setItems] = React.useState(1);
    const { store } = useFormContext();
	const { model } = useWiseFormContext();

    const handleSendData = () => {

        let listFields = model.fields.get('litsFields').value.split(',');
        const fieldsToLowerCase = listFields.map(field => {
            const word = field.split(' ');
            word[0] = word[0].toLowerCase();
            return word.join(' ');
        })

        const formData = {
            nameForm: model.fields.get('nameForm').value,
            fields: fieldsToLowerCase
        }

        store.saveData(formData);
    }

	return (
		<>
            <Button variant='primary' bordered onClick={handleSendData}>
                Next
            </Button>
		</>
	);
}
