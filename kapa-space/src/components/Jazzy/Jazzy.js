import React from "react";
import "./Jazzy.css";
import Header from "../Header";
import JazzyContent from "./JazzyContent";

function JazzyCozy(props) {

    if(window.innerWidth>800){
        return (
            <div>
                <div className="slide" >
                    
                <a href="https://kapa-moon.github.io/real-time-space/" target="_blank" rel="noreferrer" className=''>🎹 JazzyCozy</a>
            
                    <JazzyContent />
                </div>
            </div>
            
            
            );
    } else {
        return (
            <div>
                <Header />
                    <div className="mobile" >
                   
                    <a href="https://kapa-moon.github.io/real-time-space/" target="_blank" rel="noreferrer" className=''>🎹 JazzyCozy</a>
            
                        <JazzyContent />
                    </div>
            </div>
        );
    }
}

export default JazzyCozy;