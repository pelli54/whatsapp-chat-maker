import React from 'react';
import { GlobalProvider } from "./store/Context";
import './App.css';
import './bootstrap.min.css';
import './bootstrap-icons/bootstrap-icons.css'

import { Navbar } from './Components/Navbar'
import { Chat } from './Components/Chat'
import { Setting } from './Components/Setting'


const App = ()=>{

  return (
    <GlobalProvider>
    <div className="text-light" style={{background:"#333"}}>   
      <Navbar/>
      <div className="container " style={{height:"calc(100vh - 56px - 1rem)"}}>
        <div className="row">
          <div className="col-5">
            <Chat/>
          </div>
          <div className="col-7">
            <Setting/>
          </div>
        </div>  
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
