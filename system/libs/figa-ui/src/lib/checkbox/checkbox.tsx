import styled from 'styled-components';

import { CheckboxProps } from './defs';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 300px;
  height: 300px;
`;

const Checkbox: React.FC<CheckboxProps> = () => {
  return <StyledCheckbox />;
};

export { Checkbox };
