import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UIProvider } from './Context/UIContext';
import { BrowserRouter } from 'react-router-dom';
import { ModalScreen } from './Components/Modals/ModalScreen';
import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <UIProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ModalScreen screenState={ true }/>
  </UIProvider>,
)
