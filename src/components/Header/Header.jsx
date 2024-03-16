import React from 'react';

import * as S from "./header_style.jsx";

import logo from "../../assets/logo.svg";
import iconApp from "../../assets/iconApp.svg";
import iconMc from "../../assets/iconMc.svg";

function Header() {
    return (
        <S.Header>
            <img src={logo} alt="Logo do McDonald's" />

            <section>
                <button className='iconApp'>
                    <img src={iconApp} alt="Icone de smartphone" />
                    <span>Baixe o App</span>
                </button>
                <button className='iconMc'>
                    <span>Peça seu Méqui</span>
                    <img src={iconMc} alt="Icone de smartphone" />
                </button>
            </section>
        </S.Header>
    );
}

export default Header;
