import React, { useState } from 'react'

export default function Task1() {
    const [title, setTitle] = useState("");
    const [updatedValue, setUpdatedValue] = useState("");

    function handleClick() {
        setTitle(updatedValue);
    }

    return (
        <div>
            <div className="row"><h4 className="text-center">Task 1</h4></div>
            <div className="row  mt-5">
                <div className="border border-primary">
                    <div className="row">
                        <div className='col-1'>Result:</div>
                        <div className='col-11'>{title}</div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="mb-3">
                    <input type="text" className="form-control" name='formInput_1' onChange={(e) => {setUpdatedValue(e.target.value)}} placeholder="Typing..." />
                </div>
            </div>
            <div className='d-grid gap-2 col-3 mx-auto'>
                <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </div>
        </div>
    )
}


