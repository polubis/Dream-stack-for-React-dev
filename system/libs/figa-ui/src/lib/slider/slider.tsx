import { useState } from 'react';
import styled from 'styled-components';

import SlideNextButton from './slide-next-button';
import SlidePrevButton from './slide-prev-button';

import type { SliderProps } from './defs';

import { items } from './items';

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:focus {
    outline: none;
  }
`;

const StyledSlider = styled.div`
  width: 50%;
  height: 300px;
  width: 600px;
  outline: 1px solid white;
  overflow: hidden;
`;

const SliderInner = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0;
  height: 300px;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  width: 600px;
  height: 300px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;

const SlideIndicator = styled.div`
  width: 100%;
  height: 50px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & > div {
    width: 10px;
    height: 10px;
    background-color: #ffffff66;
    border-radius: 50%;
    transition: all 0.3s ease-out;
    cursor: pointer;
    &.active {
      width: 15px;
      height: 15px;
      background-color: white;
    }
  }
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handlePrevSlide = () =>
    setCurrentSlide((currentSlide - 1 + items.length) % items.length);

  const handleNextSlide = () =>
    setCurrentSlide((currentSlide + 1) % items.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevSlide();
    if (e.key === 'ArrowRight') handleNextSlide();
  };

  return (
    <SliderContainer tabIndex={0} onKeyDown={handleKeyDown}>
      <StyledSlider>
        <SliderInner
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((item) => (
            <Slide key={item.label}>
              <img src={item.img} alt={item.label} />
            </Slide>
          ))}
        </SliderInner>
        <SlidePrevButton onClick={handlePrevSlide} />
        <SlideNextButton onClick={handleNextSlide} />
      </StyledSlider>
      <SlideIndicator>
        {items.map((_, index) => (
          <div
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </SlideIndicator>
    </SliderContainer>
  );
};

export { Slider };
