import React from "react";
import "./card.css"
import { useState } from "react";

function Card({images, name, description}) {

    let [image, setImage] = useState(0);
    let [activeDot, setActiveDot] = useState(0);
    const prevImage = () => {
        image--;
        if (image < 0) {
            image = images.length - 1;
        }
        setImage(image);
        setActiveDot(image);
    }
    const nextImage = () => {
        image = (image + 1) % images.length;
        setImage(image);
        setActiveDot(image);
    }

    return (
        <div className="master-container">
            <div className="master-image-container">
                <div className="master-images">
                    {
                        images && <img src={images[image]} alt="nice pic" />
                    }
                </div>
                <button className="master-image-prev-btn" onClick={prevImage}></button>
                <button className="master-image-next-btn" onClick={nextImage}></button>
                <div className="dots">
                    {   
                        images && images.length > 1 &&
                        images.map((_, index) => (
                            <span key={index} className={`dot ${index === activeDot ? 'dot-active' : 'dot-inactive'}`} />
                        )
                    )}
                </div>
            </div>
            <div className="master-bottom">
                <h3 className="master-name">{name}</h3>
                <p className="master-description">{description}</p>
                <button className="master-contact-btn">Написать мастеру</button>
            </div>
        </div>
    );
}

export default Card;

