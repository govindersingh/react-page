import React, {useState, useEffect} from "react";

export default function Comp2(props) {

  const[c2, setC2] = useState(props.c2);

  return (
    <>
      <div className="h-100">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Typing..."
                value={props.c2}
                onChange={(e) => {setC2(e.target.value)}}
              />
            </div>
            <button type="button" className="btn btn-success me-1" onClick={() => props.communication({"component2": c2})}>
              Submit
            </button>
            <button type="button" className="btn btn-primary" onClick={() => props.communication({"component2": ""})}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
