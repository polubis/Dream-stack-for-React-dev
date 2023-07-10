import type { FontFamily, FontWeight, StrechablePosition } from './defs';
import { keyframes } from 'styled-components';

import { css } from 'styled-components';

const size = (height: string, width?: string) =>
  css`
    height: ${height};
    width: ${width ?? height};
  `;

const row = () => css`
  display: flex;
  align-items: center;
`;

const column = () => css`
  display: flex;
  flex-flow: column;
`;

const wrap = () => css`
  display: flex;
  flex-flow: wrap;
`;

const center = (flow: 'row' | 'column' = 'row') => css`
  display: flex;
  flex-flow: ${flow};
  align-items: center;
  justify-content: center;
`;

const central = (position: StrechablePosition) => css`
  position: ${position};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const streched = (position: StrechablePosition) => css`
  position: ${position};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const font = (
  size: string,
  spacing: string,
  family: FontFamily,
  weight: FontWeight
) => css`
  font-size: ${size};
  letter-spacing: ${spacing};
  font-family: ${family}, Verdana, sans-serif;
  font-weight: ${weight};
`;

const appearInAnimation = () => keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const slideInAnimation = (from = '15px', to = '0') => keyframes`
  from {
    transform: translateY(${from});
    opacity: 0;
  }

  to {
    transform: translateY(${to});
    opacity: 1;
  }
`;

const slideIn = (from?: string, to?: string) => css`
  opacity: 0;
  animation: ${slideInAnimation(from, to)} 0.2s ease-in-out forwards;
`;

const appearIn = () => css`
  opacity: 0;
  animation: ${appearInAnimation()} 0.2s ease-in-out forwards;
`;

const shape = (size: string, radius: string) =>
  css`
    height: ${size};
    width: ${size};
    border-radius: ${radius};
  `;

const setupFilledIcon = (bg: string, color: string) => css`
  background: ${bg};

  .font {
    color: ${color};
  }

  .icon path {
    fill: ${color};
  }
`;

const setupOutlinedIcon = (color: string) => css`
  border-color: ${color};

  .font {
    color: ${color};
  }

  .icon path {
    fill: ${color};
  }
`;

const buttonBaseEffects = (outlineColor: string) =>
  css`
    transition: 0.2s all ease-in-out;
    outline: 2px solid transparent;
    outline-offset: 4px;

    &.loading {
      position: relative;

      & > .child {
        opacity: 0;
      }

      & > .loader {
        ${central('absolute')}
      }
    }

    &:not(:disabled) {
      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.4;
      }

      &:focus {
        outline-color: ${outlineColor};
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `;

const trim = () =>
  css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

const disabled = () => css`
  opacity: 0.4;
  cursor: not-allowed;
`;

export {
  font,
  size,
  center,
  disabled,
  wrap,
  streched,
  row,
  column,
  trim,
  slideIn,
  central,
  shape,
  buttonBaseEffects,
  appearInAnimation,
  setupFilledIcon,
  setupOutlinedIcon,
  appearIn,
};
