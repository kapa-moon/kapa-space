import React from 'react';
import './App.css';
import Drag from './components/Drag';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Intro from './components/Intro';
import Intro2 from './components/Intro2';
import ClearBtn from './components/ClearBtn';
import Clear from './components/Clear';


function App() {
  const handleDrag = (e) => {
    console.log(e.clientX, e.clientY);
    document.getElementById('draggg').style.left = e.clientX + 'px';
    document.getElementById('draggg').style.top = e.clientY + 'px';
  }
  return (
    <div className="App">
      <Routes >
        <Route path="/yuewen" element={<Intro />} />
        <Route path="/clear" element={<Clear />} />
        {/* <Route path="/darkpita" element={<DarkPita />}/>
        <Route path="/jazzycozy" element={<JazzyCozy />}/>
        <Route path="/graphics" element={<Graphics />}/>
        <Route path="/decider" element={<Decider />}/> */}
      </Routes>
      <ClearBtn />
      <Drag title="Dark Pita" offset={{ x: '9rem', y: '4rem' }} target='/yuewen'></Drag>
      <Drag title="Light Pita" offset={{ x: '22rem', y: '6rem' }}></Drag>
      <Drag title="Light Pita" offset={{ x: '13rem', y: '4.2rem' }}></Drag>
      <Drag title="Light Pita" offset={{ x: '18rem', y: '6rem' }}></Drag>
    </div>
  );
}

export default App;
