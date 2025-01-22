/********************************************************************
 * File Name: main.jsx (Completed)
 * Date: 1/13/2025
 * Description: Main JSX file to be display
 * Author(s): CS 362-Team 20
 ********************************************************************/


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
