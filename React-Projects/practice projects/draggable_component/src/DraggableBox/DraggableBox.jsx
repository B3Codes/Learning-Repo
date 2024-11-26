import React, {useRef, useState} from 'react';

function DraggableBox() {
  // Ref to track the box's DOM element ans store offset values
  const boxRef = useRef(null);

  // State to store teh position of the box
  const [position, setPosition] = useState({x:0, y:0});

  // State to whether the box is being dragged
  const [dragging, setDragging] = useState(false);


  // function trigger when mouse is pressed down on the box
  const handleMouseDown = (e) => {
    setDragging(true);

    //Get the box position relative to viewport
    const box = boxRef.current.getBoundingClientRect();

    // Store the offset (mouse pointer position relative to box's top-left corner)
    boxRef.current.offset = {
      x: e.clientX - box.left,
      y:e.clientY - box.top
    };
  };


  //  function trigger when mouse move
  const handleMouseMove = (e) => {
    if(dragging) {
      // calclulate new position based on mouse pointer
      const newX = e.clientX - boxRef.current.offset.x;
      const newY = e.clientY - boxRef.current.offset.y;

      // update the psoition state
      setPosition({x:newX, y: newY});
    }
  };

  // fucntion trigger when mouse button is released
  const handleMouseUp = () => {
    setDragging(false);  //stop dragging
  };

  return <div
          ref = {boxRef} /* Attach the box DOM element to the ref */
          onMouseDown = {handleMouseDown}  /* Start dragging */
          onMouseMove = {handleMouseMove}  /* Move the box */
          onMouseUp = {handleMouseUp}      /* Stop dragging */
          style = {{
            width: "100px",
            height: "100px",
            backgroundColor: "lightblue",
            position: "absolute",
            left: position.x,   // Dynamically set X position
            top: position.y,   // Dynamically set Y position
            cursor: dragging ? "grabbing" : "grab",   // visual feedback for dragging
          }}
  >
    Drag Me!
  </div>
}

export default DraggableBox;