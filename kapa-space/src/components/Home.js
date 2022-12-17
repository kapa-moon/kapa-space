import React from 'react';
import Drag from './Drag';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import YuewenBlock from './Yuewen/YuewenBlock';
import Intro from './Intro';
import ClearBtn from './ClearBtn';
import JazzyCozy from './Jazzy';
import DarkPita from './DarkPita';
import Graphics from './Graphics';
import Decider from './Decider';
import Header from './Header';
import DPBlock from './DarkPita/DPBlock';
import JCBlock from './Jazzy/JCBlock';
import GraphBlock from './Graphics/GraphBlock';
import DBlock from './Decider/DBlock';



function Home() {
  return (
    <div className="App">
        <Header />
        <YuewenBlock/>
      <DPBlock />
      <JCBlock/>
      <GraphBlock/>
      <DBlock/>
        </div>
  );
}

export default Home;
