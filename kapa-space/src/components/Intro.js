import React from "react";
import "./Intro.css";
import ClearBtn from "./ClearBtn";
import Header from "./Header";

function Intro(props) {

    return (
        <div>
            <Header />
            <div className="slide" id="intro">
           
                <p>Hello! 👋 I'm Yuewen</p>
            </div>
        </div>
        
        
    );
}

export default Intro;