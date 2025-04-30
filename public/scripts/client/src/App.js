"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
// import logo from './logo.svg';
require("./App.css");
//import ReactDOM from 'react-dom/client';
const firebase_1 = require("./types/firebase");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const App = () => {
    const [message, setMessage] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        fetch('/api/data')
            .then((response) => response.json())
            .then((data) => setMessage(data.message));
    }, []);
    return (<div>
      <h1>{message}</h1>
    </div>);
};
const AuthComponent = () => {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [description, setDescription] = (0, react_1.useState)('');
    const [name, setName] = (0, react_1.useState)('');
    const handleSignUp = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userCredential = yield (0, auth_1.createUserWithEmailAndPassword)(firebase_1.auth, email, password);
            const user = userCredential.user;
            alert("usuário criado!!!");
            yield (0, firestore_1.addDoc)((0, firestore_1.collection)(firebase_1.firestore, 'usersInfo'), {
                uid: user.uid,
                email: user.email,
                name: name,
                description: description
            });
        }
        catch (error) {
            alert('erro ao criar o usuário' + error);
        }
    });
    const handleLogin = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield (0, auth_1.signInWithEmailAndPassword)(firebase_1.auth, email, password);
            alert('Usuario logado com sucesso!!!');
        }
        catch (error) {
            alert('erro ao logar: ');
        }
    });
    return (<div>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'></input>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>
      <input type='text' value={name} onChange={(e) => { setName(e.target.value); }} placeholder='Your name'/>
      <input type='text' value={description} onChange={(e) => { setDescription(e.target.value); }} placeholder='Your description'/>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Sign In</button>
    </div>);
};
exports.default = AuthComponent;
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
