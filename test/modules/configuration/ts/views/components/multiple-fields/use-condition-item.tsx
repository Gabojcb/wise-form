import React from "react";

export function useConditionItem(index, formula, updateFormula) {

    const { field, conditions } = formula;

    const addCondition = () => {
        const newConditions = [...conditions, { type: '', value: '', formula: '' }];
        updateFormula(index, field, newConditions);
      };
    
      const deleteCondition = (conditionIndex) => {
        const newConditions = [...conditions];
        newConditions.splice(conditionIndex, 1);
        updateFormula(index, field, newConditions);
      };
    
      const updateCondition = (conditionIndex, type, value, formula) => {
        const newConditions = [...conditions];
        newConditions[conditionIndex] = { type, value, formula };
        updateFormula(index, field, newConditions);
      };
  
    return {
      formula,
      addCondition,
      deleteCondition,
      updateCondition,
    };
  }