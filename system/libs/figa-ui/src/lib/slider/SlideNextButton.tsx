import { useSwiper } from 'swiper/react';
import styled from 'styled-components';
import { BsChevronCompactRight } from 'react-icons/bs';

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 8%;
  margin: 0;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: 1;
  & > svg {
    color: #aaa;
    transition: 0.1s;
  }
  &:hover > svg {
    color: white;
  }
`;

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <StyledButton onClick={() => swiper.slideNext()}>
      <BsChevronCompactRight size={30} />
    </StyledButton>
  );
};

export default SlideNextButton;
