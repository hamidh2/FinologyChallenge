import React from "react";
import './partners.scss';
import apple from '../../../assets/5-partners/apple.PNG';
import arirbnb from '../../../assets/5-partners/airbnb.png';
import google from '../../../assets/5-partners/google.PNG';
import facebook from '../../../assets/5-partners/facebook.PNG';
import nvidia from '../../../assets/5-partners/nvidia.PNG';
import samsung from '../../../assets/5-partners/samsung.PNG';
import microsoft from '../../../assets/5-partners/microsoft.PNG';
import tesla from '../../../assets/5-partners/tesla.PNG';

const Partners = () => {
    return (
        <div id="partners">

            <div className="row">
                <h1 className="heading text-center">We've worked with</h1>
            </div>
            
            <div className="row d-flex justify-content-md-center">
                <div className="col-md-1 col-xs-2">
                    <img src={apple} />
                </div>
                <div className="col-md-1 col-xs-2">
                    <img src={arirbnb} />
                </div>
                <div className="col-md-1 col-xs-2">
                    <img src={google} />
                </div>
                <div className="col-md-1 col-xs-2">
                    <img src={facebook} />
                </div>
                <div className="col-md-1 col-xs-2">
                    <img src={nvidia} />
                </div>
                <div className="col-md-1 col-xs-2">
                    <img src={samsung} />
                </div>
                <div className="col-md-1 col-xs-2">
                    <img src={microsoft} />
                </div>
                <div className="col-md-1 col-xs-2">
                    <img src={tesla} />
                </div>
            </div>
        </div>
    )
};

export default Partners;