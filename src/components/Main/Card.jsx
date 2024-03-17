import * as S from "./main_style.jsx";

export default function Card({banner, enunciado}) {
    return (
        <S.Card>
            <img src={banner} alt="Banner sobre a promoção" />
            <h2 className="enunciado">{enunciado}</h2>
            <button>Clique aqui</button>
        </S.Card>
    );
}