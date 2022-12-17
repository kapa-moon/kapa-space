import React from "react";
import "./Intro.css";
import Header from "./Header";

function DarkPita(props) {
    if(window.innerWidth>800){
    return (
        <div>
            <div className="slide" id="intro">
                <p>🥙 Dark Pita</p>
            </div>
        </div>
        
        
        );
    } else {
        return (
            <div>
                <Header />
                <div className="slide" id="intro">
               
                    <p>🥙 Dark Pita</p>
                </div>
            </div>
        );
    }
}

export default DarkPita;