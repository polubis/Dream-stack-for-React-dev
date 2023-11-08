import type { Viewport, ViewportValue } from './defs';

const VIEWPORT: Viewport = {
  smallMobile: 420,
  mobile: 600,
  tablet: 900,
  laptop: 1440,
  desktop: 1920,
};

const { smallMobile, mobile, tablet, laptop, desktop } = VIEWPORT;

const getUpViewport = (value: ViewportValue): string =>
  `(min-width: ${value}px)`;

const getDownViewport = (value: ViewportValue): string =>
  `(max-width: ${value - 1}px)`;

const isUp = (limit: number) => (value: number) => value >= limit;
const isDown = (limit: number) => (value: number) => value < limit;

const SM_UP = getUpViewport(smallMobile);
const M_UP = getUpViewport(mobile);
const T_UP = getUpViewport(tablet);
const L_UP = getUpViewport(laptop);
const D_UP = getUpViewport(desktop);

const isSmUp = isUp(smallMobile);
const isMUp = isUp(mobile);
const isTUp = isUp(tablet);
const isLUp = isUp(laptop);
const isDUp = isUp(desktop);

const SM_DOWN = getDownViewport(smallMobile);
const M_DOWN = getDownViewport(mobile);
const T_DOWN = getDownViewport(tablet);
const L_DOWN = getDownViewport(laptop);
const D_DOWN = getDownViewport(desktop);

const isSmDown = isDown(smallMobile);
const isMDown = isDown(mobile);
const isTDown = isDown(tablet);
const isLDown = isDown(laptop);
const isDDown = isDown(desktop);

export {
  isSmUp,
  isMUp,
  isTUp,
  isLUp,
  isDUp,
  isSmDown,
  isMDown,
  isTDown,
  isLDown,
  isDDown,
  getDownViewport,
  getUpViewport,
  isUp,
  isDown,
  SM_UP,
  M_UP,
  T_UP,
  L_UP,
  D_UP,
  SM_DOWN,
  M_DOWN,
  T_DOWN,
  L_DOWN,
  D_DOWN,
  VIEWPORT,
  smallMobile,
  mobile,
  tablet,
  laptop,
  desktop,
};
