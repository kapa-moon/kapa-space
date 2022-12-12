import React from "react";
import './ClearBtn.css';
import { NavLink } from "react-router-dom";

function ClearBtn() {

    return (

        <div className="clear-btn">
            <button className="border border-white rounded-md text-md">
                <NavLink to="/yuewen"><span className="p-2"> Clear </span></NavLink>
            </button>
        </div>
    );
    }

export default ClearBtn;