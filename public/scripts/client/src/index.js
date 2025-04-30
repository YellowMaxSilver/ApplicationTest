"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
//import App from './App';
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const App_1 = __importDefault(require("./App"));
const myFirst = <h1>Hello World</h1>;
const divStyle = {
    border: "2px solid green",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 0px 10px black"
};
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render();
const App = () => {
    return (<div className='App'>
      <h1>FireBase Teste</h1>
      <App_1.default />
    </div>);
};
const root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <App />
  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
