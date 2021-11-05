// Inport the React and ReactDom libs
import React from "react";
import ReactDom from "react-dom";
// class App extends React.Component
// Create React components
const App = () => {
  const buttonText = "Click Me!";

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text"></input>
      <button style={{ backgroundColor: "blue" }}>{buttonText}</button>
    </div>
  );
};

// Take the ract component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
