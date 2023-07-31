import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/ContextApp.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReduxApp from './pages/ReduxApp.tsx';
import ZustandApp from './pages/ZustandApp.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/redux" element={<ReduxApp />} />
        <Route path="/zustand" element={<ZustandApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
