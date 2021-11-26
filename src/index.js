import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MMProvider } from './context/MM_context'


ReactDOM.render(
  <MMProvider>
    <App />
   </MMProvider>,
  document.getElementById('root')
);

