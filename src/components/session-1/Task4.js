import React, { useState } from 'react'

export default function Task4(props) {
    const [title, setTitle] = useState("Text For Test");

    return (
        <div className="h-100">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Result: {title}</p>
                <button type="button" className="btn btn-primary me-1" onClick={() => setTitle(title.toUpperCase())}>Uppercase</button>
                <button type="button" className="btn btn-primary" onClick={() => setTitle(title.toLowerCase())}>Lowercase</button>
              </div>
            </div>
        </div>
    )
}


