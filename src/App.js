import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect ,createContext} from 'react';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import My_App from './component/My_App';
import Todos from './redux/todosComponent';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaksBin from './redux/tasksBin';

function App(){
  return(
    <div>
      {/* <My_App></My_App> */}
    <Provider store={store}><Todos />

    <TaksBin></TaksBin></Provider>
    </div>
  )
}
export default App;

