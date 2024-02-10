import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Pages/Main.jsx';
import Technicaldatasheets from './Pages/Technicaldatasheets.jsx';
import Saleresponsive from './Pages/Saleresponsive.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    {/* <Technicaldatasheets /> */}
    <Saleresponsive />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
