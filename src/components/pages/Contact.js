import React from "react";

const Contact = () => {
    return (
        <div>
            <div className="col-xl-9">
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Name: </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Email: </label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-white">Message: </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-outline-light" type="button" id="button-addon2">Send</button>
            </div>
        </div>
    )
}

export default Contact