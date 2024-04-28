import React from 'react';
import { ConditionItem } from './item';
import { IconButton } from 'pragmate-ui/icons';
import { Button } from 'pragmate-ui/components';
import { useFormContext } from '../../context';
import { BaseFieldsContext } from './context';

export function BasedField() {
  const [formulas, setFormulas] = React.useState([]);
  const { store } = useFormContext();
  
  const addFormula = () => {
	  setFormulas([...formulas, { field: '', conditions: [{ type: '', value: '', formula: '' }] }]);
	};

	const deleteFormula = (index) => {
		const newFormulas = [...formulas];
		newFormulas.splice(index, 1);
		setFormulas(newFormulas);
	};

	const updateFormula = (index, field, conditions) => {
		const newFormulas = [...formulas];
		newFormulas[index] = { field, conditions };
		setFormulas(newFormulas);
	};

	const saveFormulas = () => {
		store.saveFormula(formulas);	
		console.log("🚀 ~ BasedField ~ formulas:", formulas)
	};

  const formulaComponents = formulas.map((formula, index) => (
    <ConditionItem
      key={index}
      index={index}
      formula={formula}
      deleteFormula={() => deleteFormula(index)}
      updateFormula={updateFormula}
    />
  ));

  const value = {formulas, setFormulas, addFormula, deleteFormula, updateFormula}
  return (
	<BaseFieldsContext.Provider value={value}>
		<main className='main__based-field'>
		<header className='header__based-field'>
			<h2>Add Formula</h2>
			<IconButton title='add' variant="primary" onClick={addFormula} className="xs circle" icon="add" />
		</header>
		<article className="article__based-field">
			{formulaComponents}
		</article>
			<Button variant='primary' onClick={saveFormulas}>Guardar formula</Button> 
		</main>
	</BaseFieldsContext.Provider>
  );
}
