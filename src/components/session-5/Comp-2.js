import React from "react";

export default function Comp2(props) {

  const mainArr = {
    ...props.communication,
    p3:{
      ...props.communication.p3
    }
  }

  console.log(mainArr);

  const handleFunction = () => {
    delete mainArr.p3.p33
    props.function(mainArr)
  }


  return (
    <>
      <div className="h-100">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="mb-3">
              <div>p1: {mainArr.p1}</div>
              <div>p2: {mainArr.p2}</div>
              <div>p3: {mainArr.p3.p31}, {mainArr.p3.p32}, {mainArr.p3.p33} </div>
              <div>p4: {mainArr.p4}</div>
              <div>p5: {mainArr.p5}</div>
              <div>p6: {mainArr.p6}</div>
              <div>p7: {mainArr.p7}</div>
              <div>p8: {mainArr.p8}</div>
              <div>p9: {mainArr.p9}</div>
              <div>p10: {mainArr.p10}</div>
            </div>
            <button type="button" className="btn btn-success me-1" onClick={() => handleFunction()}>
              Remove P33
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
