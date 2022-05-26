import React from "react";
import "./App.css";
import Session1 from "./components/session-1/Session-1";
import Session2 from "./components/session-2/Session-2";

function App() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center p-2 bg-light text-dark"><h1>Session 1</h1></div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <Session1 />
        </div>
        <div className="d-flex justify-content-center p-2 bg-light text-dark"><h1>Session 2</h1></div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Session2 />
        </div>
      </div>
    </div>
  );
}

export default App;
