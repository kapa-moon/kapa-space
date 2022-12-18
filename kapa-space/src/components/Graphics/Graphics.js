import React from "react";
import "./Graphics.css";
import Header from "../Header";
import G1 from "./G1.gif";
import G2 from "./G2.gif";


function Break(){
    return (
        <div className="break"></div>
    );
}

export default function Graphics(props) {

    if(window.innerWidth>800){
        return (
            <div>
                <div className="slide" id="">
                    
                    <a href="https://cims.nyu.edu/~yy2889/graphics/index.html" target="blank" className="text-md">🎨 My Graphics Collection</a>
                    <Break />
                    <Break />
                    <p className="notes">Highly recommended open the links on a laptop</p>
                    <Break />
                    <Break />
                    <Break />
                    <Break />
                    <Break />
                    <Break />
                    <Break />
                    <Break />
                    <Break />

                    <div className="subtitle">
                        <a href="https://cims.nyu.edu/~yy2889/graphics/Assignment2/index.html" target="blank" className="">🌍 Floating blocks (Raytracing 1)</a>
                    </div>
                    <Break />
                    <Break />
                    <Break />
                    <div className="subtitle">
                        <a href="https://cims.nyu.edu/~yy2889/graphics/Homework3/index.html" target="blank" className="">🎠 Carousel (Raytracing 2)</a>
                    </div>
                    <Break />
                    <div>
                        <img src={G1} alt="ceramic studio" className="preview"/>
                    </div>
                    <Break />
                    <Break />
                    <div className="subtitle">
                        <a href="https://cims.nyu.edu/~yy2889/graphics/Homework5/index.html" target="blank" className="">🫖 Assignment 5 Ceramic Studio (Meshes and Splines)</a>
                    </div>
                    <Break />
                    <div>
                        <img src={G2} alt="ceramic studio" className="preview"/>
                    </div>
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="slide" id="">
                   
                        
                        <a href="https://cims.nyu.edu/~yy2889/graphics/index.html" target="blank" className="text-md">🎨 My Graphics Collection</a>
        
                    </div>
                </div>
            );
    }
}
