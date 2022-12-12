import React from "react";
import "./Intro.css";
import ClearBtn from "./ClearBtn";
import Header from "./Header";

function DarkPita(props) {

    return (
        <div>
            <Header />
            <div className="slide" id="intro">
           
                <p>🥙 Dark Pita</p>
            </div>
        </div>
        
        
    );
}

export default DarkPita;