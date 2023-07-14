import { type ChangeEventHandler, useMemo } from 'react';
import styled from 'styled-components';

import type { BullshitMeterProps } from './defs';
import { central, column, size } from '../shared';
import c from 'classnames';

const Container = styled.div`
  ${central('absolute')}
  ${column()}
  align-items: center;
  gap: 1.4rem;

  .scale-container {
    position: relative;
    height: 400px;
    width: 80px;
    border-top-right-radius: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    overflow: hidden;

    input {
      ${size('80px', '400px')}
      position: absolute;
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      right: 80px;
      transform: rotate(-90deg);
      transform-origin: top right;

      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        ${size('80px', '100')}
      }

      &::-webkit-slider-thumb {
        ${size('20px', '10px')}
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 3px;
        background-color: white;
        clip-path: polygon(100% 0, 50% 100%, 0 0);
      }
    }

    .scale {
      ${size('350px', '100%')}
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column-reverse;
      align-items: end;
      justify-content: space-between;
      padding: 5px;
      z-index: 1;
      pointer-events: none;

      & > * {
        ${size('3px', '20%')}
        border-radius: 3px;
        background-color: white;

        &:nth-child(5n + 5) {
          width: 50%;
        }
      }
    }
  }
`;

const scale = Array.from({ length: 50 });

const BullshitMeter = ({
  className,
  label,
  value,
  onChange,
  ...props
}: BullshitMeterProps) => {
  const handleSliderChangeValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(Number.parseInt(e.target.value));
  };

  const invertedValue = useMemo(() => 100 - value, [value]);

  return (
    <Container className={c('bullshit-meter', className)} {...props}>
      <div
        className="scale-container"
        style={{
          boxShadow: `0px 0px ${invertedValue / 3}px 0px rgba(255, 0, 0, 1)`,
        }}
      >
        <div className="scale">
          {scale.map((_, idx) => (
            <div key={idx} />
          ))}
        </div>
        <input
          onChange={handleSliderChangeValue}
          step={5}
          min={0}
          max={100}
          style={{
            background: `hsla(${invertedValue}, 50%, 50%, 1)`,
          }}
        />
      </div>
      {label}
    </Container>
  );
};

export { BullshitMeter };
