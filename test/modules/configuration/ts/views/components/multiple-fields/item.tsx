import React from 'react';
import { Input } from 'pragmate-ui/form';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { MultipleSubItem } from './sub-item';
import { IconButton } from 'pragmate-ui/icons';
import { useConditionItem } from './use-condition-item';

export function MultiplyItem({ index, formula, deleteFormula, updateFormula }) {

	const { addCondition, deleteCondition, updateCondition,} = useConditionItem(index, formula, updateFormula);
	const { field, conditions } = formula;

	const conditionComponents = conditions.map((condition, conditionIndex) => (
		<MultipleSubItem
		key={conditionIndex}
		conditionIndex={conditionIndex}
		condition={condition}
		deleteCondition={() => deleteCondition(conditionIndex)}
		updateCondition={updateCondition}
		/>
  	));

	return (
		<CollapsibleContainer>
			<section className='container__multiply-item'>
				<div className="block-multiply">
					<CollapsibleHeader className='block-multiple__collapsible'>
						<h3 className='block-formula__strong'>Conditions:</h3>
						<IconButton title='remove' variant="danger" className="xs circle" icon="close" onClick={deleteFormula} />
					</CollapsibleHeader>
					<div className="block-multiply__condition">
						<CollapsibleContent className='formula-collapsible'>
							<div className="formula-collapsible__block">
								<Input type="textarea" value={field} onChange={(e) => updateFormula(index, e.target.value, conditions)} label="fields" />
								<div className="content-action">
									<h4 className='content-condition__strong'>Conditions :</h4>
									<IconButton variant="primary" onClick={addCondition} className="xs circle" icon="add" />
								</div>
							</div>
							{conditionComponents}
						</CollapsibleContent>
					</div>
				</div>
			</section>
		</CollapsibleContainer>
	);
}
