import React, { useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './testimonial.scss'
import david from '../../../../assets/4-people/david-campion.jpg';
import vincent from '../../../../assets/4-people/vincent-joignie.jpg';
import jerome from '../../../../assets/4-people/jerome-boudot.jpg';

const Testimonial = () => {

    const handleOwlNextButton = () => {
        const btnNext = document.getElementsByClassName("owl-next");
        if (btnNext[0] != undefined) {
            btnNext[0].dispatchEvent(new Event("click"));
        }
    }

    const btnOwlNextRef = useRef(handleOwlNextButton);
    useEffect(() => { btnOwlNextRef.current = handleOwlNextButton; });
    useEffect(() => {
        const btnOwlNext = e => btnOwlNextRef.current(e); // then use most recent cb value
        window.addEventListener("click", btnOwlNext);
        return () => { window.removeEventListener("click", btnOwlNext) };
    }, []);


    return (
        <div id="testimonial">
            <div className="row">
                <div className="col-md-6 col-xs-12 d-flex">
                    <span id="icon-holder"  >
                        <img />
                    </span>
                    <p className="heading">Wath other people say about our service</p>
                </div>
                <div className="col-md-6 col-xs-12">
                    <button type="button" id="owl-next-item" >
                        <img />
                    </button>
                </div>
            </div>
            <OwlCarousel
                className="owl-theme"
                items="3"
                autoplay="true"
                dots="true"
                loop="true">
                <div className="item">
                    <article>
                        <div className="row mb-3">
                            <div className="col-3">
                                <img src={david} />
                            </div>
                            <div className="col-9">
                                <b>David Champion</b>
                                <p>CEO of icloud</p>
                            </div>
                        </div>
                        <p>“System is excellent.It has made my system user exprience to become one of the easiest”</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="row mb-3">
                            <div className="col-3">
                                <img src={vincent} />
                            </div>
                            <div className="col-9">
                                <b>David Frank Van Hord</b>
                                <p>CEO of Marks.co</p>
                            </div>
                        </div>
                        <p>“I just wanted to share a quick note and let you know that you guys do a really good job”</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="row mb-3">
                            <div className="col-3">
                                <img src={jerome} />
                            </div>
                            <div className="col-9">
                                <b>Lucas Bond</b>
                                <p>BOD of Skyscanner</p>
                            </div>
                        </div>
                        <p>“I just wanted to share a quick note and let you know that you guys do a really good job”</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="row mb-3">
                            <div className="col-3">
                                <img src={david} />
                            </div>
                            <div className="col-9">
                                <b>David Champion</b>
                                <p>CEO of icloud</p>
                            </div>
                        </div>
                        <p>“System is excellent.It has made my system user exprience to become one of the easiest”</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="row mb-3">
                            <div className="col-3">
                                <img src={vincent} />
                            </div>
                            <div className="col-9">
                                <b>David Frank Van Hord</b>
                                <p>CEO of Marks.co</p>
                            </div>
                        </div>
                        <p>“I just wanted to share a quick note and let you know that you guys do a really good job”</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="row mb-3">
                            <div className="col-3">
                                <img src={vincent} />
                            </div>
                            <div className="col-9">
                                <b>David Frank Van Hord</b>
                                <p>CEO of Marks.co</p>
                            </div>
                        </div>
                        <p>“I just wanted to share a quick note and let you know that you guys do a really good job”</p>
                    </article>
                </div>
                <div className="item">
                    <article>
                        <div className="row mb-3">
                            <div className="col-3">
                                <img src={jerome} />
                            </div>
                            <div className="col-9">
                                <b>Lucas Bond</b>
                                <p>BOD of Skyscanner</p>
                            </div>
                        </div>
                        <p>“I just wanted to share a quick note and let you know that you guys do a really good job”</p>
                    </article>
                </div>

            </OwlCarousel>
        </div>
    )
}

export default Testimonial;