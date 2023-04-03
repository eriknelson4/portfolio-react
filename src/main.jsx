import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UIProvider } from './Context/UIContext';
import { BrowserRouter } from 'react-router-dom';
import { ModalScreen } from './Components/Modals/ModalScreen';
import './Styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ModalScreen screenState={ true }/>
    </UIProvider>
  </React.StrictMode>
)
