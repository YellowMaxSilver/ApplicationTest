import React,{useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom/client';

const App: React.FC = ()=>{
 const [message, setMessage] = useState('');


useEffect(()=>{
  fetch('/api/data')
  .then((response)=> response.json() )
  .then((data)=> setMessage(data.message));
},[])
  return(
    <div>
      <h1>{message}</h1>
    </div>
  );
};



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
