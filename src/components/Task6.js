import React, { useState } from 'react'

export default function Task6(props) {
    const [title, setTitle] = useState("");
    const [count, setCount] = useState("");

    function countWords(){
        let trimed = title.replace(/\s+/g,' ').trim();
        setCount(trimed.split(' ').length)
    }

    return (
        <div className="h-100">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Result: {count}</p>
                <div className="mb-3">
                <input type="text" className="form-control" id="formInput_1" onChange={(e) => {setTitle(e.target.value)}} placeholder="Typing..." />
                </div>
                <button type="button" className="btn btn-primary" onClick={countWords}>Count words</button>
              </div>
            </div>
        </div>
    )
}


