import type { FontFamily, FontWeight, StrechablePosition } from './defs';
import type { FlattenSimpleInterpolation } from 'styled-components';

import { css } from 'styled-components';

const size = (height: string, width?: string): FlattenSimpleInterpolation =>
  css`
    height: ${height};
    width: ${width ?? height};
  `;

const row = (): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
`;

const column = (): FlattenSimpleInterpolation => css`
  display: flex;
  flex-flow: column;
`;
const center = (): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const streched = (
  position: StrechablePosition
): FlattenSimpleInterpolation => css`
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
): FlattenSimpleInterpolation => css`
  font-size: ${size};
  letter-spacing: ${spacing};
  font-family: ${family}, sans-serif;
  font-weight: ${weight};
`;

export { font, size, center, streched, row, column };
