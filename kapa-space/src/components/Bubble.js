import React from "react";

function Bubble(props) {

    return (
        <div className="bubble">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.type}</span>

        </div>
    );
    }

export default Bubble;