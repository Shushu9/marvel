import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import './style/style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>

  // ****** Breaking Changes in Strict Mode (React 18+) Включенный строгий режим создает баг, из-за которого 9 карточек персонажей загружаются дважды на первом экране


);

