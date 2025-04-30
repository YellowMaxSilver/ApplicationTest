import React,{useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
//import ReactDOM from 'react-dom/client';

import {auth, firestore} from './types/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { error } from 'node:console';
import {collection, addDoc, Timestamp} from 'firebase/firestore'


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

const AuthComponent: React.FC = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async () =>{
    try{
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("usuário criado!!!");

      await addDoc(collection(firestore, 'usersInfo'),{
        uid: user.uid,
        email:user.email,
        name:name,
        description:description
      });
    }
    catch(error){
      alert('erro ao criar o usuário'+error);
    }
  }

  const handleLogin = async ()=>{
    try{
      await signInWithEmailAndPassword(auth, email, password);
      alert('Usuario logado com sucesso!!!');
    }catch(error){
      alert('erro ao logar: ');
    }
  }

  return(
    <div>
      <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'></input>
      <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
      <input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your name'/>
      <input type='text'  value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='Your description'/>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );


};

export default AuthComponent;


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

//export default App;
