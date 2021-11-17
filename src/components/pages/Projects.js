import React from "react";

const Projects = () => {
    return (
        <div>
            <div className="jumbo container-fluid"><div className="row p-3">
                <div className="col-xl-3 d-flex align-items-center justify-content-center text-white text-decoration-underline">
                    <h2 id="mywork">Projects</h2>
                </div>
                <div className=" col-xl-9">
                    <div className="card-group">
                        <div className="row d-flex justify-content-around p-2">
                            <div className="col-xl-5 col-sm-12">
                                <div className="card-100 border border-dark border-5 border-rounded">
                                    <img src="images/perfect pet placer.png"
                                        className="card-img-top border border-dark border-rounded border-3 height:50%"
                                        alt="Pet Placer Screenshot"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Perfect Pet Placer</h5>
                                        <p className="card-text">A web application that assists users in finding their perfect
                                            pet in a radius around the location they provide.</p>
                                        <p className="card-text"><a target="blank"
                                            href="https://ppp-project1.github.io/Perfect-Pet-Placer/"
                                            className="text-reset">Deployed
                                            Application</a></p>
                                        <p className="card-text"><a target="blank"
                                            href="https://github.com/PPP-Project1/Perfect-Pet-Placer"
                                            className="text-reset">Code</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-sm-12">
                                <div className="card-100 border border-dark border-5 border-rounded">
                                    <img src="images/pass pic.png"
                                        className="card-img-top border border-dark border-3 border-rounded"
                                        alt="Password Screenshot"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Password Generator</h5>
                                        <p className="card-text">A simple password generator that will take into consideration
                                            your preferred length and characters.</p>
                                        <p className="card-text"><a target="blank"
                                            href="https://bryanna711.github.io/Generate_Password_JS/"
                                            className="text-reset">Deployed
                                            Application</a></p>
                                        <p className="card-text"><a target="blank"
                                            href="https://github.com/Bryanna711/Generate_Password_JS"
                                            className="text-reset">Code</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around p-2 pb-5">
                            <div className="col-xl-5 col-sm-12">
                                <div className="card-100 border border-dark border-5 border-rounded">
                                    <img src="images/daily planner.png"
                                        className="card-img-top border border-dark border-3 border-rounded"
                                        alt="Daily Planner Screenshot"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Daily Planner</h5>
                                        <p className="card-text">A simple daily scheduler to help you store and view your
                                            reminders.</p>
                                        <p className="card-text"><a target="blank"
                                            href="https://bryanna711.github.io/Daily_Planner/"
                                            className="text-reset">Deployed Application</a>
                                        </p>
                                        <p className="card-text"><a target="blank"
                                            href="https://github.com/Bryanna711/Daily_Planner"
                                            className="text-reset">Code</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-sm-12">
                                <div className="card-100 border border-dark border-5 border-rounded">
                                    <img src="images/homeshool hookup.png"
                                        className="card-img-top border border-drk border-rounded border-3"
                                        alt="Horiseon Screenshot"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">HomeSchool Hookup</h5>
                                        <p className="card-text">An application that connects families who are homeschooling with one
                                            another</p>
                                        <br></br>
                                        <p className="card-text"><a target="blank"
                                            href="https://spooky-castle-63582.herokuapp.com/"
                                            className="text-reset">Deployed
                                            Application</a></p>
                                        <p className="card-text"><a target="blank"
                                            href="https://github.com/Homeschool-Hookup/HomeSchool_HookUp"
                                            className="text-reset">Code</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects