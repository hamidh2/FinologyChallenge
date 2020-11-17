import React from "react";
import './content.scss';

import contentbg1 from '../../../assets/3-content/content-001.png';
import contentbg2 from '../../../assets/3-content/content-002.png';

const Content = () => {
    return (
        <div className="container-fluid" id="content">
            <div className="row">
                <div className="col-md-7 col-xs-12">
                    <div>
                        <img id="bg-1" className="box-shadow" src={contentbg1} />
                    </div>
                </div>
                <div className="col-md-5 col-xs-12">
                    <p className="header">We can give our best user expreince to your system</p>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac. Velit scelerisque in dictum non. Senectus et netus et malesuada fames ac turpis egestas.  Vestibulum sed  Vestibulum sedVestibulum sed arcu</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-xs-12">
                    <p className="header ">Easy access.
                    Whenever, wherever
                    you want</p>

                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac. Velit scelerisque in dictum non. Senectus et netus et malesuada fames ac turpis egestas.  Vestibulum sed  Vestibulum sedVestibulum sed arcu</p>
                </div>
                <div className="col-md-7 col-xs-12">
                    <div>
                        <img id="bg-2" className="box-shadow" src={contentbg2} />
                    </div>
                </div>
            </div>
        </div>)
}

export default Content;