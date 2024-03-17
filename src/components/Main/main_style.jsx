import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    padding: 4%;
    background-color: #ffc72c;

    div {
        display: flex;
        align-items: center;
        gap: 3em;
    }

    .banner {
        width: 20vw;
    }

    label{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #FFFFFF;
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

export const Card = styled.div`
    border: solid;
    width: 20vw;
    border-radius: 7px;

    img {
        width: 100%;
    }

    h2{
        border: #463f3f solid 2px;
    }
`;