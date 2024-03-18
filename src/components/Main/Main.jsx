import { useState } from "react";

import * as S from "./main_style.jsx";

import bannerBigmac from "../../assets/bannerBigmac.svg";
import prodBigmac from "../../assets/prodBigmac.svg";
import prodBatata from "../../assets/prodBatata.svg";
import prodSorvete from "../../assets/prodSorvete.svg";

import cardSofa from "../../assets/cardSofa.svg";
import cardLoja from "../../assets/cardLoja.svg";
import cardJuntos from "../../assets/cardJuntos.svg";

import Card from "./Card";

function Main() {

    const [banner, setBanner] = useState(bannerBigmac);

    return (
        <main>
            <S.Section_prin>
                <div>
                    <div className="img_banner">
                        <img className='banner' src={banner} alt="Hambúrguer Big Mac" />
                    </div>
                    <label>
                        <h1>BATEU AQUELA</h1>
                        <h1><span>#FOME</span>  DE <span>MÉQUI</span>?</h1>
                    </label>
                </div>

                <figure>
                    <img onClick={()=>{setBanner(prodBigmac)}} className="prod" src={prodBigmac} alt="Big Mac" />
                    <img onClick={()=>{setBanner(prodBatata)}} className="prod" src={prodBatata} alt="Batata" />
                    <img onClick={()=>{setBanner(prodSorvete)}} className="prod" src={prodSorvete} alt="Sorvete" />
                </figure>
            </S.Section_prin>

            <S.Section_pro>
                <h2 className='title'>Promoção</h2>
                <div> 
                    <Card banner={cardSofa} enunciado={"Que tal um #MéquiNoSofá?"}/>
                    <Card banner={cardLoja} enunciado={"Venha conhecer nossa nova loja."}/>
                    <Card banner={cardJuntos} enunciado={"Confira as medidas que o Méqui adotou!"}/>
                </div>
            </S.Section_pro>
        </main>
    );
}

export default Main;
