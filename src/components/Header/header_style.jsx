import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: sans-serif;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 5vh;
    margin: 1em 2em;

    img {
        width: auto;
    }

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        height: 6vh;
        padding: 0 1rem;
        border-radius: 0.5rem;
        border: none;
        cursor: pointer;
    }

    button img{
        width: auto;
    }

    .iconApp{
        width: auto;
        background-color: #fff;
    }

    .iconMc {
        background-color: #ffc72c;
    }

    .iconMc span { 
        font-weight: bold;
    }
`;