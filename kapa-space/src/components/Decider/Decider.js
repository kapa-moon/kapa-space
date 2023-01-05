import React from "react";
import Header from "../Header";
import "./Decider.css";
import DeciderContent from "./DeciderContent";

function Decider(props) {

    if(window.innerWidth>800){
        return (
            <div>
                <div className="slide" id="intro">
                    <p>🍲 Decider</p>
                    
                    <DeciderContent/>
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="mobile" id="intro">
                   
                        <p>🍲 Decider</p>
                        <p className="notes">Under Construction, but here's a sneak peek on Github.
                        {/* <a href="https://github.com/agiledev-students-fall2022/final-project-team-decider" target="blank" className=""> Github</a> */}
                    </p>
                    </div>
                </div>
            );
        }
}

export default Decider;