import styled from "styled-components";

export const Section_prin = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    background-color: #ffc72c;

    div {
        display: flex;
        align-items: center;
        gap: 7em;
    }

    .img_banner{
        display: flex;
        justify-content: center;
        height: 35vh;
    }

    .banner {
        width: 20vw;
        height: 100%;
    }

    label{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #FFFFFF;
        font-size: 2rem;
    }

    span{
        color: #DB0007;
    }

    figure{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        width: 20vw;
        margin-top: 2em;
    }

    .prod {
        width: auto;
        height: 10vh;
        cursor: pointer;
    }

    h2{
        border: #DB0007 solid 2px;
    }
`;

export const Section_pro = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #feb706;
    padding: 3%;
    gap: 2em;
    
    .title{
        color: #fff;
    }

    div{
        display: flex;
        justify-content: center;
        gap: 0 2em;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20vw;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: #fff;
        border-radius: 0 0 8px 8px;
        height: 25vh;
    }

    img {
        width: 100%;
    }

    p{
        padding: 3%;
        font-weight: bold;
        height: 10vh;
        width: 16vw;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFBC0D;
        border: none;
        border-radius: 7px;
        font-size: 1rem;
        width: 10vw;
        padding: 5%;
        cursor: pointer;
    }
`;