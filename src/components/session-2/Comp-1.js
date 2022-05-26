import React from "react";

export default function Comp1(prop) {

    

  return (
    <>
      <div className="h-100">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{prop.title}</h5>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="formInput_1"
                placeholder="For Component 2"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="formInput_2"
                placeholder="For Component 3"
              />
            </div>
            <button type="button" className="btn btn-success me-1">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
