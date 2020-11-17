
import React, { Fragment } from "react";
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="col-md-8 col-xs-12 d-flex d-flex">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 easy-work">
                            <b>Easy Work</b>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <b>Address</b>
                            <p>
                                52-1, Jalan Awan Hijau, Taman Oversea Union, 58200 Kuala Lumpur, Malaysia.
                        </p>
                        </div>
                        <div className="col-md-3 col-xs-12">
                            <div>
                                <b>Contact</b>
                                <p>03-7451 5283</p>
                            </div>
                            <div>
                                <b>Fax</b>
                                <p>03-7451 5283</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>);
}

export default Footer;