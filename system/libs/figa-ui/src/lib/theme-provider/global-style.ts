import { createGlobalStyle } from 'styled-components';
import { tokens } from './themes';
import { center, font, size, streched } from '../shared';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'LexendBold';
        src: url('/fonts/LexendBold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'LexendMedium';
        src: url('/fonts/LexendMedium.ttf') format('truetype');
    }
    
    @font-face {
        font-family: 'LexendRegular';
        src: url('/fonts/LexendRegular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'LexendLight';
        src: url('/fonts/LexendLight.ttf') format('truetype');
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

    /* font.tsx */

    .font {
        color: ${(props) => props.theme.font.color};
    }

    .font-h1 {
        ${font('9.8rem', '-1.5px', 'LexendLight', 300)}
    }

    .font-h2 {
        ${font('6.1rem', '-0.5px', 'LexendLight', 300)}
    }

    .font-h3 {
        ${font('4.9rem', '0px', 'LexendRegular', 400)}
    }

    .font-h4 {
        ${font('3.5rem', '0.25px', 'LexendRegular', 400)}
    }

    .font-h5 {
        ${font('2.4rem', '0px', 'LexendRegular', 400)}
    }

    .font-h6 {
        ${font('2rem', '0.15px', 'LexendMedium', 500)}
    }

    .font-b1 {
        ${font('1.6rem', '0.15px', 'LexendRegular', 400)}
    }

    .font-b2 {
        ${font('1.4rem', '0.1px', 'LexendMedium', 500)}
    }

    /* font.tsx */

    /* button.tsx */

    .button {
        cursor: pointer;
        border: none;
    }

    .button-size-1 {
        ${font('1.3rem', '0.15px', 'LexendMedium', 500)}
    }

    .button-size-2 {
        ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
    }

    .button-size-3 {
        ${font('1.8rem', '0.15px', 'LexendMedium', 500)}
    }

    .button-size-4 {
        ${font('2.1rem', '0.15px', 'LexendMedium', 500)}
    }

    .button-size-5 {
        ${font('2.4rem', '0.15px', 'LexendMedium', 500)}
    }

    .button-rectangle {
        border-radius: ${tokens.radius[50]};
    }

    .button-rounded {
        ${center()}
        border-radius: ${tokens.radius.full};
    }

    .button-filled.button-primary {
        color: ${(props) => props.theme.button.filled.primary.color};
        background: ${(props) => props.theme.button.filled.primary.background};
    }

    .button-outlined.button-primary {
        color: ${(props) => props.theme.button.outlined.primary.color};
        background: ${(props) =>
          props.theme.button.outlined.primary.background};
        border: 2px solid ${(props) =>
          props.theme.button.outlined.primary.borderColor};
    }

    .button-rounded.button-size-1 {
        ${size(tokens.spacing[400])}
    }

    .button-rounded.button-size-2 {
        ${size(tokens.spacing[500])}
    }

    .button-rounded.button-size-3 {
        ${size(tokens.spacing[600])}
    }

    .button-rounded.button-size-4 {
        ${size(tokens.spacing[700])}
    }

    .button-rounded.button-size-5 {
        ${size(tokens.spacing[800])}
    }

    .button-rectangle.button-size-1 {
        ${size(tokens.spacing[400], 'max-content')}
        padding: 0 ${tokens.spacing[100]};
    }

    .button-rectangle.button-size-2 {
        ${size(tokens.spacing[500], 'max-content')}
        padding: 0 ${tokens.spacing[150]};
    }

    .button-rectangle.button-size-3 {
        ${size(tokens.spacing[600], 'max-content')}
        padding: 0 ${tokens.spacing[200]};
    }

    .button-rectangle.button-size-4 {
        ${size(tokens.spacing[700], 'max-content')}
        padding: 0 ${tokens.spacing[250]};
    }

    .button-rectangle.button-size-5 {
        ${size(tokens.spacing[800], 'max-content')}
        padding: 0 ${tokens.spacing[300]};
    }

    /* button.tsx */

    /* modal.tsx */

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 280px;
        min-height: 280px;
        max-height: 96vh;
        padding: ${tokens.spacing[250]};
        transform: translate(-50%, -50%);
        background: ${(props) => props.theme.modal.background};
        border-radius: ${tokens.radius[50]};
        border: 1px solid ${(props) => props.theme.modal.border};
        z-index: ${tokens.z[500]};
        overflow-y: auto;
    }

    .backdrop {
        ${streched('fixed')}
        background: ${(props) => props.theme.modal.backdrop};
        z-index: ${tokens.z[450]};
    }

    /* modal.tsx */
`;

export { GlobalStyle };
