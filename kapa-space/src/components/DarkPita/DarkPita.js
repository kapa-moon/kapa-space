import React from "react";
import "./DP.css";
import Header from "../Header";
import DPContent from "./DPContent";
function DarkPita(props) {
    if(window.innerWidth>800){
    return (
        <div>
            <div className="slide">
                <p>🥙 Dark Pita</p>
                <DPContent />
            </div>
        </div>
        
        
        );
    } else {
        return (
            <div>
                <Header />
                <div className="slide">
                    <p>🥙 Dark Pita</p>
                    <DPContent />
                </div>
            </div>
        );
    }
}

export default DarkPita;