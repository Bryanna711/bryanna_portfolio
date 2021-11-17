import React from "react";

const HeaderNav = ({ currentPage, handlePageChange }) => {
    return (
        <div className="jumbotron-fluid">
            <div className="container-fluid">
                <div className="mt-4 p-5 text-white">
                    <h1>Bryanna Vinge</h1>
                    <p>Full Stack Web Developer: HTML, CSS, JavaScript, JQuery, Bootstrap, Bulma, Node, Express, React</p>
                </div>
                <nav className="navbar navbar-light justify-content-end">
                    <ul className="nav justify-content-end">
                        <li className="nav-item-active">
                            <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                href="#About"
                                onClick={() => handlePageChange('About')}>About Me</a>
                        </li>
                        <li className="nav-item-active">
                            <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                                href="#Projects"
                                onClick={() => handlePageChange('Projects')}>Projects</a>
                        </li>
                        <li className="nav-item-active">
                            <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                                href="#Contact"
                                onClick={() => handlePageChange('Contact')}>Contact</a>
                        </li>
                        <li className="nav-item-active">
                            <a className="nav-link" href="pdf/Bryanna Vinge Technical Resume (2).pdf">Resume</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HeaderNav;