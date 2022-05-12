import React,{ useState } from 'react'

export default function Task2() {
    const [title, setTitle] = useState("");

    return (
        <div>
            <div className="row"><h4 className="text-center">Task 2</h4></div>
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
                    <input type="text" className="form-control" id="formInput_1" onChange={(e) => {setTitle(e.target.value)}} placeholder="Typing..." />
                </div>
            </div>
        </div>
    )
}
