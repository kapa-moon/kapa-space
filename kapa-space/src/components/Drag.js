import Draggable from "react-draggable";
import Bubble from "./Bubble";
import "./Drag.css";

function Drag(props) {
  return (
    <div id="props.id">
    <Draggable id="props.id" handle=".handle" defaultPostion="x:  50%, y: 50%" positionOffset={props.offset}>
      <div className="cursor-move">
        <div class="max-w-sm rounded overflow-hidden shadow-lg handle">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{props.title}</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
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