import styled, { keyframes } from 'styled-components';

export enum AnimationIterationCount {
  'INFINITE' = 'infinite',
  'ONCE' = '1',
}

export interface BellProps {
  size?: number;
  animationIterationCount?: AnimationIterationCount;
}

const AnimationSoundBow = keyframes`
    0%{
        transform: translate(0,0);
    }
    10% {
        transform: translate(0,15px);
    }
    20% {
        transform: translate(0,0);
    }
    100% {
        transform: translate(0,0);
    }
`;

const AnimationRing = keyframes`
    0%{
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const AnimationButton = keyframes`
    0%{
        transform: translate(0,0);
    }
    5% {
        transform: translate(0,15px);
    }
    20% {
        transform: translate(0,0);
    }
    100% {
        transform: translate(0,0);
    }
`;

const Ring = styled.path<{
  animationIterationCount: BellProps['animationIterationCount'];
}>`
  opacity: 0;
  animation: ${AnimationRing} 1.5s linear;
  animation-iteration-count: ${(props) =>
    props.animationIterationCount || AnimationIterationCount.ONCE};
`;

const SoundBow = styled.path<{
  animationIterationCount: BellProps['animationIterationCount'];
}>`
  animation: ${AnimationSoundBow} 1.5s linear;
  animation-iteration-count: ${(props) =>
    props.animationIterationCount || AnimationIterationCount.ONCE};
`;

const Button = styled.path<{
  animationIterationCount: BellProps['animationIterationCount'];
}>`
  animation: ${AnimationButton} 1.5s linear;
  animation-iteration-count: ${(props) =>
    props.animationIterationCount || AnimationIterationCount.ONCE};
`;

export const Bell = ({ size, animationIterationCount }: BellProps) => {
  return (
    <svg
      style={{ cursor: 'pointer' }}
      width={`${size}`}
      viewBox="0 0 610 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.3175 449.29H304.999V371.29H77.6632C60.0914 371.29 43.8661 378.332 35.1436 389.745C31.6705 394.289 26.9366 398.223 21.2604 401.284L13.428 405.507C6.58147 409.198 1.93728 414.748 0.488364 420.968C-2.95589 435.754 12.2558 449.29 32.3175 449.29Z"
        fill="#FF5A00"
      />
      <path
        d="M577.683 449.29H305.001V371.29H532.337C549.909 371.29 566.134 378.332 574.856 389.745C578.33 394.289 583.063 398.223 588.74 401.284L596.572 405.507C603.419 409.198 608.063 414.748 609.512 420.968C612.956 435.754 597.744 449.29 577.683 449.29Z"
        fill="#FF5A00"
      />
      <path
        d="M63.1099 428L73.4551 410.884L86 396C69.9159 396 65.4677 399.271 57.4837 405.316C54.3046 407.723 55.5977 407.026 50.4022 408.647L43.2329 410.884C36.966 412.839 32.7151 415.779 31.3888 419.074C28.2362 426.906 44.7468 428 63.1099 428Z"
        fill="white"
      />

      <Ring
        animationIterationCount={animationIterationCount}
        d="M120.753 156.356C123.3 159.743 119.523 164.246 115.745 162.327L64.2098 136.158C61.9144 134.992 61.3018 131.993 62.956 130.021L79.7462 110C81.4004 108.028 84.4601 108.109 86.0076 110.166L120.753 156.356Z"
        fill="#7E7E7E"
      />
      <Ring
        animationIterationCount={animationIterationCount}
        d="M174.21 106.551C175.463 110.447 170.749 113.487 167.716 110.739L110.725 59.0924C108.776 57.3263 109.033 54.1924 111.243 52.7669L144.694 31.1931C146.904 29.7677 149.865 30.8266 150.67 33.3304L174.21 106.551Z"
        fill="#7E7E7E"
      />
      <Ring
        animationIterationCount={animationIterationCount}
        d="M489.399 156.646C486.851 160.033 490.628 164.536 494.406 162.617L545.942 136.448C548.237 135.282 548.85 132.283 547.195 130.311L530.405 110.29C528.751 108.318 525.691 108.399 524.144 110.456L489.399 156.646Z"
        fill="#7E7E7E"
      />
      <Ring
        animationIterationCount={animationIterationCount}
        d="M435.941 106.841C434.689 110.737 439.403 113.777 442.435 111.029L499.427 59.3825C501.375 57.6164 501.119 54.4824 498.909 53.0569L465.458 31.4832C463.248 30.0577 460.287 31.1166 459.482 33.6204L435.941 106.841Z"
        fill="#7E7E7E"
      />

      <Button
        animationIterationCount={animationIterationCount}
        d="M305 55.3468C289.591 55.1397 275.196 55.4517 270.294 57.0831C258.171 61.1182 252.479 87.7428 265.175 89.1925C267.654 89.4757 268.409 89.565 268.787 89.6099C269.161 89.6539 269.164 89.6544 270.112 89.7574L270.133 89.7589C275.658 90.3536 281.731 90.7432 288 90.9805V144.29H322V90.9805C328.269 90.7432 334.342 90.3536 339.867 89.7589C340.549 89.6851 340.751 89.6637 340.942 89.6417L341.213 89.6099C341.455 89.5811 341.851 89.5343 342.756 89.4298L344.825 89.1925C357.521 87.7428 351.829 61.1182 339.706 57.0831C334.804 55.4517 320.409 55.1397 305 55.3468Z"
        fill="black"
      />
      <SoundBow
        animationIterationCount={animationIterationCount}
        d="M89.5284 278.139C89.5284 278.139 90.8599 271.546 91.6457 268.29C114.067 175.402 201.119 105.29 304.517 105.29C407.916 105.29 495.402 175.402 517.853 268.29C518.631 271.51 519.951 278.03 519.951 278.03C519.951 278.03 550.002 296.248 550 314.79C549.998 335.501 533.211 352.29 512.5 352.29H97.5C76.7893 352.29 60 335.501 60 314.79C60 296.815 89.5284 278.139 89.5284 278.139Z"
        fill="black"
      />
      <SoundBow
        animationIterationCount={animationIterationCount}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M112.062 277.27C126.395 217.84 174.078 170.172 235 154C235 154 197.743 183.089 183 208C166.991 235.051 160.5 258.5 160.5 258.5L117 326.5C100.598 326.5 91.5 329.916 91.5 313.5C91.5 299.252 110.386 285.076 110.386 285.076C110.386 285.076 111.44 279.85 112.062 277.27Z"
        fill="white"
      />
    </svg>
  );
};
