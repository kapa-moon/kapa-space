import React from "react";
import "./Intro.css";
import Header from "./Header";

function Decider(props) {

    if(window.innerWidth>556){
        return (
            <div>
                <div className="slide" id="intro">
                    <p>🍲 Decider</p>
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="slide" id="intro">
                   
                        <p>🍲 Decider</p>
                    </div>
                </div>
            );
        }
}

export default Decider;