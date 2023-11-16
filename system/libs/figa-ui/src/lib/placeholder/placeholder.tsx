import styled, { keyframes } from 'styled-components';
import { Image } from '../image';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PlaceholderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  .loader {
    width: 24px;
    height: 24px;
    border: 4px solid #808080;
    border-top: 4px solid #000;
    border-radius: 50%;
    animation: ${spinAnimation} 1s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
  }
  .logo {
    width: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Placeholder() {
  return (
    <PlaceholderWrapper>
      <div className="loader"></div>
      <Image className="logo" alt="logo" src="logo" />
    </PlaceholderWrapper>
  );
}

export default Placeholder;
