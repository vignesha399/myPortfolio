import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'
import reportWebVitals from './reportWebVitals';
import Mainpage from './Components/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Mainpage />
  </React.StrictMode>
);

reportWebVitals();
