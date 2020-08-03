import React from "react";
import "./App.css";
import Mycomponent from "./Mycomponent";
// import Weather from "./Weather";
import Weather2 from "./Weather2";

// import Axios2 from "./Axios2";
import Weather0308 from "./Weather0308";

function App() {
  return (
    <div >
      {/* <Weather></Weather> */}

      <Weather2></Weather2>
      <div className="margin">
        <Weather0308></Weather0308>
        <Mycomponent></Mycomponent>
      </div>
      <div className="margin">{/* <Axios2></Axios2> */}</div>
    </div>
  );
}

export default App;
