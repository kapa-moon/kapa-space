import React from "react";
import "./Yuewen.css";
import Header from "../Header";
import YuewenContent from "./YuewenContent";

function Yuewen(props) {

    if(window.innerWidth>800){
        return (
            <div >
                <div className="slide" style={{padding:"7rem 20px 30px 20px"}}>
                <p>Hello! 👋 I'm Yuewen</p>
                <YuewenContent />
                </div>
            </div>
            
            
            );
        } else {
            return (
                <div>
                    <Header />
                    <div className="slide"style={{padding:"60px 20px 20px 20px"}}>
                   
                    <p>Hello! 👋 I'm Yuewen</p>
                    <YuewenContent />
                    </div>
                </div>
            );
    }
}

export default Yuewen;