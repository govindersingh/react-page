import React, { useState } from "react";
import Comp1 from "./Comp-1";
import Comp2 from "./Comp-2";
import Comp3 from "./Comp-3";

export default function Session5() {

  const mainArr = {
    p1:"P1",
    p2:"P2",
    p3: {
      p31:"P31",
      p32:"P32",
      p33:"P33"
    },
    p4:"P4",
    p5:"P5",
    p6:"P6",
    p7:"P7",
    p8:"P8",
    p9:"P9",
    p10:"P10",
  }

  const [mainArr2, setMainArr2] = useState({})
  const handleComponents1 = (data) => {
    setMainArr2(data)
  }

  const [mainArr3, setMainArr3] = useState({})
  const handleComponents3 = (data) => {
    setMainArr3(data)
  }


  return (
    <>
      <div className="d-flex justify-content-center p-2 bg-light text-dark">
        <h1>Session 5</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Comp1
            title="Component 1"
            communication={mainArr}
            function={handleComponents1}
          />
        </div>
        <div className="col">
          <Comp2
            title="Component 2"
            communication={mainArr2}
            function={handleComponents3}
          />
        </div>
        <div className="col">
          <Comp3
            title="Component 3"
            communication={mainArr3}
          />
        </div>
      </div>
    </>
  );
}
