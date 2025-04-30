import React, {HTMLInputTypeAttribute, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {superFacaReact} from './types/script';

import AuthComponent from './App';

const myFirst = <h1>Hello World</h1>;

const divStyle = {
  border: "2px solid green",
  backgroundColor:"gray",
  display:"flex",
  justifyContent:"center",
  boxShadow:"0px 0px 10px black"
};


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render();

const App:React.FC = ()=>{
  return(
    <div className='App'>
      <h1>FireBase Teste</h1>
      <AuthComponent/>
    </div>
  );
};



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
