import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'LexendBold';
        src: url('/fonts/LexendBold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'LexendLight';
        src: url('/fonts/LexendLight.ttf') format('truetype');
    }

    @font-face {
        font-family: 'LexendMedium';
        src: url('/fonts/LexendMedium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'LexendRegular';
        src: url('/fonts/LexendRegular.ttf') format('truetype');
    }

    html {
        font-size: 62.5%;
        height: 100%;
    }

    body {
        height: 100%;
        background: ${(props) => props.theme.background.body};
        color: ${(props) => props.theme.font.color};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    picture,
    ul,
    ol,
    body,
    html {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    .font {
        color: ${(props) => props.theme.font.color};
    }

    .h1 {
        font-size: 9.8rem;
        letter-spacing: -1.5px;
        font-family: 'LexendLight', sans-serif;
        font-weight: 300;
    }

    .h2 {
        font-size: 6.1rem;
        letter-spacing: -0.5px;
        font-family: 'LexendLight', sans-serif;
        font-weight: 300;
    }

    .h3 {
        font-size: 4.9rem;
        letter-spacing: 0px;
        font-family: 'LexendRegular', sans-serif;
        font-weight: 400;
    }

    .h4 {
        font-size: 3.5rem;
        letter-spacing: 0.25px;
        font-family: 'LexendRegular', sans-serif;
        font-weight: 400;
    }

    .h5 {
        font-size: 2.4rem;
        letter-spacing: 0px;
        font-family: 'LexendRegular', sans-serif;
        font-weight: 400;
    }

    .h6 {
        font-size: 2rem;
        letter-spacing: 0.15px;
        font-family: 'LexendMedium', sans-serif;
        font-weight: 500;
    }

    .b1 {
        font-size: 1.6rem;
        letter-spacing: 0.15px;
        font-family: 'LexendRegular', sans-serif;
        font-weight: 400;
    }

    .b2 {
        font-size: 1.4rem;
        letter-spacing: 0.1px;
        font-family: 'LexendMedium', sans-serif;
        font-weight: 500;
    }
`;

export { GlobalStyle };
