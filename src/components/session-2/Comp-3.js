import React, {useState} from "react";

export default function Comp3(props) {

  const[c3, setC3] = useState(props.c3);

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
                value={props.c3}
                onChange={(e) => {setC3(e.target.value)}}
              />
            </div>
            <button type="button" className="btn btn-success me-1" onClick={() => props.communication({"component3": c3})}>
              Submit
            </button>
            <button type="button" className="btn btn-primary" onClick={() => props.communication({"component3": ""})}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
