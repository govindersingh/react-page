import React, { useState } from 'react'

export default function Task5(props) {
    const [title, setTitle] = useState("");

    function removeSpace(){
        setTitle(title.replace(/\s+/g,' ').trim());
    }

    return (
        <div className="h-100">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="mb-3">
                <input type="text" className="form-control" id="formInput_1" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Typing..." />
                </div>
                <button type="button" className="btn btn-primary" onClick={removeSpace}>Remove Extra Space</button>
              </div>
            </div>
        </div>
    )
}


