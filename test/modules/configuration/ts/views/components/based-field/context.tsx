import React from 'react';

export const BaseFieldsContext = React.createContext({} as any);
export const useBaseFieldsContext = () => React.useContext(BaseFieldsContext);
