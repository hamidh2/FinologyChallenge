import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import './header.scss';
import logo from '../../assets/1-header/logo.png';
import banner from '../../assets/2-banner/banner.png';
import SearchBox from "../search-box";

const Header = () => {
    const history = useHistory();
    const showSearchBox = () => history.push("/search-box");

    return (
        <header>
            <nav className="navbar navbar-expand-lg static-top">
                <div className="container">
                    <a className="navbar-brand collapsed" href="#"
                        data-toggle="collapse" data-target="#navbar-responsive"
                    >
                        <img id="logo" src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-responsive" aria-controls="navbar-responsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        {/* navbar-toggler-icon */}
                    </button>
                    <div className="collapse navbar-collapse " id="navbar-responsive">
                        <span className="col-md-6 col-xs-12">
                            <ul className="navbar-nav d-flex justify-content-around">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/">Home
                                         <span className="sr-only">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/about-us">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/services">Services</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="pricing">Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="careers">Careers</NavLink>
                                </li>
                            </ul>
                        </span>
                        <span className="col-md-4 col-xs-12  d-flex justify-content-md-end justify-content-sm-start
">
                            <SearchBox />
                        </span>
                    </div>
                </div>
            </nav>
            <section id="banner" className="container">
                <div className="row align-items-center justify-content-between pt-5">
                    <div className="col-md-6 col-xs-12 align-self-start">
                        <h1>
                            <p>Make development </p>
                            <p> easy with us.</p>
                        </h1>
                        <p className="mb-0">Doing development can never be easy, adn it take time and resources.</p>
                        <p>We at EasyWork has the solution </p>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <img src={banner} />
                    </div>
                </div>
            </section>
        </header>);
}

export default Header;