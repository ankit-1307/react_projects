import React from "react";
import { regions } from "./data";
import pin from "../images/pin.svg";

const Regions = () => {
    return (
        <section className="regions">
            <div className="regions-container">
                {regions.map((region) => {
                    const {
                        id,
                        img,
                        city,
                        country,
                        title,
                        description,
                        rating,
                    } = region;
                    return (
                        <div key={id} className="region-details">
                            <img className="region-img" src={img} alt={title} />
                            <div className="">
                                <span className="rating">{rating}</span>
                            </div>

                            <div className="region-overlay">
                                <h3>{`${title}: ${city}`}</h3>
                                <div className="location-container">
                                    <img
                                        className="pin-img"
                                        src={pin}
                                        alt="pin"
                                    />
                                    <span className="region-location">{`${city}, ${country}`}</span>
                                </div>
                                <p className="region-description">
                                    {description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Regions;
