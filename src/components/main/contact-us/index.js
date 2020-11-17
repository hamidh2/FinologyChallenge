import React from "react";
import './contact-us.scss';

const ContactUs = () => {
    return (
        <div id="conatct-us">
            <h1 className="heading text-center p-3"> Contact Us </h1>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input placeholder="Enter your name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input placeholder="Enter your email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <select className="form-control" placeholder="Please select your subject">
                                <option>Ordering new project</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" placeholder="Write your message here" rows="6"></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 col-xs-12" id="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.05571661603!2d101.66804131408946!3d3.079801554435524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4a50e490c275%3A0x5d821a1855b8a0ad!2s52%2C%20Jalan%20Awan%20Hijau%2C%20Taman%20Overseas%20Union%2C%2058200%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sfr!4v1603377897551!5m2!1sen!2sfr" ></iframe>
                </div>
            </div>
        </div>)
}

export default ContactUs;