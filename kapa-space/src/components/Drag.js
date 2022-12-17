import Draggable from "react-draggable";
import Bubble from "./Bubble";
import "./Drag.css";
import {Form, NavLink} from "react-router-dom";
import arrow from "../images/right-arrow.png"


function Drag(props) {
  const x = window.innerWidth<556? 0: props.offset.x;

  return (
    <div id="props.id" className="block">
    <Draggable id="props.id" handle=".handle" defaultPostion="x:  50%, y: 50%" positionOffset={{"x":x, "y":props.offset.y}}>
      <div className="cursor-move">
        <div className="max-w-sm rounded shadow-lg handle flex-wrap">
          <div className="px-6 pt-4">
              <div className="font-bold text-md sm:text-xl mb-2"><NavLink to={props.target}>{props.title}</NavLink></div>
              <div className="text-gray-700 text-base text-xs sm:text-sm">
                {props.p} 
              </div>
              <NavLink to={props.target} className='text-sm underline'>More</NavLink> 
          </div>
          <div className="px-6 pb-2">
          {props.bubbles}
          </div>
        </div>
      </div>
    </Draggable>
  </div>
    
  );
}

export default Drag;