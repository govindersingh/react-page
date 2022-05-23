import React, { useState } from 'react'

export default function Task3(props) {
    const [title, setTitle] = useState("");
    const [updatedValue, setUpdatedValue] = useState("");

    function handleClick() {
        setTitle(updatedValue);
    }

    return (
        <div className="h-100">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Result: {title}</p>
                <div className="mb-3">
                    <input type="text" className="form-control" name='formInput_1' onChange={(e) => {setUpdatedValue(e.target.value)}} placeholder="Typing..." />
                </div>
                <button type="button" className="btn btn-success me-1" onClick={handleClick}>Submit</button>
                <button type="button" className="btn btn-primary" onClick={(e) => setTitle("")}>Clear</button>
              </div>
            </div>
        </div>
    )
}


