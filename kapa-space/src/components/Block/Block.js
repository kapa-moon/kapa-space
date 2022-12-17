import {React, useState, useEffect} from "react";
import "./Block.css";

const initialPosition = {
    x: 0,
    y: 0
  };

export default function Block({ title, offset, children }) {
    const [shape, setShape] = useState({
        color: 'orange',
        position: initialPosition
      });

    const [lastCoordinates,setLastCoordinates] = useState(null);

    function handleMove(dx, dy) {
        setShape({
          position: {
            x: shape.position.x + dx,
            y: shape.position.y + dy
          }
        });
    }

    function handlePointerDown(e) {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
          x: e.clientX,
          y: e.clientY,
        });
      }
      function handlePointerMove(e) {
        if (lastCoordinates) {
          setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
          });
          const dx = e.clientX - lastCoordinates.x;
          const dy = e.clientY - lastCoordinates.y;
          handleMove(dx, dy);
        }
      }
    
      function handlePointerUp(e) {
        setLastCoordinates(null);
      }

    return (
    <div 
        className="block-div"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        style={{
            cursor: 'grab',
            position: 'absolute',
            transform: `translate(
              ${shape.position.x}px,
              ${shape.position.y}px
            )`,
          }}>
        block
      {children}
    </div>
    );
}