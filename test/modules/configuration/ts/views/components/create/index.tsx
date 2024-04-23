import React from 'react';
import { useFormContext } from '../../context';
import { Button } from 'pragmate-ui/components';
import { Form } from 'pragmate-ui/form';
import { Input } from 'pragmate-ui/form';
import { Textarea } from 'pragmate-ui/form';

export function CreateForm() {
  const { store } = useFormContext();

  const [formData, setFormData] = React.useState({
    nameForm: '',
    title: '',
    template: '',
    fields: '' || [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextClick = async () => {
    try {
      const fieldsValue = formData.fields.trim().split('\n').map(field => field.trim().toLowerCase()).filter(field => field !== '').join(',').replace(/,+/g, ',');

      setFormData({
        ...formData,
        fields: fieldsValue.split(','),
      });

      store.saveData({...formData, fields: fieldsValue.split(',')});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='main__creation-form'>
      <section className="section__creation-form">
        <Input type="text" value={formData.nameForm} name="nameForm" label="Nombre de formulario" onChange={handleInputChange} />
        <Input type="text" value={formData.title} name="title" label="Titulo" onChange={handleInputChange} />
        <Textarea value={formData.template} name="template" label="Template" onChange={handleTextareaChange} />
        <Textarea value={formData.fields} name="fields" label="Fields" onChange={handleTextareaChange} />			
        <Button variant='primary' block bordered onClick={handleNextClick}>
          Next
        </Button>
      </section>
    </main>
  );
}
