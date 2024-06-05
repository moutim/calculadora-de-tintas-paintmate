import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { WallProvider } from './modules/Home/context/CalculatorContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WallProvider>
      <App />
    </WallProvider>
  </React.StrictMode>,
);
