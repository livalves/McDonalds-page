import * as S from "./main_style.jsx";

export default function Card({banner, enunciado}) {
    return (
        <S.Card>
            <img src={banner} alt="Banner sobre a promoção" />
            <div>
                <p className="enunciado">{enunciado}</p>
                <button> Clique aqui </button>
            </div>
        </S.Card>
    );
}