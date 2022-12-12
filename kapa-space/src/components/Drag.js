import Draggable from "react-draggable";
import Bubble from "./Bubble";
import "./Drag.css";
import {Form, NavLink} from "react-router-dom";
import arrow from "../images/right-arrow.png"

function Drag(props) {
  const x = window.innerWidth<556? 0: props.offset.x;
  // const y = window.innerWidth<556? 0: props.offset.y;
  console.log(x);
  return (
    <div id="props.id" className="block">
    <Draggable id="props.id" handle=".handle" defaultPostion="x:  50%, y: 50%" positionOffset={{"x":x, "y":props.offset.y}}>
      <div className="cursor-move">
        <div className="max-w-sm rounded shadow-lg handle flex-wrap">
          <div className="px-6 py-4">
              <div className="font-bold text-md sm:text-xl mb-2"><NavLink to={props.target}>{props.title}</NavLink></div>
              <p className="text-gray-700 text-base text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet, 
                Lorem ipsum dolor sit amet, 
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