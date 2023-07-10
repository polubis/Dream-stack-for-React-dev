import { createGlobalStyle } from 'styled-components';
import { tokens } from './themes';
import {
  slideIn,
  center,
  central,
  column,
  shape,
  font,
  row,
  size,
  streched,
  buttonBaseEffects,
  setupFilledIcon,
  setupOutlinedIcon,
  trim,
  appearIn,
  disabled,
  wrap,
} from '../shared';
import { T_DOWN } from './viewport';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'LexendBold';
        font-weight: 700;
        src: url('/fonts/LexendBold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'LexendMedium';
        font-weight: 500;
        src: url('/fonts/LexendMedium.ttf') format('truetype');
    }
    
    @font-face {
        font-family: 'LexendRegular';
        font-weight: 400;
        src: url('/fonts/LexendRegular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'LexendLight';
        font-weight: 300;
        src: url('/fonts/LexendLight.ttf') format('truetype');
    }

    html {
        font-size: 62.5%;
        height: 100%;
    }

    body {
        height: 100%;
        background: ${(props) => props.theme.body.bg};
        color: ${(props) => props.theme.font.default.color};
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
    html,
    blockquote {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    /* font.tsx */

    .font {
        &.default, &.default > * {
            color: ${(props) => props.theme.font.default.color};
        }

        &.primary, &.primary > *  {
            color: ${(props) => props.theme.font.primary.color};
        }

        &.h1 {
            ${font('9.8rem', '-1.5px', 'LexendLight', 300)}
        }

        &.h2 {
            ${font('6.1rem', '-0.5px', 'LexendLight', 300)}
        }

        &.h3 {
            ${font('4.9rem', '0px', 'LexendRegular', 400)}
        }

        &.h4 {
            ${font('3.5rem', '0.25px', 'LexendRegular', 400)}
        }

        &.h5 {
            ${font('2.4rem', '0px', 'LexendRegular', 400)}
        }

        &.h6 {
            ${font('2rem', '0.15px', 'LexendMedium', 500)}
        }

        &.b1 {
            ${font('1.6rem', '0.15px', 'LexendRegular', 400)}
            line-height: 2.4rem;
        }

        &.b2 {
            ${font('1.4rem', '0.1px', 'LexendMedium', 500)}
        }

        &.b3 {
            ${font('1.2rem', '0.1px', 'LexendRegular', 400)}
        }

        &.italic, &.italic > * {
            font-style: italic;
        }

        &.bold, &.bold > * {
            font-weight: bold;
            letter-spacing: 0.40px;
        }
    }

    /* font.tsx */

    /* button.tsx */

    .button {
        cursor: pointer;
        position: relative;
        border: none;

        &.size-1 {
            ${font('1.3rem', '0.15px', 'LexendMedium', 500)}
        }

        &.size-2 {
            ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
        }

        &.size-3 {
            ${font('1.8rem', '0.15px', 'LexendMedium', 500)}
        }

        &.size-4 {
            ${font('2.1rem', '0.15px', 'LexendMedium', 500)}
        }

        &.size-5 {
            ${font('2.4rem', '0.15px', 'LexendMedium', 500)}
        }

        &.rectangle {
            border-radius: ${tokens.radius[50]};
        }

        &.rounded {
            ${center()}
            border-radius: ${tokens.radius[1000]};

            .avatar {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }

        &.filled.primary {
            ${(props) =>
              buttonBaseEffects(props.theme.button.filled.primary.outlineColor)}
            color: ${(props) => props.theme.button.filled.primary.color};
            background: ${(props) => props.theme.button.filled.primary.bg};

            .icon path {
                fill: ${(props) => props.theme.button.filled.primary.color};
            }
        }

        &.outlined.primary {
            ${(props) =>
              buttonBaseEffects(props.theme.button.filled.primary.outlineColor)}
            color: ${(props) => props.theme.button.outlined.primary.color};
            background: ${(props) => props.theme.button.outlined.primary.bg};
            border: 2px solid ${(props) =>
              props.theme.button.outlined.primary.borderColor};

            .icon path {
                fill: ${(props) => props.theme.button.outlined.primary.color};
            }
        }

        &.rounded.size-1 {
            ${size(tokens.spacing[400])}
        }

        &.rounded.size-2 {
            ${size(tokens.spacing[500])}
        }

        &.rounded.size-3 {
            ${size(tokens.spacing[600])}
        }

        &.rounded.size-4 {
            ${size(tokens.spacing[700])}
        }

        &.rounded.size-5 {
            ${size(tokens.spacing[800])}
        }

        &.rectangle.size-1 {
            ${size(tokens.spacing[400], 'max-content')}
            padding: 0 ${tokens.spacing[100]};
        }

        &.rectangle.size-2 {
            ${size(tokens.spacing[500], 'max-content')}
            padding: 0 ${tokens.spacing[150]};
        }

        &.rectangle.size-3 {
            ${size(tokens.spacing[600], 'max-content')}
            padding: 0 ${tokens.spacing[200]};
        }

        &.rectangle.size-4 {
            ${size(tokens.spacing[700], 'max-content')}
            padding: 0 ${tokens.spacing[250]};
        }

        &.rectangle.size-5 {
            ${size(tokens.spacing[800], 'max-content')}
            padding: 0 ${tokens.spacing[300]};
        }
    }

    /* button.tsx */

    /* modal.tsx */

    .modal {
        ${central('fixed')}
        ${column()}
        ${appearIn()}
        min-width: 280px;
        max-height: calc(100% - ${tokens.spacing[250]});
        width: 100%;
        max-width: 380px;
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
            ${slideIn(tokens.spacing[200], tokens.spacing[100])}
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

    /*  input.tsx */

    .input, .textarea {
        position: relative;

        input, textarea {
            ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
            padding: ${tokens.spacing[150]};
            border: 2px solid transparent;
            width: 100%;
            background: none;
            color: inherit;

            &::placeholder {
                ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
            }

            &:focus {
                outline-offset: ${tokens.spacing[25]};
                outline-width: ${tokens.spacing[25]};
            }
        }

        .input-loader, .input-icon {
            position: absolute;
            top: 0;
            right: ${tokens.spacing[100]};
            margin: auto 0;
            bottom: 0;

            & ~ input {
                padding-right: ${tokens.spacing[550]};
            }
        }
        
        &.textarea {
            textarea {
                resize: vertical;
            }

            .input-loader, .input-icon {
                right: ${tokens.spacing[300]};
                bottom: ${tokens.spacing[150]};
                top: unset;
                left: unset;
                margin: unset;
            }
        }

        .input-loader { 
            ${row()}
            right: ${tokens.spacing[150]};
        }

        .input-icon {
            &.error-icon path {
                fill: ${(props) => props.theme.input.invalid};
            }
        }

        &.filled {
            input, textarea {
                border-radius: ${tokens.radius[50]};
                background: ${(props) => props.theme.input.filled.bg};
                color: ${(props) => props.theme.input.filled.color};

                &::placeholder {
                    color: ${(props) =>
                      props.theme.input.filled.placeholderColor};
                }
            }

            &.invalid:not(.disabled) {
                input, textarea {
                    border-color: ${(props) => props.theme.input.invalid};

                    &:focus {
                        outline-color: ${(props) => props.theme.input.invalid};
                        border-color: transparent;
                    }
                }
            }
        }

        &.outlined {
            input, textarea {
                color: ${(props) => props.theme.input.outlined.color};
                border-color: ${(props) =>
                  props.theme.input.outlined.borderColor};
                border-radius: ${tokens.radius[50]};

                &::placeholder {
                    color: ${(props) =>
                      props.theme.input.outlined.placeholderColor};
                }

                &:focus {
                    border-color: transparent;
                }
            }
            
            &.invalid:not(.disabled) {
                input, textarea {
                    color: ${(props) => props.theme.input.invalid};
                    border-color: ${(props) => props.theme.input.invalid};

                    &:focus {
                        outline-color: ${(props) => props.theme.input.invalid};
                        border-color: transparent;
                    }
                }
            }
        }

        &.empty {
            input, textarea {
                color: ${(props) => props.theme.input.empty.color};

                &::placeholder {
                    color: ${(props) =>
                      props.theme.input.empty.placeholderColor};
                }
            }

            &.invalid:not(.disabled) {
                input, textarea {
                    color: ${(props) => props.theme.input.invalid};

                    &:focus {
                        outline-color: ${(props) => props.theme.input.invalid};
                    }
                }
            }
        }

        &.disabled {
            ${disabled()}
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
            background: ${(props) => props.theme.box.filled.bg};
        }

        &.outlined {
            background: ${(props) => props.theme.box.outlined.bg};
            border: 1px solid ${(props) =>
              props.theme.box.outlined.borderColor};
        }

        &.column {
            ${column()}

            &.right {
                align-items: flex-end;
            }

            &.center {
                align-items: center;
            }

            &.between {
                justify-content: space-between;
            }
        }

        &.row {
            ${row()}

            &.right {
                justify-content: flex-end;
            }

            &.center {
                justify-content: center;
            }

            &.between {
                justify-content: space-between;
            }
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
            fill: ${(props) => props.theme.font.default.color};
        }
    }

    /* icon.tsx */

    /* list.tsx */

    .list {
        list-style: none;

        & > *:not(:last-of-type) {
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
    
    .ordered {
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
    
    .unordered {
        li {
            &::before {
                content: '';
                ${shape(tokens.spacing[100], tokens.radius[1000])}
                background: ${(props) => props.theme.list.marker.bg};
                flex-shrink: 0;
            }

        }
    }

    /* list.tsx */

    /* popover.tsx */

    .popover {
        position: relative;

        &-content {
            ${slideIn(tokens.spacing[0], tokens.spacing[0])};
            position: absolute;
            z-index: ${tokens.z[50]};
        }
    }

    /* popover.tsx */

    /* blockquote.tsx */

    .blockquote {
        border-radius: ${tokens.radius[50]};
        background: ${(props) => props.theme.blockquote.bg};
        border: 1px solid ${(props) => props.theme.blockquote.borderColor};

        &.h1, &.h2, &.h3 {
            padding: ${tokens.spacing[200]};
        }

        &.h4, &.h5, &.h6 {
            padding: ${tokens.spacing[150]};
        }

        &.b1, &.b2 {
            padding: ${tokens.spacing[50]};
        }
    }

    /* blockquote.tsx */

    /* avatar.tsx */

    .avatar {
        .avatar-image {
            height: 100%;
            width: 100%;
            box-shadow: ${tokens.shadow[50]};
        }

        &.rounded .avatar-image  {
            border-radius: ${tokens.radius[1000]};
        }

        &.rectangle .avatar-image  {
            border-radius: ${tokens.radius[50]};
        }

        &.small {
            ${size(tokens.spacing[400])};
        }

        &.medium {
            ${size(tokens.spacing[600])};
        }

        &.big {
            ${size(tokens.spacing[800])};
        }
    }

    /* avatar.tsx */

    /* loader.tsx */

    .loader {
        --loader-primary-color: ${(props) => props.theme.loader.primary};
        --loader-secondary-color: ${(props) => props.theme.loader.secondary};

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }

        @keyframes rotateAndChangeColor {
            0% {
                transform: rotate(0deg);
                border-top-color: var(--loader-secondary-color);
            }
            50% {
                transform: rotate(180deg);
                border-top-color: var(--loader-primary-color);
            }
            100% {
                transform: rotate(360deg);
                border-top-color: var(--loader-secondary-color);
            }
        }

        &.tiny .loader-animation {
            ${size(tokens.spacing[250])}
            padding: ${tokens.spacing[25]};
            border: ${tokens.spacing[25]} solid transparent;
        }

        &.small .loader-animation {
            ${size(tokens.spacing[500])}
            padding: ${tokens.spacing[25]};
            border: ${tokens.spacing[25]} solid transparent;
        }

        &.medium .loader-animation {
            ${size(tokens.spacing[1000])}
            padding: ${tokens.spacing[50]};
            border: ${tokens.spacing[25]} solid transparent;

            div {
                padding: ${tokens.spacing[50]};
                border: ${tokens.spacing[25]} solid transparent;
            }

            &.loader-4, &.loader-4 div {
                border-radius: ${tokens.radius[1000]};
                padding: ${tokens.spacing[50]};
            }
        }

        &.big .loader-animation {
            ${size(tokens.spacing[1500])}
            padding: ${tokens.spacing[100]};
            border: ${tokens.spacing[25]} solid transparent;

            div {
                padding: ${tokens.spacing[100]};
                border: ${tokens.spacing[25]} solid transparent;
            }

            &.loader-4, &.loader-4 div {
                border-radius: ${tokens.radius[1000]};
                padding: ${tokens.spacing[100]};
            }
        }

        .loader-animation {
            position: relative;
            overflow: hidden;
            border-radius: ${tokens.radius[1000]};
            animation: rotate linear 3.5s infinite;

            div {
                height: 100%;
                border-radius: ${tokens.radius[1000]};
                animation: rotate linear 3.5s infinite;
            }

            &.loader-1, &.loader-1 div {
                border-top-color: var(--loader-secondary-color);
                border-bottom-color: var(--loader-primary-color);
            }

            &.loader-2, &.loader-2 div {
                border-top-color: var(--loader-primary-color);
                border-left-color: var(--loader-secondary-color);
                border-right-color: var(--loader-secondary-color);
            }

            &.loader-3, &.loader-3 div {
                border-top-color: var(--loader-secondary-color);
                border-left-color: var(--loader-primary-color);
                animation-timing-function: cubic-bezier(.55, .38, .21, .88);
                animation-duration: 3s;
            }

            &.loader-4, &.loader-4 div {
                animation: rotateAndChangeColor 4s infinite linear;
            }

            &.loader-animation:hover, &.loader-animation div:hover {
                animation-play-state: paused !important;
            }

            &.loader-animation, &.loader-animation div {
                will-change: transform;
            }
        }
    }    

    /* loader.tsx */
    
    /* avatars.tsx */

    .avatars {
        ${row()}
        width: max-content;

        &.rounded .avatars-rest-count {
            border-radius: ${tokens.radius[1000]};
        }
        
        &.rectangle .avatars-rest-count {
            border-radius: ${tokens.radius[50]};
        }

        .avatars-rest-count {
            ${center()}
            background: ${(props) => props.theme.avatars.restCounter.bg};
            box-shadow: ${tokens.shadow[50]};
  
            .font {
                color: ${(props) => props.theme.avatars.restCounter.color};
            }
        }
    }

    /* avatars.tsx */

    /* alert.tsx */

    .alert {
        ${row()}
        justify-content: space-between;
        padding: ${tokens.spacing[100]} ${tokens.spacing[150]};
        border-radius: ${tokens.radius[50]};
        border: 2px solid transparent;

        .icon {
            flex-shrink: 0;
        }

        .font {
            padding-right: ${tokens.spacing[150]};
        }

        &.fixed {
            position: fixed;
            top: ${tokens.spacing[150]};
            left: ${tokens.spacing[250]};
            right: ${tokens.spacing[250]};
        }

        &.trimmed .font {
            ${trim()}
        }

        &.filled {
            box-shadow: ${tokens.shadow[50]};

            &.info {
                ${(props) =>
                  setupFilledIcon(
                    props.theme.alert.filled.info.bg,
                    props.theme.alert.filled.info.color
                  )}
            }

            &.ok {
                ${(props) =>
                  setupFilledIcon(
                    props.theme.alert.filled.ok.bg,
                    props.theme.alert.filled.ok.color
                  )}
            }

            &.error {
                ${(props) =>
                  setupFilledIcon(
                    props.theme.alert.filled.error.bg,
                    props.theme.alert.filled.error.color
                  )}
            }

            &.warn {
                ${(props) =>
                  setupFilledIcon(
                    props.theme.alert.filled.warn.bg,
                    props.theme.alert.filled.warn.color
                  )}
            }
        }

        &.outlined {
            &.info {
                ${(props) =>
                  setupOutlinedIcon(props.theme.alert.outlined.info.color)}
            }

            &.ok {
                ${(props) =>
                  setupOutlinedIcon(props.theme.alert.outlined.ok.color)}
            }

            &.error {
                ${(props) =>
                  setupOutlinedIcon(props.theme.alert.outlined.error.color)}
            }

            &.warn {
                ${(props) =>
                  setupOutlinedIcon(props.theme.alert.outlined.warn.color)}
            }
        }
    }
    
    /* alert.tsx */

    /* field.tsx */

    .field {
        ${column()}

        &-hint {
            color: ${(props) => props.theme.field.hint.color};
        }

        &.invalid {
            .field-hint {
                color: ${(props) => props.theme.field.invalid.color};
            }
        }

        &-label {
            ${trim()}
            margin-bottom: ${tokens.spacing[100]};
        }
  
        &-hint {
            margin-top: ${tokens.spacing[100]};
        }
    }

    /* field.tsx */

    /* file-picker.tsx */

    .file-picker {
        position: relative;
        cursor: pointer;
        padding: ${tokens.spacing[250]};
        min-height: ${tokens.spacing[900]};

        &.previewing {
            padding: ${tokens.spacing[250]} ${tokens.spacing[250]} ${
  tokens.spacing[150]
} ${tokens.spacing[250]};
        }

        &.previewing:not(.disabled, .loading) {
            .file-picker-preview-image img {
                &:hover {
                    outline: 2px solid ${(props) =>
                      props.theme.filePicker.outline.color};
                }
            }
        }

        &:hover:not(.disabled, .loading) {
            opacity: 0.8;
        }

        &.disabled, &.loading {
            ${disabled()}
        }

        &.invalid {
            outline: 2px solid ${(props) =>
              props.theme.filePicker.invalid.outline};
              
            .font {
                color: ${(props) => props.theme.filePicker.invalid.color};
            }
        }

        .file-picker-input {
            visibility: hidden;
            position: absolute;
        }
        
        .file-picker-loader {
            ${center()}
            ${streched('absolute')}
        }

        .file-picker-preview {
            ${wrap()}

            .file-picker-preview-image {
                ${size(tokens.spacing[550])}
                box-shadow: ${tokens.shadow[50]};
                margin: 0 ${tokens.spacing[100]} ${tokens.spacing[100]} 0;

                img {
                    ${size('100%')}
                    object-fit: cover;
                    border-radius: ${tokens.radius[50]};
                }
            }
        }
    }

    /* file-picker.tsx */
`;

export { GlobalStyle };
