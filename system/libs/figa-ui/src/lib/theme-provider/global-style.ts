import { createGlobalStyle } from 'styled-components';
import { tokens } from './themes';
import {
  appearIn,
  center,
  central,
  column,
  shape,
  font,
  row,
  size,
  streched,
} from '../shared';
import { T_DOWN } from './viewport';

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
        background: ${(props) => props.theme.body.bg};
        color: ${(props) => props.theme.font.color};
    }

    .sb-main-padded {
        padding: 0 !important;
        margin: 0 !important;
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
        line-height: 2.4rem;
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
        border-radius: ${tokens.radius[1000]};
    }

    .button-filled.button-primary {
        color: ${(props) => props.theme.button.filled.primary.color};
        background: ${(props) => props.theme.button.filled.primary.bg};

        .icon path {
            fill: ${(props) => props.theme.button.filled.primary.color};
        }
    }

    .button-outlined.button-primary {
        color: ${(props) => props.theme.button.outlined.primary.color};
        background: ${(props) => props.theme.button.outlined.primary.bg};
        border: 2px solid ${(props) =>
          props.theme.button.outlined.primary.borderColor};

        .icon path {
            fill: ${(props) => props.theme.button.outlined.primary.color};
        }
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
        ${central('fixed')}
        ${column()}
        min-width: 280px;
        min-height: 280px;
        max-height: 96vh;
        padding: ${tokens.spacing[250]};
        background: ${(props) => props.theme.modal.bg};
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

    /* select.tsx */

    .select {
        position: relative;
        width: 100%;

        .select-expander {
            ${size(tokens.spacing[500], '100%')}
            ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
            ${row()}
            padding: 0 ${tokens.spacing[150]};
            border-radius: ${tokens.radius[50]};
            background: ${(props) => props.theme.select.bg};
            color: ${(props) => props.theme.select.color};
            min-width: 220px;
            cursor: pointer;
            border: none;

            &.select-expander-empty {
                color: ${(props) => props.theme.select.placeholderColor};
            }

            &.select-expander-opened {
                background: ${(props) => props.theme.select.hoverBg};
                color: ${(props) => props.theme.select.color};
                cursor: initial;
            }

            &:hover {
                background: ${(props) => props.theme.select.hoverBg};
                color: ${(props) => props.theme.select.color};
            }
        }

        .select-list {
            ${appearIn('16px', '8px')}
            position: absolute;
            list-style: none;
            margin: 0;
            padding: 0;
            left: 0;
            transform: translateY(8px);
            width: 100%;
            background: ${(props) => props.theme.select.bg};
            border-radius: ${tokens.radius[50]};
            z-index: ${tokens.z[50]};

            .select-list-option {
                ${font('1.4rem', '0.15px', 'LexendMedium', 500)}
                padding: ${tokens.spacing[150]};
                cursor: pointer;

                &:not(:last-of-type) {
                    border-bottom: 1px solid ${(props) =>
                      props.theme.select.optionSeparator};
                }

                &.select-list-option-active {
                    color: ${(props) => props.theme.select.optionActiveColor};
                    cursor: initial;
                }

                &:hover:not(.select-list-option-active) {
                    background: ${(props) => props.theme.select.hoverBg};
                }
            }
        }
    }

    /* select.tsx */

    /* link.tsx */

    .link {
        & > * {
            text-decoration: none;

            &:hover {
                text-decoration: underline;
                text-underline-offset: ${tokens.spacing[100]};
            }
        }

        &.default {
            & > * {
                color: ${(props) => props.theme.link.default.color};

                &:hover {
                    text-decoration-color: ${(props) =>
                      props.theme.link.default.hoverColor};
                }
            }
        }

        &.primary {
            & > * {
                color: ${(props) => props.theme.link.primary.color};

                &:hover {
                    text-decoration-color: ${(props) =>
                      props.theme.link.primary.hoverColor};
                }
            }
        }
    }

    /* link.tsx */

    /* navigation.tsx */

    .navigation {
        ${row()}
        justify-content: space-between;
        height: 100px;
        border-bottom: 1px solid ${(props) =>
          props.theme.navigation.borderColor};
        background: ${(props) => props.theme.navigation.bg};
        padding: 0 ${tokens.spacing[250]};

        .navigation-links {
            ${row()}
            list-style: none;
            margin: 0 ${tokens.spacing[400]};
            overflow-x: auto;
            max-width: 1000px;
            height: 100%;

            .navigation-link {
                flex-shrink: 0;

                &:not(:last-of-type) {
                    margin-right: ${tokens.spacing[550]};
                }
            }
        }
    }

    /* navigation.tsx */

    /* logo.tsx */

    .logo {
        ${row()}

        .logo-text {
            cursor: pointer;
            flex-flow: wrap;
            margin-left: ${tokens.spacing[200]};

            span {
                ${font('2rem', '0.15px', 'LexendBold', 500)}
            }

            .logo-text-top {
                & > *:first-child {
                    color: ${(props) => props.theme.logo.text.first};
                }

                & > *:last-child {
                    color: ${(props) => props.theme.logo.text.second};
                }
            }

            .logo-text-bottom {
                color: ${(props) => props.theme.logo.text.last};
            }
        }
    }

    /* logo.tsx */

    /* logo-graphic.tsx */

    .logo-graphic {
        cursor: pointer;

        .logo-bg-first-from {
            stop-color: ${(props) => props.theme.logo.bg.first.from};
        }

        .logo-bg-first-to {
            stop-color: ${(props) => props.theme.logo.bg.first.to};
        }

        .logo-bg-second-from {
            stop-color: ${(props) => props.theme.logo.bg.second.from};
        }

        .logo-bg-second-to {
            stop-color: ${(props) => props.theme.logo.bg.second.to};
        }

        .logo-bg-last-from {
            stop-color: ${(props) => props.theme.logo.bg.last.from};
        }

        .logo-bg-last-to {
            stop-color: ${(props) => props.theme.logo.bg.last.to};
        }
    }

    /* logo-graphic.tsx */

    /* emoji-picker.tsx */

    .emoji-picker {
        .emoji-picker-header {
            text-align: center;
            margin-bottom: ${tokens.spacing[300]};
        }

        .emoji-picker-list {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: ${tokens.spacing[200]};
            justify-content: center;
        }
    }

    /* emoji-picker.tsx */

    /* progress-circle.tsx */

    .progress-circle {
        position: relative;

        .progress-circle-back,
        .progress-circle-front {
            ${streched('absolute')}
            border-radius: ${tokens.radius[1000]};
        }

        .progress-circle-front {
            transition: 0.1s transform linear;
            background: ${(props) => props.theme.progressCircle.bg};
        }

        .progress-circle-text {
            ${central('absolute')}
        }
    }

    /* input.tsx  */

    .input {
        border-radius: ${tokens.radius[50]};
        background: ${(props) => props.theme.input.bg};
        min-width: 220px;

        input, input::placeholder {
            ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
        }

        input {
            padding: ${tokens.spacing[150]};
            border: none;
            width: 100%;
            background: none;
            color: ${(props) => props.theme.input.color};

            &::placeholder {
                color: ${(props) => props.theme.input.placeholderColor};
            }
        }
    }

    /* input.tsx */

    /* layout.tsx  */

    .layout {
        ${column()}

        &.full {
            .layout-content {
                display: flex;
                min-height: calc(100vh - 100px);
                max-width: 100vw;

                & > * {
                    width: 100%;
                }
            }
        }

        .layout-content {
            padding: ${tokens.spacing[350]} ${tokens.spacing[250]};
        }
    }

    /* layout.tsx */

    /* box.tsx  */

    .box {
        &.filled, &.outlined {
            border-radius: ${tokens.radius[50]};
        }

        &.filled {
            background: ${(props) => props.theme.box.bg};
        }

        &.outlined {
            border: 1px solid ${(props) => props.theme.box.borderColor};
        }

        &.column {
            ${column()}
        }

        &.center-row {
            ${center()}
        }

        &.center-column {
            ${center('column')}
        }

        &.row {
            ${row()}
        }
    }

    /* box.tsx */

    /* footer.tsx */

    .footer {
        background: ${(props) => props.theme.footer.bg};
        border-top: 1px solid ${(props) => props.theme.footer.borderColor};

        .footer-container {
            ${column()}
            margin: 0 auto;
            max-width: ${tokens.width[50]};
            padding: ${tokens.spacing[300]} 0;

            .footer-content {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                border-bottom: 1px solid ${(props) =>
                  props.theme.footer.borderColor};
                padding-bottom: ${tokens.spacing[200]};
                
                @media ${T_DOWN} {
                    grid-template-columns: auto;
                    grid-template-rows: auto auto auto;
                }

                & > * {
                    padding: ${tokens.spacing[250]};
                }
            }

            .footer-bar {
                ${row()}
                justify-content: space-between;
                padding: ${tokens.spacing[250]} ${tokens.spacing[250]} 0 ${
  tokens.spacing[250]
};

                .footer-bar-left {
                    ${row()}
                }

                .footer-bar-right {
                    ${row()}
                }
            }
        }
    }

    /* footer.tsx */

    /* code-block.tsx */

    .code-block {
        ${column()}

        .code-block-header {
            ${row()}
            justify-content: space-between;
            padding: ${tokens.spacing[200]};
            background: ${(props) => props.theme.codeBlock.header.bg};
            border-top-right-radius: ${tokens.radius[50]};
            border-top-left-radius: ${tokens.radius[50]};

            .code-block-header-dots {
                ${row()}

                & > *:not(:last-child) {
                    margin-right: ${tokens.spacing[150]};
                }

                & > * {
                    ${shape(tokens.spacing[200], tokens.radius[1000])}

                    &:first-of-type {
                        background: ${(props) =>
                          props.theme.codeBlock.header.dots.first.bg};
                    }

                    &:nth-of-type(2) {
                        background: ${(props) =>
                          props.theme.codeBlock.header.dots.second.bg};
                    }

                    &:last-of-type {
                        background: ${(props) =>
                          props.theme.codeBlock.header.dots.third.bg};
                    }
                }
            }
        }

        .code-block-content {
            padding: ${tokens.spacing[200]};
            background: ${(props) => props.theme.codeBlock.content.bg};
            border-bottom-right-radius: ${tokens.radius[50]};
            border-bottom-left-radius: ${tokens.radius[50]};
        }
    }

    /* code-block.tsx */

    /* left-bar.tsx */

    .left-bar {
        ${column()}
        position: fixed;
        bottom: ${tokens.spacing[250]};
        left:${tokens.spacing[250]};
        transition: 0.3s transform ease-in-out;

        & > *:not(:last-child) {
            margin-bottom: ${tokens.spacing[150]};
        }

        &.visible {
            transform: scale(1);
        }

        &.hidden {
            transform: scale(0);
        }
    }

    /* left-bar.tsx */

    /* icon.tsx */

    .icon {
        path {
            fill: ${(props) => props.theme.font.color};
        }
    }

    /* icon.tsx */

    /* list.tsx */

    .list {
        list-style: none;

        & > *:not(:last-child) {
            margin-bottom: ${tokens.spacing[150]};
        }

        li {
            ${row()}
            ${font('1.6rem', '0.15px', 'LexendBold', 500)}

            &::before {
                margin-right: ${tokens.spacing[150]};
            }
        }
    }
    
    ul.list {
        li {
            &::before {
                content: '';
                ${shape(tokens.spacing[100], tokens.radius[1000])}
                background: ${(props) => props.theme.list.marker.bg};
            }

        }
    }
    
    ol.list {
        counter-reset: numbers;

        li {
            counter-increment: numbers;

            &::before {
                content: counter(numbers) ". ";
                ${font('2rem', '0.15px', 'LexendBold', 500)}
                color: ${(props) => props.theme.list.marker.bg};
            }
        }
    }

    /* list.tsx */

    /* image.tsx */

    .image {
        position: relative;
        ${column()}

        .image-caption {
            margin-top: ${tokens.spacing[100]};
        }
    }

    /* image.tsx */
`;

export { GlobalStyle };
