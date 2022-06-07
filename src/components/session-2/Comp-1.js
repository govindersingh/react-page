import React, {useState} from "react";

export default function Comp1(props) {

  const[c2, setC2] = useState('');
  const[c3, setC3] = useState('');

  
  const [check2, setCheck2] = useState(props.c2);
  const data2 = props.c2;
  if(check2 !== data2){ 
    setC2(props.c2)
    setCheck2(props.c2)
  }

  const [check3, setCheck3] = useState(props.c3);
  const data3 = props.c3;
  if(check3 !== data3){ 
    setC3(props.c3)
    setCheck3(props.c3)
  }


  function handleClick(){
    let data = {'component2': c2, 'component3': c3}
    props.communication(data)
  }

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
                placeholder="For Component 2"
                value={c2}
                onChange={(e) => {setC2(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="For Component 3"
                value={c3}
                onChange={(e) => {setC3(e.target.value)}}
              />
            </div>
            <button type="button" className="btn btn-success me-1" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
