import React, {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate('/session3')
  }

  const [localstorage] = useState(window.localStorage.getItem('result'))

  const urlParams = new URLSearchParams(window.location.search);
  const [querystring] = useState(urlParams.get('result'))

  const pageproperties = useLocation();

  return (
    <div>
      <h1>ResultPage</h1>
      <div className="row">
        <button className="btn btn-primary col-2" onClick={backPage}>Back to Page</button>
      </div>
      <div className="row">localStorage : {localstorage}</div>
      <div className="row">queryString : {querystring}</div>
      <div className="row">pageProperties : {(pageproperties.state) ? pageproperties.state.result : ""}</div>
      <div className="row">reduxState :</div>
    </div>
  );
};

export default ResultPage;
