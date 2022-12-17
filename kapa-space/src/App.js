import React from 'react';
import './App.css';
import Drag from './components/Drag';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import { Routes, Route, Link, NavLink } from "react-router-dom";
// import Intro from './components/Intro';
import Home from './components/Home';
import ClearBtn from './components/ClearBtn';
import Yuewen from './components/Yuewen/Yuewen';
import JazzyCozy from './components/Jazzy/Jazzy';
import DarkPita from './components/DarkPita';
import Graphics from './components/Graphics';
import Decider from './components/Decider';
import Header from './components/Header';
import Interview from './components/Interview';

import Block from './components/Block/Block';
import musicPic from './images/HappyMusic.png';
import YuewenBlock from './components/Yuewen/YuewenBlock';
import DPBlock from './components/DarkPita/DPBlock';
import JCBlock from './components/Jazzy/JCBlock';
import GraphBlock from './components/Graphics/GraphBlock';
import DBlock from './components/Decider/DBlock';

function App() {
  if(window.innerWidth>800){
  return (
    <div className="App">
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/yuewen" element={<Yuewen />} />
        <Route path="/darkpita" element={<DarkPita />}/>
        <Route path="/jazzycozy" element={<JazzyCozy />}/>
        <Route path="/graphics" element={<Graphics />}/>
        <Route path="/decider" element={<Decider />}/>
      </Routes>
      <p className='notice'>Notice: some subpages are still under construction 🧐<br/>Laptop view is recommended for the best experience.
      </p>
      <ClearBtn />
      {/* <a href='https://kapa-moon.github.io/real-time-space/'target="_blank"><Iframe title="Inline Frame Example" className='frame'
    width="300"
    height="200"
     src='https://kapa-moon.github.io/real-time-space/'></Iframe><p>Click here!</p></a> */}
      
      <YuewenBlock />
      <DPBlock />
      <JCBlock/>
      <GraphBlock/>
      <DBlock/>
    </div>
  );
  } else {
    return(
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/yuewen" element={<Yuewen />} />
        <Route path="/darkpita" element={<DarkPita />}/>
        <Route path="/jazzycozy" element={<JazzyCozy />}/>
        <Route path="/graphics" element={<Graphics />}/>
        <Route path="/decider" element={<Decider />}/>
      </Routes>
    </div>
  );
  }
}

export default App;
