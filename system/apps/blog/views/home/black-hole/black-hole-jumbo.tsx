import { Font, center, streched } from '@system/figa-ui';
import styled, { keyframes } from 'styled-components';
import { BlackHoleWrapper } from './black-hole-wrapper';

const animateIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.section`
  ${center()}
  /* height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0 auto; */

  /* canvas {
    ${streched('absolute')}
    animation: ${animateIn} 0.4s ease-in-out 0s forwards;
  } */
`;

const BlackHoleJumbo = () => {
  return (
    <Container>
      {/* <BlackHoleWrapper /> */}
      <Font variant="h2">Cosmic dose of knowledge</Font>
    </Container>
  );
};

export { BlackHoleJumbo };
