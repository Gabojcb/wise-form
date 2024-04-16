import React from 'react';
import { ConditionItem } from './item';
import { IconButton } from 'pragmate-ui/icons';
import { useWiseFormContext } from '@bgroup/wise-form/form';

export function FormulaInput(data) {
  const [items, setItems] = React.useState([]);

  const onFill = () => setItems([...items, {}]);

  const onDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };


  const output = items.map((_, index) => (
    <ConditionItem  onDelete={() => onDelete(index)} key={index} />
  ));

  return (
    <main className='main__formula-condition'>
      <header className='header__formula-condition'>
        <h3>Add Formula</h3>
        <IconButton title='add' variant="primary" onClick={onFill} className="xs circle" icon="add" />
      </header>
      <article className="article__formula-condition">
        {output}
      </article>
    </main>
  );
}
