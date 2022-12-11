import Draggable from "react-draggable";
import Bubble from "./Bubble";
import "./Drag.css";
import {Form, NavLink} from "react-router-dom";
import arrow from "../images/right-arrow.png"

function Drag(props) {
  return (
    <div id="props.id" className="block">
    <Draggable id="props.id" handle=".handle" defaultPostion="x:  50%, y: 50%" positionOffset={props.offset}>
      <div className="cursor-move">
        <div className="max-w-sm rounded overflow-hidden shadow-lg handle">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.title}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
              <NavLink to={props.target} className='text-sm underline'>More</NavLink> 
            </div>
          <div className="px-6 pt-4 pb-2">
          <div className="inline-grid grid-cols-3 ">
            <Bubble type="React"></Bubble>
            <Bubble type="test"></Bubble>
          </div>
          </div>
        </div>
      </div>
    </Draggable>
  </div>
    
  );
}

export default Drag;