import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>

            <footer className="footer bg-dark ">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4 footer-logo">
                            <h1 >ArtificialX</h1>
                        </div>
                        <div className="col-md-4 footer-links">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 social-icons">
                            <a href="#"><i className="fab fa-instagram"></i> Instagram</a><br />
                            <a href="#"><i className="fab fa-twitter"></i> Twitter</a><br />
                            <a href="#"><i className="fab fa-linkedin"></i> Linkedin</a>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer