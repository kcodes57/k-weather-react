import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Washington D.C." />
      </div>
    </div>
  );
}
