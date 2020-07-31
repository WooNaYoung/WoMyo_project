import React from "react";
import "./App.css";
import Mycomponent from "./Mycomponent";
import Weather from "./Weather";
import Weather2 from "./Weather2";

function App() {
  return (
    <div>
      {/* <Weather></Weather> */}
      <Weather2></Weather2>
      <Mycomponent></Mycomponent>
      <div className="margin">https://www.youtube.com/watch?v=GuA0_Z1llYU</div>
    </div>
  );
}

export default App;
