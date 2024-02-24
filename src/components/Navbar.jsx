import React from "react";
import logo from "../images/icon.webp";
import searchImg from "../images/search_icon.svg";
import menuCollapseImg from "../images/menu_icon.svg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-main-div">
                <ul className="nav-main">
                    <div className="main-logo">
                        <li>
                            <a href="/">
                                <img src={logo} />
                            </a>
                        </li>
                    </div>
                    <div className="nav-center">
                        <li>
                            <a href="#destination">Destinations</a>
                        </li>
                        <li>
                            <a href="#tour">private tour</a>
                        </li>
                        <li className="nav-testimonial">
                            <a href="#testimonial">testimonials</a>
                        </li>
                        <li className="nav-about-us">
                            <a href="#about">About us</a>
                        </li>
                        <li className="nav-featured">
                            <a href="tours">Featured</a>
                        </li>
                    </div>
                    <div className="nav-end">
                        <li>
                            <a href="#search">
                                <img
                                    className="src-logo"
                                    src={searchImg}
                                    alt="search icon"
                                />
                            </a>
                        </li>
                        <li>
                            <button type="button" className="login-btn">
                                sign in
                            </button>
                        </li>
                    </div>
                    <div className="nav-end-collapse">
                        <li>
                            <a href="#search">
                                <img
                                    className="menu-logo-collapse"
                                    src={menuCollapseImg}
                                    alt="menu collapse icon"
                                />
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
