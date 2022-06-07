import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Session3 = () => {
  const navigate = useNavigate();

  const [localstorage, setLocalstorage] = useState("")
  const localStorage = () => {
    window.localStorage.setItem("result", localstorage)
    navigate("/result");
  };

  const [querystring, setQuerystring] = useState("")
  const queryString = () => {
    let string = "/result?result="+querystring
    navigate(string)
  };


  const [pageproperties, setPageproperties] = useState(".")
  const pageProperties = () => {
    navigate("/result", {state:{'result':pageproperties}});
  };

  const reduxState = () => {
    navigate("/result");
  };

  return (
    <div>
      <div className="d-flex justify-content-center p-2 bg-light text-dark">
        <h1>Session 3</h1>
      </div>
      <div className="row justify-content-center row-cols-md-2 g-12">
        <div className="col">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => setLocalstorage(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-success" onClick={localStorage}>
                Using LocalStorage
              </button>
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => setQuerystring(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-success" onClick={queryString}>
                Using Querystring
              </button>
            </div>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" onChange={(e) => setPageproperties(e.target.value)}/>
            <div className="input-group-append">
              <button className="btn btn-success" onClick={pageProperties}>
                Using Page Properties
              </button>
            </div>
          </div>

          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <button className="btn btn-success" onClick={reduxState}>
                Using State
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session3;
