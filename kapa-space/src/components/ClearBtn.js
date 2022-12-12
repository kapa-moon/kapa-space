import React from "react";
import './ClearBtn.css';
import { NavLink } from "react-router-dom";
import Draggable from "react-draggable";

function ClearBtn() {

    return (

        <div className="clear-btn cursor-move">
            <Draggable>
            <div className="border border-gray-600 rounded-md text-md p-1">
                <div>
                <span>🫧</span>
                    </div> 
                    <NavLink to="/"><span className="p-2 text-sm"> Clear </span></NavLink>
                    <span className="float-right">🫧</span>
                    <div>
                
                    </div>
            </div>
            </Draggable>
        </div>
    );
    }

export default ClearBtn;