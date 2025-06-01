import React from 'react'; 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Authcontext from './Components/Authcontext/Authcontext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Authcontext>
        <App />
      </Authcontext>
    </BrowserRouter>
  </StrictMode>
);
