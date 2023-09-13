import styled from 'styled-components';
import type { TabProps } from './defs';
import c from 'classnames';
import { tokens } from '../theme-provider';
import { Font } from '../font';

const Container = styled.button`
  border: none;
  padding: ${tokens.spacing[150]};
  flex: 1 1 0px;
  position: relative;
  cursor: pointer;
  background: ${(props) => props.theme.tabs.filled.bg};
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    height: 2px;
    transition: 0.42s all ease-in-out;
  }

  &:hover:not(:disabled) {
    opacity: 0.88;
  }

  &:hover:not(:disabled),
  &.active:not(:disabled) {
    &::after {
      transform: translateX(0);
      background: ${(props) => props.theme.tabs.filled.active.borderColor};
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const Tab = ({ className, children, active, ...props }: TabProps) => {
  return (
    // @TODO Figure out how to improve types here with styled-components.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Container {...(props as any)} className={c('tab', { active }, className)}>
      <Font variant="b1">{children}</Font>
    </Container>
  );
};

export { Tab };
