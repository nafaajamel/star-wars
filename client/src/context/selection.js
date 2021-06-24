import { createContext, useState, useEffect } from 'react';

export const selectionContext = createContext(null);

export function SelectionProvider({ children }) {
  const [selection, setSelection] = useState(null);

  const select = (item, type) => {
    setSelection({ ...item, type });
  };
  const clean = () => {
    setSelection(null);
  };
  const values = { selection, setSelection, clean, select };

  return (
    <selectionContext.Provider value={values}>
      {children}
    </selectionContext.Provider>
  );
}
