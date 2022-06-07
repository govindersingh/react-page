import React from "react";
import "./App.css";
import Session1 from "./components/session-1/Session-1";
import Session2 from "./components/session-2/Session-2";
import Session3 from "./components/session-3/Session-3";
import { Routes, Route, Link } from "react-router-dom";
import ResultPage from "./components/session-3/ResultPage";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">Session1</Link>
          <Link to="/session2" className="nav-item nav-link active">Session2</Link>
          <Link to="/session3" className="nav-item nav-link active">Session3</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Session1 />} />
        <Route path="/session2" element={<Session2 />} />
        <Route path="/session3" element={<Session3 />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
