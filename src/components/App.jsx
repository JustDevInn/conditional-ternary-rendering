import React, { useState } from "react";

function App() {
  const [boxColor, setBoxColor] = useState(false);

  function handleMouseOver() {
    setBoxColor(true);
  }
  function handleMouseOut() {
    setBoxColor(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: boxColor ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
