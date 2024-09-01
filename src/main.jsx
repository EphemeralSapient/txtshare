import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Route from './routes/Route.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') 
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}> 
      <Route/>  
    </BrowserRouter>
  </React.StrictMode>
);
