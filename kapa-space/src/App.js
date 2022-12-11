import React from 'react';
import './App.css';
import Drag from './components/Drag';
import GlassIntro from './GlassIntro';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';


function App() {
  return (
    <div className="App">
      <Drag id="dark-pita-block" title="Dark Pita" offset={{ x: '5rem', y: '10rem' }}></Drag>
      <Drag title="Light Pita" offset={{ x: '15rem', y: '20rem' }}></Drag>
      <GlassIntro></GlassIntro>
    </div>
  );
}

export default App;
