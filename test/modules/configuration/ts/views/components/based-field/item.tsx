import React from 'react';
import { Input } from 'pragmate-ui/form';
import { ConditionSubItem } from './sub-item';
import { CollapsibleContainer, CollapsibleHeader, CollapsibleContent } from 'pragmate-ui/collapsible';
import { IconButton } from 'pragmate-ui/icons';
import { useConditionItem } from './use-condition-item';

export function ConditionItem({ index, formula, deleteFormula, updateFormula }) {
  const { field, conditions } = formula;

  const { addCondition, deleteCondition, updateCondition,} = useConditionItem(index, formula, updateFormula);

  const conditionComponents = conditions.map((condition, conditionIndex) => (
    <ConditionSubItem
      key={conditionIndex}
      conditionIndex={conditionIndex}
      condition={condition}
      deleteCondition={() => deleteCondition(conditionIndex)}
      updateCondition={updateCondition}
    />
  ));

  return (
    <section className='container__based-item'>
      <CollapsibleContainer>
        <div className="block-based">
          <CollapsibleHeader className='block-based__header'>
            <h3 className='block-based__strong'>Formula: </h3>
            <IconButton title='remove' variant="danger" className="xs circle" icon="close" onClick={deleteFormula} />
          </CollapsibleHeader>
          <Input
            label="field"
            value={field}
            onChange={(e) => updateFormula(index, e.target.value, conditions)}
          />
          <div className="block-based__condition">
            <CollapsibleContent className='based-collapsible'>
              <div className="based-collapsible__action">
                <h4>Condition:</h4>
                <IconButton title='add' variant="primary" onClick={addCondition} className="xs circle" icon="add" />
              </div>
              {conditionComponents}
            </CollapsibleContent>
          </div>
        </div>
      </CollapsibleContainer>
    </section>
  );
}