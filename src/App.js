import React from "react";
import "./App.css";
import Session1 from "./components/session-1/Session-1";
import Session2 from "./components/session-2/Session-2";
import Session3 from "./components/session-3/Session-3";
import { Routes, Route, Link } from "react-router-dom";
import ResultPage from "./components/session-3/ResultPage";
import Tailwind from "./components/tailwind/Tailwind";
import Form from "./components/session-4/Form";
import Formresult from "./components/session-4/Formresult";
import Session5 from "./components/session-5/Session-5";
import List from "./components/crud/List";
import FormUser from "./components/crud/Form";

function App() {
  return (
    <>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link active">Session1</Link>
          <Link to="/session2" className="nav-item nav-link active">Session2</Link>
          <Link to="/session3" className="nav-item nav-link active">Session3</Link>
          <Link to="/session4" className="nav-item nav-link active">Session4</Link>
          <Link to="/session5" className="nav-item nav-link active">Session5</Link>
          <Link to="/crud" className="nav-item nav-link active">CRUD</Link>
          <Link to="/Tailwind" className="nav-item nav-link active">Tailwind-Page</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Session1 />} />
        <Route path="/session2" element={<Session2 />} />
        <Route path="/session3" element={<Session3 />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/session4" element={<Form />} />
        <Route path="/form-result" element={<Formresult />} />
        <Route path="/session5" element={<Session5 />} />
        <Route path="/crud" element={<List />} />
        <Route path="/user" element={<FormUser />} />
        <Route path="/user/:id" element={<FormUser />} />
        <Route path="/Tailwind" element={<Tailwind />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
