import React from "react";

const About = () => {
    return (
        <div>
            <div className="jumbo container-fluid">
                <div className="row p-3 d-flex justify-content-center">
                    {/* <div className="col-xl-3 d-flex align-items-center justify-content-center text-white text-decoration-underline"> */}
                    <h2 className="text-white d-flex justify-content-center p-3" id="aboutme">About Me</h2>
                    {/* </div> */}
                    <div className="col-xl-3 col-md-4 col-sm-3 d-flex justify-content-center"><img
                        className="border border-dark border-5" src="images/corporate 2.jpg" alt=" Bryanna Vinge" />
                    </div>
                    <div className="col-xl-6 p-4 col-md-8 col-sm-9">
                        <p className="text-white"> Most problems can be solved with a little bit of listening and a lot of
                            creativity, that my friend,is what I can bring to you and your company.
                            I am highly educated as a creative and as well as a developer,
                            and that makes me one to think of outside the box,
                            and find new ways of solving your problems.
                            I believe that there is never one "right"
                            answer,but there are definitely better ones to be sought.
                            Organization, dedication, and a love of learning is what you get in this package.
                            I succeed in all I do, and if I fall flat on my face, I'll pick myself up and try again until I
                            get it right. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About