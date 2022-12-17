import React from "react";
import "./Intro.css";
import Header from "./Header";

function Graphics(props) {

    if(window.innerWidth>556){
        return (
            <div>
                <div className="slide" id="intro">
                    
                    <a href="https://cims.nyu.edu/~yy2889/graphics/index.html" target="blank" className="text-md">🎨 My Graphics Collection</a>
        
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="slide" id="intro">
                   
                        
                        <a href="https://cims.nyu.edu/~yy2889/graphics/index.html" target="blank" className="text-md">🎨 My Graphics Collection</a>
        
                    </div>
                </div>
            );
    }
}

export default Graphics;