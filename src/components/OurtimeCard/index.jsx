import React from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style/OurtimeCard.css'

const OurteamCards = ({ nome, trampo, foto, texto, instagram, linkedin }) => {
    return (
        <>
            <div className="container-ourtimeCards">
                <img src={foto} alt="" />
                <div className="container-ourtimeCardsText">
                    <h3>{nome}</h3>
                    <p>{trampo}</p>
                    <p>{texto}</p>
                    <div className="container-ourtimeCardsIcons">
                        <a href={instagram}><FaInstagram /></a>
                        <a href={linkedin}><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurteamCards;
