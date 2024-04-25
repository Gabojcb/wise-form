import React from 'react';
import { ConditionItem } from './item';
import { IconButton } from 'pragmate-ui/icons';
import { useWiseFormContext } from '@bgroup/wise-form/form';
import { useFormContext } from '../../context';
import { Select } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

export function FormulaInput() {

  const { store } = useFormContext();
	const [selectedValue, setSelectedValue] = React.useState('simpleFormulas');

  const handleSelectChange = (event) => {
		const {value} = event.currentTarget
		setSelectedValue(value);
	};

  const formulas = [
      { value: 'simpleFormulas', label: 'Simple Formulas' },
      { value: 'conditionsMultipleFields', label: 'Conditions Multiple Fields' },
      { value: 'valueOfField', label: 'Value Of Field' },
  ];	  

  const handleSendData = () => {
    store.changeTabForm(selectedValue);
  }

  return (
    <main className='main__formula-condition'>
      <Select
          label="Tipo de Formula"
          options={formulas}
          value={selectedValue}
          onChange={handleSelectChange}
      />
      <Button variant='primary' block bordered onClick={handleSendData}>
        Next
      </Button>
    </main>
  );
}
