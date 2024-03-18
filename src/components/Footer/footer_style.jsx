import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em 2em;

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    img {
        height: 5vh;
    }

    span{
        color: #5a5a5a;
    }

    .direcionamento{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5vh;
        gap: 1rem;
    }

    .app {
        width: auto;
        height: 5vh;
        cursor: pointer;
    }
`;
