import React from "react";
import "./Intro.css";
import Header from "./Header";

function JazzyCozy(props) {

    if(window.innerWidth>556){
        return (
            <div>
                <div className="slide" id="intro">
                    <p>🎹 JazzyCozy</p>
                </div>
            </div>
            
            
            );
    } else {
        return (
            <div>
                <Header />
                    <div className="slide" id="intro">
                   
                        <p>🎹 JazzyCozy</p>
                    </div>
            </div>
        );
    }
}

export default JazzyCozy;