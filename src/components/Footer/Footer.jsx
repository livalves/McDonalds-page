import React from 'react';

import * as S from "./footer_style.jsx";

import logo from "../../assets/logo.svg";
import appGoogle from "../../assets/appGoogle.svg";
import appApple from "../../assets/appApple.svg";

function Footer() {
    return (
        <S.Footer>
            <div className='info'>
                <img src={logo} alt="Logo McDonald's" />
                <span>© McDonald’s 2024</span>
            </div>
            <div className='direcionamento'>
                <a href="https://play.google.com/store/apps/details?id=com.mcdo.mcdonalds&hl=pt_BR&gl=US" target="_blank" rel="noopener noreferrer">
                    <img className='app' src={appGoogle} alt="Direcionamento para a Google Play" />
                </a>
                <a href="https://apps.apple.com/br/app/mcdonalds-cupons-e-delivery/id1114009187" target="_blank" rel="noopener noreferrer">
                    <img className='app' src={appApple} alt="Direcionamento para a App Store" />
                </a>
            </div>
        </S.Footer>
    );
}

export default Footer;
