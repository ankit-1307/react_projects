import React from "react";
import homeImg from "../images/hero.jpg";
import homeImgMob from "../images/hero_mob.jpg";
import srcIcon from "../images/search_icon.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-main-container">
                <p>Best Food Tours in Italy - Secret Food Tours</p>
                {/* <img className="hero-img" src="" alt="" /> */}
                {/* <img className="hero-img-mob" src={homeImgMob} alt="" /> */}
                <div className="heroSrc">
                    <img className="src-icon" src={srcIcon} alt="" />
                    <input
                        type="text"
                        placeholder="start typing destination"
                        className="hero-src-input"
                    ></input>
                </div>
            </div>
        </section>
    );
};

export default Hero;
