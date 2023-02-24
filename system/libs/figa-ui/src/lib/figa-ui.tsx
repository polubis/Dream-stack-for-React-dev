import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FigaUiProps {}

const StyledFigaUi = styled.div`
  color: pink;
`;

export function FigaUi(props: FigaUiProps) {
  return (
    <StyledFigaUi>
      <h1>Welcome to FigaUi!</h1>
    </StyledFigaUi>
  );
}

export default FigaUi;
