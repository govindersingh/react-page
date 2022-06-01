import React, {useState} from "react";
import Comp1 from "./Comp-1";
import Comp2 from "./Comp-2";
import Comp3 from "./Comp-3";

export default function Session2() {
  const[component2, setComponent2] = useState("");
  const[component3, setComponent3] = useState("");
  
  function handleComponents1(data){
    setComponent2(data.component2)
    setComponent3(data.component3)
  }

  function handleComponents2(data){
    setComponent2(data.component2)
  }

  function handleComponents3(data){
    setComponent3(data.component3)
  }
    
  return (
    <>
      <div className="col">
          <Comp1 title="Component 1" communication={handleComponents1} c2={component2} c3={component3} />
      </div>
      <div className="col">
          <Comp2 title="Component 2" communication={handleComponents2} c2={component2} />
      </div>
      <div className="col">
          <Comp3 title="Component 3" communication={handleComponents3} c3={component3} />
      </div>
    </>
  );
}
