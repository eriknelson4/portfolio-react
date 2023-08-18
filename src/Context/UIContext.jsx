import { createContext, useContext, useState } from 'react';

export const UIContext = createContext({});

export const UIProvider = ({ children }) => {

  const [colorMode, setColorMode] = useState('dark');
  const [userRole, setUserRole] = useState('guest');

  return (
    <UIContext.Provider value={{
      colorMode,
      setColorMode,
      userRole,
      setUserRole
    }}>
      { children }
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const allModal = useContext(UIContext);
  return {
    ...allModal
  }
}