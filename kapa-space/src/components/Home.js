import React from 'react';
import Drag from './Drag';
import Draggable from 'react-draggable';
import { DraggableCore } from 'react-draggable';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Intro from './Intro';
import ClearBtn from './ClearBtn';
import JazzyCozy from './Jazzy';
import DarkPita from './DarkPita';
import Graphics from './Graphics';
import Decider from './Decider';
import Header from './Header';

function Home() {
  return (
    <div className="App">
        <Header />
        <Drag title="🤦🏻‍♀️ Yuewen" offset={{ x: '9rem', y: '4rem' }} target='/yuewen'></Drag>
        <Drag title="🥙 Dark Pita" offset={{ x: '22rem', y: '5rem' }} target='/darkpita'></Drag>
        <Drag title="🎹 JazzyCozy" offset={{ x: '10rem', y: '4.2rem' }} target='/jazzycozy'></Drag>
        <Drag title="🎨 Graphics" offset={{ x: '24rem', y: '1rem' }} target='/graphics'></Drag>
        <Drag title="🍲 Decider" offset={{ x: '20rem', y: '2rem' }} target='/decider'></Drag>
    </div>
  );
}

export default Home;
