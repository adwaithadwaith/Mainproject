// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/AuthContext.jsx'; // Adjust the import path as necessary
import {ContractProvider}  from './context/electionContext.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ContractProvider>
      <App />
      </ContractProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
