import styled from 'styled-components';
import type { BottomNavItemProps } from './defs';
import { Button } from '../button';
import { Font } from '../font';
import { tokens } from '../theme-provider';
import { center } from '../shared';
import c from 'classnames';

const Container = styled.div`
  &.active {
    background: ${(props) => props.theme.button.ghost.hoverBg};
  }

  .button {
    ${center('column')}

    .font {
      margin-top: ${tokens.spacing[50]};
    }
  }
`;

const BottomNavItem = ({
  className,
  active,
  icon,
  text,
  ...props
}: BottomNavItemProps) => {
  return (
    <Container className={c('bottom-nav-item', { active }, className)}>
      <Button {...props} variant="ghost" motive="tertiary">
        {icon}
        <Font variant="b3">{text}</Font>
      </Button>
    </Container>
  );
};

export { BottomNavItem };
