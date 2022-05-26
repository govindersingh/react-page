import React, {useState} from "react";
import Comp1 from "./Comp-1";
import Comp2 from "./Comp-2";
import Comp3 from "./Comp-3";

export default function Session2() {
  const[c1, setC1, c2, setC2, c3, setC3] = useState("");

    
  return (
    <>
      <div className="col">
          <Comp1 title="Component 1"  />
      </div>
      <div className="col">
          <Comp2 title="Component 2" />
      </div>
      <div className="col">
          <Comp3 title="Component 3" />
      </div>
    </>
  );
}
