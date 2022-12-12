import React from 'react';
import './App.css';
import Drag from './components/Drag';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Intro from './components/Intro';
import Home from './components/Home';
import ClearBtn from './components/ClearBtn';
import JazzyCozy from './components/Jazzy';
import DarkPita from './components/DarkPita';
import Graphics from './components/Graphics';
import Decider from './components/Decider';
import Header from './components/Header';


function App() {
  const handleDrag = (e) => {
    console.log(e.clientX, e.clientY);
    document.getElementById('draggg').style.left = e.clientX + 'px';
    document.getElementById('draggg').style.top = e.clientY + 'px';
  }
  if(window.innerWidth>556){
  return (
    <div className="App">
      <Routes >
        <Route path="/home" element={<Home />} />
        <Route path="/yuewen" element={<Intro />} />
        <Route path="/darkpita" element={<DarkPita />}/>
        <Route path="/jazzycozy" element={<JazzyCozy />}/>
        <Route path="/graphics" element={<Graphics />}/>
        <Route path="/decider" element={<Decider />}/>
      </Routes>
      <ClearBtn />
      <Drag title="🤦🏻‍♀️ Yuewen" offset={{ x: '9rem', y: '4rem' }} target='/yuewen'></Drag>
      <Drag title="🥙 Dark Pita" offset={{ x: '22rem', y: '5rem' }} target='/darkpita'></Drag>
      <Drag title="🎹 JazzyCozy" offset={{ x: '10rem', y: '4.2rem' }} target='/jazzycozy'></Drag>
      <Drag title="🎨 Graphics" offset={{ x: '24rem', y: '1rem' }} target='/graphics'></Drag>
      <Drag title="🍲 Decider" offset={{ x: '20rem', y: '2rem' }} target='/decider'></Drag>
    </div>
  );
  } else {
    return(
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/yuewen" element={<Intro />} />
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
