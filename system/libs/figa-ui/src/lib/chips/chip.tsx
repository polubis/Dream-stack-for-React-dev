import styled from 'styled-components';
import type { ChipProps } from './defs';
import c from 'classnames';
import { tokens } from '../theme-provider';
import { font } from '../shared';

const Container = styled.button`
  ${font('1.4rem', '0.1px', 'LexendMedium', 500)}
  border-radius: ${tokens.radius[50]};
  padding: ${tokens.spacing[100]};
  cursor: pointer;
  background: none;
  color: ${(props) => props.theme.chips.color};
  border: ${tokens.spacing[25]} solid
    ${(props) => props.theme.chips.borderColor};
  transition: 0.2s all ease-in-out;

  &:hover {
    opacity: 0.84;
  }

  &.active {
    border-color: ${(props) => props.theme.chips.active.borderColor};
    color: ${(props) => props.theme.chips.active.color};
  }
`;

const Chip = ({ className, active, ...props }: ChipProps) => {
  // @TODO Find solution for wrong type assignment here later.
  return (
    <Container
      className={c('chip', { active }, className)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    />
  );
};

export { Chip };
