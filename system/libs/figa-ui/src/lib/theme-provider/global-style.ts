import { createGlobalStyle } from 'styled-components';
import { tokens } from './setup';
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
  trim,
  appearIn,
  disabled,
  wrap,
} from '../shared';
import { T_DOWN } from './viewport';

const GlobalStyle = createGlobalStyle`
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

    ul, ol {
        list-style: none;
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

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        ${size(tokens.spacing[100])}
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.scroll.track};
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.scroll.thumb};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme.scroll.thumbHover};
    }

    /* atoms */

    .r-90 {
        transform: rotate(90deg);
    }

    /* atoms */

    /* font.tsx */

    .font {
        text-rendering: optimizeLegibility;
        backface-visibility: hidden;
        transform: translateZ(0);

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
            line-height: 2.8rem;
        }

        &.b1 {
            ${font('1.6rem', '0.15px', 'LexendRegular', 400)}
            line-height: 2.8rem;
        }

        &.b2 {
            ${font('1.4rem', '0.1px', 'LexendMedium', 500)}
            line-height: 2.2rem;
        }

        &.b3 {
            ${font('1.2rem', '0.1px', 'LexendRegular', 400)}
            line-height: 2rem;
        }

        &.italic, &.italic > * {
            font-style: italic;
        }

        &.bold, &.bold > * {
            font-weight: bold;
            letter-spacing: 0.40px;
        }

        &.trim, &.trim > * {
            ${trim()}
        }

        &.center, &.center > * {
            text-align: center;
        }

        &.justify, &.justify > * {
            text-align: justify;
        }
    }

    /* font.tsx */

    /* button.tsx */

    .button {
        ${center()}
        cursor: pointer;
        position: relative;
        border: none;
        flex-shrink: 0;

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

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.primary.color};
                border-bottom-color: ${(props) =>
                  props.theme.button.filled.primary.color};
            }
        }

        &.outlined.primary {
            ${(props) =>
              buttonBaseEffects(props.theme.button.filled.primary.outlineColor)}
            color: ${(props) => props.theme.button.outlined.primary.color};
            background: ${(props) => props.theme.button.outlined.primary.bg};
            border: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.button.outlined.primary.borderColor};

            .icon path {
                fill: ${(props) => props.theme.button.outlined.primary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.primary.outlineColor};
                border-bottom-color: ${(props) =>
                  props.theme.button.outlined.primary.borderColor};
            }
        }

        &.ghost.primary {
            ${(props) =>
              buttonBaseEffects(props.theme.button.filled.primary.outlineColor)}
            color: ${(props) => props.theme.button.outlined.primary.color};
            background: transparent;
            border: ${tokens.spacing[25]} solid transparent;

            &:hover:not(:disabled) {
                background: ${(props) => props.theme.button.ghost.hoverBg};
                opacity: 1;
            }

            .icon path {
                fill: ${(props) => props.theme.button.outlined.primary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.primary.outlineColor};
                border-bottom-color: ${(props) =>
                  props.theme.button.outlined.primary.borderColor};
            }
        }

        &.filled.secondary {
            ${(props) =>
              buttonBaseEffects(
                props.theme.button.filled.secondary.outlineColor
              )}
            color: ${(props) => props.theme.button.filled.secondary.color};
            background: ${(props) => props.theme.button.filled.secondary.bg};

            .icon path {
                fill: ${(props) => props.theme.button.filled.secondary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.secondary.color};
                border-bottom-color: ${(props) =>
                  props.theme.button.filled.secondary.color};
            }
        }

        &.outlined.secondary {
            ${(props) =>
              buttonBaseEffects(
                props.theme.button.filled.secondary.outlineColor
              )}
            color: ${(props) => props.theme.button.outlined.secondary.color};
            background: ${(props) => props.theme.button.outlined.secondary.bg};
            border: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.button.outlined.secondary.borderColor};

            .icon path {
                fill: ${(props) => props.theme.button.outlined.secondary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.secondary.outlineColor};
                border-bottom-color: ${(props) =>
                  props.theme.button.outlined.secondary.borderColor};
            }
        }

        &.ghost.secondary {
            ${(props) =>
              buttonBaseEffects(
                props.theme.button.filled.secondary.outlineColor
              )}
            color: ${(props) => props.theme.button.outlined.secondary.color};
            background: transparent;
            border: ${tokens.spacing[25]} solid transparent;

            &:hover:not(:disabled) {
                background: ${(props) => props.theme.button.ghost.hoverBg};
                opacity: 1;
            }

            .icon path {
                fill: ${(props) => props.theme.button.outlined.secondary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.secondary.outlineColor};
                border-bottom-color: ${(props) =>
                  props.theme.button.outlined.secondary.borderColor};
            }
        }

       &.filled.tertiary {
            ${(props) =>
              buttonBaseEffects(
                props.theme.button.filled.tertiary.outlineColor
              )}
            color: ${(props) => props.theme.button.filled.tertiary.color};
            background: ${(props) => props.theme.button.filled.tertiary.bg};

            .icon path {
                fill: ${(props) => props.theme.button.filled.tertiary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.tertiary.color};
                border-bottom-color: ${(props) =>
                  props.theme.button.filled.tertiary.color};
            }
        }

       &.outlined.tertiary {
            ${(props) =>
              buttonBaseEffects(
                props.theme.button.filled.tertiary.outlineColor
              )}
            color: ${(props) => props.theme.button.outlined.tertiary.color};
            background: ${(props) => props.theme.button.outlined.tertiary.bg};
            border: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.button.outlined.tertiary.borderColor};

            .icon path {
                fill: ${(props) => props.theme.button.outlined.tertiary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.tertiary.outlineColor};
                border-bottom-color: ${(props) =>
                  props.theme.button.outlined.tertiary.borderColor};
            }
        }

        &.ghost.tertiary {
            ${(props) =>
              buttonBaseEffects(
                props.theme.button.filled.tertiary.outlineColor
              )}
            color: ${(props) => props.theme.button.outlined.tertiary.color};
            background: transparent;
            border: ${tokens.spacing[25]} solid transparent;

            &:hover:not(:disabled) {
                background: ${(props) => props.theme.button.ghost.hoverBg};
                opacity: 1;
            }

            .icon path {
                fill: ${(props) => props.theme.button.outlined.tertiary.color};
            }

            .loader-animation {
                border-top-color: ${(props) =>
                  props.theme.button.filled.tertiary.outlineColor};
                border-bottom-color: ${(props) =>
                  props.theme.button.outlined.tertiary.borderColor};
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
            &:not(.equal) {
                ${size(tokens.spacing[400], 'max-content')}
                padding: 0 ${tokens.spacing[100]};
            }

            &.equal {
                ${size(tokens.spacing[400])}
            }
        }

        &.rectangle.size-2 {
            &:not(.equal) {
                ${size(tokens.spacing[500], 'max-content')}
                padding: 0 ${tokens.spacing[150]};
            }

            &.equal {
                ${size(tokens.spacing[500])}
            }
        }

        &.rectangle.size-3 {
            &:not(.equal) {
                ${size(tokens.spacing[600], 'max-content')}
                padding: 0 ${tokens.spacing[200]};
            }

            &.equal {
                ${size(tokens.spacing[600])}
            }
        }

        &.rectangle.size-4 {
            &:not(.equal) {
                ${size(tokens.spacing[700], 'max-content')}
                padding: 0 ${tokens.spacing[250]};
            }

            &.equal {
                ${size(tokens.spacing[700])}
            }
        }

        &.rectangle.size-5 {
            &:not(.equal) {
                ${size(tokens.spacing[800], 'max-content')}
                padding: 0 ${tokens.spacing[300]};
            }

            &.equal {
                ${size(tokens.spacing[800])}
            }
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
        background: ${(props) => props.theme.select.bg};
        border-radius: ${tokens.radius[50]};

        & > *:first-child {
            border-top-left-radius: ${tokens.radius[50]};
            border-top-right-radius: ${tokens.radius[50]};
        }

        & > *:last-child {
            border-bottom-left-radius: ${tokens.radius[50]};
            border-bottom-right-radius: ${tokens.radius[50]};
        }

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

        &.input {
            height: ${tokens.spacing[500]};
        }

        &.prefx {
            input {
                padding-left: ${tokens.spacing[600]};
            }
        }

        &.suffx {
            input {
                padding-right: ${tokens.spacing[600]};
            }
        }   

        .prefx-wrapper, .suffx-wrapper {
            ${center()}
            ${size(tokens.spacing[500])}
            position: absolute;
            top: 0;
        }

        .prefx-wrapper {
            left: 0;
            border-top-left-radius: ${tokens.radius[50]};
            border-bottom-left-radius: ${tokens.radius[50]};
        }

        .suffx-wrapper {
            right: 0;
            border-top-right-radius: ${tokens.radius[50]};
            border-bottom-right-radius: ${tokens.radius[50]};
        }

        input, textarea {
            ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
            ${size('100%')}
            padding: ${tokens.spacing[150]};
            border: ${tokens.spacing[25]} solid transparent;
            background: none;
            color: inherit;

            &::placeholder {
                ${font('1.5rem', '0.15px', 'LexendMedium', 500)}
            }

            &:focus {
                outline-offset: ${tokens.spacing[25]};
                outline-width: ${tokens.spacing[25]};
                -moz-outline-radius: ${tokens.radius[50]};
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
                min-height: ${tokens.spacing[2000]};
            }

            .input-loader, .input-icon {
                right: ${tokens.spacing[200]};
                bottom: ${tokens.spacing[150]};
                top: unset;
                left: unset;
                margin: unset;
            }

            .input-loader {
                right: ${tokens.spacing[250]};
            }
        }

        .input-loader {
            ${row()}
            right: ${tokens.spacing[150]};
            transform: translateX(${tokens.spacing[25]});

        }

        .input-icon {
            &.error-icon path {
                fill: ${(props) => props.theme.input.invalid};
            }
        }

        &.filled {
            .suffx-wrapper {
                border-left: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.input.filled.fxColor};
            }

            .prefx-wrapper {
                border-right: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.input.filled.fxColor};
            }


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
            .suffx-wrapper {
                padding-right: ${tokens.spacing[25]};
                border-left: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.input.outlined.fxColor};
            }

            .prefx-wrapper {
                padding-left: ${tokens.spacing[25]};
                border-right: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.input.outlined.fxColor};
            }

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
            .suffx-wrapper {
                border-left: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.input.empty.fxColor};
            }

            .prefx-wrapper {
                border-right: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.input.empty.fxColor};
            }

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

        &.invalid:not(.disabled) {
            .suffx-wrapper, .prefx-wrapper {
                border-color: ${(props) => props.theme.input.invalid};
            }
        }
    }

    /* input.tsx */

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

        .footer-container {
            ${column()}
            margin: 0 auto;
            max-width: ${tokens.width[50]};
            padding: ${tokens.spacing[300]} 0;

            .footer-content {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
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

    /* icon.tsx */

    .icon {
        path {
            fill: ${(props) => props.theme.font.default.color};
        }
    }

    /* icon.tsx */

    /* list.tsx */

    .list {
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

    .popover-content {
        ${slideIn(tokens.spacing[0], tokens.spacing[0])};
        position: fixed;
        z-index: ${tokens.z[500]};
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

    /* field.tsx */

    /* divider.tsx */

    .divider {
        &.default > * {
            background: ${(props) => props.theme.divider.default.bg};
        }

        &.primary > * {
            background: ${(props) => props.theme.divider.primary.bg};
        }

        &.x > * {
            ${size(tokens.spacing[25], tokens.spacing[250])}
        }

        &.y > * {
            ${size(tokens.spacing[250], tokens.spacing[25])}
        }
    }

    /* divider.tsx */

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
                    outline: ${tokens.spacing[25]} solid ${(props) =>
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
            outline: ${tokens.spacing[25]} solid ${(props) =>
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

        &.one .file-picker-preview-image {
            ${size('100%', 'auto')}
        }
    }

    /* placeholder.tsx */

    .placeholder {
        ${center()}
        padding: ${tokens.spacing[250]};
        border-radius: ${tokens.radius[50]};
        min-height: ${tokens.spacing[1250]};
        min-width: ${tokens.spacing[1250]};
        max-width: max-content;
        max-height: max-content;
        border: ${tokens.spacing[12]} solid transparent;

        &.full {
            max-width: 100%;
            max-height: 100%;
        }

        &.filled {
            background: ${(props) => props.theme.placeholder.filled.bg};
        }

        &.outlined {
            background: ${(props) => props.theme.placeholder.outlined.bg};
            border-color: ${(props) =>
              props.theme.placeholder.outlined.borderColor};
        }

        .logo-graphic {
            opacity: 0.4;
        }
    }

    /* placeholder.tsx */

    /* file-picker.tsx */

    /* thumbnail.tsx */

    .thumbnail {
        position: relative;
        height: 320px;

        img {
            ${streched('absolute')}
            ${size('100%')}
            object-fit: cover;
        }

        &-content {
            ${center()}
            ${streched('absolute')}
            padding: ${tokens.spacing[350]} ${tokens.spacing[250]};
            background: ${(props) => props.theme.thumbnail.bg};

            .h2 {
                text-align: center;
                color: ${(props) => props.theme.thumbnail.color};
                text-shadow: ${tokens.shadow[50]};
            }
        }
    }

    /* thumbnail.tsx */

    /* badge.tsx */

    .badge {
        ${center()}
        ${font('1.3rem', '0.03rem', 'LexendBold', 700)}
        ${size(tokens.spacing[400], 'max-content')}
        padding: 0 ${tokens.spacing[100]};
        border-radius: ${tokens.radius[50]};
        text-align: center;
        border: ${tokens.spacing[25]} solid transparent;

        &.filled {
            &.primary {
                background: ${(props) => props.theme.badge.filled.primary.bg};
                color:${(props) => props.theme.badge.filled.primary.color};
                border-color: ${(props) => props.theme.badge.filled.primary.bg};
            }

            &.secondary {
                background: ${(props) => props.theme.badge.filled.secondary.bg};
                color:${(props) => props.theme.badge.filled.secondary.color};
                border-color: ${(props) =>
                  props.theme.badge.filled.secondary.bg};
            }

            &.ok {
                background: ${(props) => props.theme.badge.filled.ok.bg};
                color:${(props) => props.theme.badge.filled.ok.color};
                border-color: ${(props) => props.theme.badge.filled.ok.bg};
            }

            &.casual {
                background: ${(props) => props.theme.badge.filled.casual.bg};
                color:${(props) => props.theme.badge.filled.casual.color};
                border-color: ${(props) => props.theme.badge.filled.casual.bg};
            }
        }

        &.outlined {
            &.primary {
                color:${(props) => props.theme.badge.outlined.primary.color};
                border-color: ${(props) =>
                  props.theme.badge.outlined.primary.borderColor};
            }

            &.secondary {
                color:${(props) => props.theme.badge.outlined.secondary.color};
                border-color: ${(props) =>
                  props.theme.badge.outlined.secondary.borderColor};
            }

            &.ok {
                color:${(props) => props.theme.badge.outlined.ok.color};
                border-color: ${(props) =>
                  props.theme.badge.outlined.ok.borderColor};
            }

            &.casual {
                color:${(props) => props.theme.badge.outlined.casual.color};
                border-color: ${(props) =>
                  props.theme.badge.outlined.casual.borderColor};
            }
        }
    }

    /* badge.tsx */

    /* checkbox.tsx */

    .checkbox {
        ${row()}
        max-width: max-content;

        &, input, label {
            flex-shrink: 0;
        }

        label {
            cursor: pointer;
        }

        input {
            ${size(tokens.spacing[350])}
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            border: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.checkbox.borderColor};
            position: relative;
            cursor: pointer;
            background: transparent;
            margin: 0;
            border-radius: ${tokens.radius[50]};

            &:after {
                content: '';
                display: block;
                left: 0;
                top: 0;
                position: absolute;
            }

            &:checked {
                background: ${(props) => props.theme.checkbox.checked.bg};
                border-color: ${(props) =>
                  props.theme.checkbox.checked.borderColor};

                &:after {
                    border: ${tokens.spacing[25]} solid ${(props) =>
  props.theme.checkbox.checked.color};
                    height: 11px;
                    width: ${tokens.spacing[100]};
                    border-top: 0;
                    border-left: 0;
                    top: 2.5px;
                    left: ${tokens.spacing[100]};
                    transform: rotate(40deg);
                }
            }

            &:disabled {
                opacity: 0.4;
                cursor: not-allowed;

                & + label {
                    opacity: 0.4;
                    cursor: not-allowed;
                }
            }
        }

        &.reversed {
            flex-flow: row-reverse;

            label {
                margin-right: ${tokens.spacing[150]};
            }
        }

        &:not(.reversed) {
            label {
                margin-left: ${tokens.spacing[150]};
            }
        }
    }

    /* checkbox.tsx */
`;

export { GlobalStyle };
