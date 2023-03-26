import { createContext, useContext, useEffect, useState } from 'react';

export const UIContext = createContext({});

export const UIProvider = ({ children }) => {

  const [modalState, setModalState] = useState([]);
  const [screenInitial, setScreenInitial] = useState(true);
  const [currentModal, setCurrentModal] = useState(null);
  const [colorMode, setColorMode] = useState('dark');
  const [userRole, setUserRole] = useState('admin');
  const [primaryNavOptions, setPrimaryNavOptions] = useState([
    {
      title: 'Home',
      url:'/',
      roles: ['guest', 'user', 'admin']
    },
    {
      title:'About Me',
      url:'/about',
      roles: ['guest', 'user', 'admin']
    },
    {
      title:'Portfolio',
      url:'/portfolio',
      roles: ['guest', 'user', 'admin']
    },
    {
      title:'Contact',
      url:'/contact',
      roles: ['guest', 'user', 'admin']
    },
    {
      title:'Admin',
      url:'/admin',
      roles: ['admin']
    }
  ]);

  useEffect(() => {

  }, [userRole]);


  const handleModal = (modalID, newState = false) => {
    setScreenInitial(false);
    let result = modalState.find((modal) => { return (modal.id === modalID); });
    let found = result == undefined ? false : true;

    setCurrentModal(newState == false ? null : modalID);

    if (!found) {
      setModalState(current => [...current, {id:modalID, modalOpen: newState, initial: false}]);
    } else {
      const newModalState = modalState.map(modal => {
        return (
          modal.id == modalID ? { id: modalID, modalOpen: newState, initial: false } : modal
        )
      });
      setModalState(newModalState);
    }
  }

  const closeAllModals = () => {
    setCurrentModal(null);
    setModalState(modalState.map(modal => { return { ...modal, modalOpen: false }; }));
  }

  const getInitial = (modalID) => {
    const result = modalState.find(modal => modal.id == modalID);
    const initial = result == undefined ? true : result.initial;
    return initial;
  }



  return (
    <UIContext.Provider value={{
      handleModal,
      getInitial,
      closeAllModals,
      screenInitial,
      currentModal,
      colorMode,
      setColorMode,
      primaryNavOptions,
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