import React from 'react';
import { Button } from 'pragmate-ui/components';
import { ConditionItem } from './item';
import { useWiseFormContext } from '@bgroup/wise-form/form';

export function FormulaInput(data) {
  const [items, setItems] = React.useState([]);

  const onFill = () => setItems([...items, {}]);

  const onDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const isDisabled = items.length < 2;

  const output = items.map((_, index) => (
    <ConditionItem disabled={isDisabled} onDelete={() => onDelete(index)} key={index} />
  ));

  return (
    <div>
      <header>
        <Button variant='primary' bordered onClick={onFill}>
          Add Form
        </Button>
      </header>
      {output}
    </div>
  );
}
