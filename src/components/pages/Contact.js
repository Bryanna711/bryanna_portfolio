import React from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        return name === 'name' ? setName(value) : name === 'email' ? setEmail(value)}

    const handleFormSubmit = (e) => {
        e.preventDefault();


        alert(`Thank you ${name} for your message, I'll get back to you at : ${email}!`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <div className="col-xl-9">
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label text-white">Name: </label>
                    <input type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-white">Email: </label>
                    <input type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        name="email"
                        value={email}
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label text-white">Message: </label>
                    <textarea className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="message"
                        value={message}
                        onChange={handleInputChange}>
                    </textarea>
                </div>
                <button className="btn btn-outline-light" onClick={handleFormSubmit} type="button" id="button-addon2">Send</button>
            </div>
        </div>
    )
}


export default Contact