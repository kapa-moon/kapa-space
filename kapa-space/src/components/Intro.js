import React from "react";
import "./Intro.css";
import ClearBtn from "./ClearBtn";
import Header from "./Header";
import IntroContent from "./IntroContent";

function Intro(props) {

    if(window.innerWidth>800){
        return (
            <div>
                <div className="slide" id="intro">
                <p>Hello! 👋 I'm Yuewen</p>
                <IntroContent />
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="slide" id="intro">
                   
                    <p>Hello! 👋 I'm Yuewen</p>
                    <IntroContent />
                    </div>
                </div>
            );
    }
}

export default Intro;