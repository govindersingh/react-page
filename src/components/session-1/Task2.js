import React,{ useState } from 'react'

export default function Task2(props) {
    const [title, setTitle] = useState("");

    return (
        <div className="h-100">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Result: {title}</p>
                <div className="mb-3">
                <input type="text" className="form-control" id="formInput_1" onChange={(e) => {setTitle(e.target.value)}} placeholder="Typing..." />
                </div>
              </div>
            </div>
        </div>
    )
}
