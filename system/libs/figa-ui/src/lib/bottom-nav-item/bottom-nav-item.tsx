import styled from 'styled-components';
import type { BottomNavItemProps } from './defs';
import { Button } from '../button';
import { Font } from '../font';
import { tokens } from '../theme-provider';
import { center } from '../shared';
import c from 'classnames';

const Container = styled.div`
  &.active button.button {
    background: ${(props) => props.theme.button.filled.secondary.bg};

    .font {
      color: ${(props) => props.theme.button.filled.secondary.color};
    }

    svg.icon path {
      fill: ${(props) => props.theme.button.filled.secondary.color};
    }

    &:not(.disabled):hover {
      background: ${(props) => props.theme.button.filled.secondary.bg};
    }
  }

  button.button.size-3.rectangle.ghost.tertiary {
    ${center('column')}
    width: ${tokens.spacing[800]};

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
