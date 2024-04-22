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
    numberFields: 1,
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextClick = async () => {
    try {
      store.saveData(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='main__creation-form'>
      <section className="section__creation-form">
        <Input type="text" value={formData.nameForm} name="nameForm" label="Nombre de formulario" onChange={handleInputChange} />
        <Input type="text" value={formData.title} name="title" label="Titulo" onChange={handleInputChange} />
        <Textarea value={formData.template} label="Template" onChange={handleInputChange} />			
        <Input type="number" name="numberFields" label="Numero de campos a crear" onChange={handleInputChange} />
        <Button variant='primary' block bordered onClick={handleNextClick}>
          Next
        </Button>
      </section>
    </main>
  );
}
