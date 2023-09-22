import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';

import type { SliderProps } from './defs';
import { items } from './items';

const StyledSwiper = styled(Swiper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 300px;
  border: 1px solid white;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Slider = () => {
  return (
    <StyledSwiper>
      {items.map((item) => (
        <SwiperSlide key={item.label}>
          <StyledImage src={item.img} alt={item.label} />
        </SwiperSlide>
      ))}
      <SlidePrevButton />
      <SlideNextButton />
    </StyledSwiper>
  );
};

export { Slider };
