import React from "react";
import "./Yuewen.css";
import Header from "../Header";
import YuewenContent from "./YuewenContent";

function Yuewen(props) {

    if(window.innerWidth>800){
        return (
            <div>
                <div className="slide" id="intro">
                <p>Hello! 👋 I'm Yuewen</p>
                <YuewenContent />
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="slide" id="intro">
                   
                    <p>Hello! 👋 I'm Yuewen</p>
                    <YuewenContent />
                    </div>
                </div>
            );
    }
}

export default Yuewen;