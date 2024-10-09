import React from 'react';
import TopBar from './componentes/topbar/TopBar';
import SideBar from './componentes/sidebar/SideBar';
import Routess from './Routess';

import './App.css';


function App() {




  return (
    <>
      < TopBar />
      <div className='container'>
        <SideBar />
        <Routess />
      </div>

    </>
  );
}

export default App;
