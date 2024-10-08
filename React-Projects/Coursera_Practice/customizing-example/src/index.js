import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InputComponent from './components/InputComponent';
import RouteApp from './components/RouteApp';
import DayApp from './components/DayApp';
import ReactPlayerApp from './components/ReactPlayerApp';
import ReactSongApp from './components/ReactSongApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <InputComponent /> */}
    {/* <RouteApp /> */}
    {/* <DayApp /> */}
    {/* <ReactPlayerApp /> */}
    <ReactSongApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
