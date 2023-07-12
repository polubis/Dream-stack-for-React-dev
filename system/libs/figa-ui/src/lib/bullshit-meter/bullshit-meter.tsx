import { useState, FC } from 'react';
import styled, { CSSObject } from 'styled-components';

import type { BullshitMeterProps } from './defs';

const scale = [
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '20%' },
  { size: '50%' },
];

const BullshitMeter: FC<BullshitMeterProps> = () => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [invertedSliderValue, setInvertedSliderValue] = useState<number>(100);

  const handleSliderChangeValue = (e: any) => {
    const invertedSliderValue = 100 - e.target.value;
    setInvertedSliderValue(invertedSliderValue);
    setSliderValue(e.target.value);
  };

  return (
    <BullshitMeterWrapper>
      <StyledBullshitMeter shadowValue={sliderValue}>
        <Scale>
          {scale.map((line) => (
            <ScaleLine size={line.size} />
          ))}
        </Scale>
        <StyledRange
          min={0}
          max={100}
          value={sliderValue}
          invertedValue={invertedSliderValue}
          onChange={handleSliderChangeValue}
          step={5}
        />
      </StyledBullshitMeter>
      <ValueDisplay>{sliderValue > 87 ? 'HOT!!!' : sliderValue}</ValueDisplay>
    </BullshitMeterWrapper>
  );
};

export { BullshitMeter };

const BullshitMeterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
`;

const StyledBullshitMeter = styled.div`
  position: relative;
  height: 400px;
  width: 80px;
  border-top-right-radius: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: hidden;
  -webkit-box-shadow: ${({ shadowValue }: any) =>
    `0px 0px ${shadowValue / 3}px 0px rgba(255, 0, 0, 1)`};
  -moz-box-shadow: ${({ shadowValue }: any) =>
    `0px 0px ${shadowValue / 3}px 0px rgba(255, 0, 0, 1)`};
  box-shadow: ${({ shadowValue }: any) =>
    `0px 0px ${shadowValue / 3}px 0px rgba(255, 0, 0, 1)`};
`;

const Scale = styled.div`
  position: absolute;
  width: 100%;
  height: 350px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  justify-content: space-between;
  padding: 5px;
  z-index: 1;
  pointer-events: none;
`;

const ScaleLine = styled.span`
  width: ${({ size }: CSSObject) => size};
  height: 3px;
  border-radius: 3px;
  background-color: white;
`;

const StyledRange = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  height: 80px;
  width: 400px;
  right: 80px;
  transform: rotate(-90deg);
  transform-origin: top right;
  background-color: ${({ invertedValue }: CSSObject) =>
    `hsla(${invertedValue}, 50%, 50%, 1)`};

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 100%;
    width: 80px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 20px;
    width: 10px;
    border-radius: 3px;
    background-color: white;
    clip-path: polygon(100% 0, 50% 100%, 0 0);
  }
`;

const ValueDisplay = styled.p`
  color: white;
  font-size: 30px;
`;
