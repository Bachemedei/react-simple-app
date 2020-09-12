import React from "react";

function App() {
  // Variables
  const [message, setMessage] = React.useState("JavaScript is cool!");

  // Methods
  function handleClick() {
    setMessage("My new message!");
  }

  // Template
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the Message!</button>
    </div>
  );
}

export default App;
