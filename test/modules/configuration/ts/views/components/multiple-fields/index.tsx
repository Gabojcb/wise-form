import React from 'react';
import { MultiplyItem } from './item';
import { Button } from 'pragmate-ui/components';
import { IconButton } from 'pragmate-ui/icons';
import { MultipleFieldsContext } from './context';
import { useFormContext } from '../../context';

export function MultiplyFields() {
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

	const output = formulas.map((formula, index) => (
		<MultiplyItem
		key={index}
		index={index}
		formula={formula}
		deleteFormula={() => deleteFormula(index)}
		updateFormula={updateFormula}
		/>
	));

	const value = {formulas, setFormulas, addFormula, deleteFormula, updateFormula};
	return (
		<MultipleFieldsContext.Provider value={value}>
			<main className='main__multiple-fields'>
				<header className='header__multiple-fields'>
					<h2>Add condition</h2>
					<IconButton title='add' variant="primary" onClick={addFormula} className="xs circle" icon="add" />
				</header>
				<article className="article__multiple-fields">
					{output}
				</article>
				<Button variant='primary' onClick={saveFormulas}>Guardar formula</Button>
			</main>
		</MultipleFieldsContext.Provider>
	);
}
