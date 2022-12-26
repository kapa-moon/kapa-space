import React from "react";
import "./Graphics.css";
import Header from "../Header";
import G1 from "./G1.gif";
import G2 from "./G2.gif";
import G3 from "./room.gif";
import G4 from "./G4.gif";


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
                    
                    {/* <a href="https://cims.nyu.edu/~yy2889/graphics/index.html" target="blank" className="text-md"></a> */}
                   <h2 className="subtitle">🎨 My Graphics Collection</h2>
                   <div className="grpahics-content">
                    <p className="notes">Highly recommend opening the links on a laptop</p>
                    <Break />
                    <Break />
                    <Break />
                    <div className="subtitle">
                        <a href="https://cims.nyu.edu/~yy2889/graphics/Final/index.html" target="blank" className="">🎁 Merry Christmas! (Raytracing 3)</a>
                    </div>
                    <div>
                        <img src={G4} alt="room" className="preview"/>
                    </div>
                    <Break />
                    <Break />
                    <Break />
                    <div className="subtitle">
                        <a href="https://cims.nyu.edu/~yy2889/graphics/Homework5/index.html" target="blank" className="">🫖 Ceramic Studio (Meshes and Splines)</a>
                    </div>
                    <Break />
                    <div>
                        <img src={G2} alt="ceramic studio" className="preview"/>
                    </div>
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
                    
                    
                    </div>
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div>
                <div className="slide" id="">
                    
                    {/* <a href="https://cims.nyu.edu/~yy2889/graphics/index.html" target="blank" className="text-md"></a> */}
                   <h2 className="subtitle">🎨 My Graphics Collection</h2>
                   <div className="grpahics-content">
                    <p className="notes">Highly recommend opening the links on a laptop</p>
                    <Break />
                    <Break />
                    <Break />
                    <div className="subtitle">
                        <a href="https://cims.nyu.edu/~yy2889/graphics/Final/index.html" target="blank" className="">🎁 Merry Christmas! (Raytracing 3)</a>
                    </div>
                    <div>
                        <img src={G4} alt="room" className="preview"/>
                    </div>
                    <Break />
                    <Break />
                    <Break />
                    <div className="subtitle">
                        <a href="https://cims.nyu.edu/~yy2889/graphics/Homework5/index.html" target="blank" className="">🫖 Ceramic Studio (Meshes and Splines)</a>
                    </div>
                    <Break />
                    <div>
                        <img src={G2} alt="ceramic studio" className="preview"/>
                    </div>
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
                    
                    
                    </div>
                </div>
            </div>
                </div>
            );
    }
}
