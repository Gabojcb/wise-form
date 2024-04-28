import React from 'react';

export const MultipleFieldsContext = React.createContext({} as any);
export const useMultipleFieldsContext = () => React.useContext(MultipleFieldsContext);
