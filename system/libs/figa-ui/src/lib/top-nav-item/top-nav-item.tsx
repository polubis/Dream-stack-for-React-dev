import styled from 'styled-components';
import type { TopNavItemProps } from './defs';
import { Button } from '../button';
import c from 'classnames';
import { tokens } from '../theme-provider';

const Container = styled.div`
  &.active button.button.size-2.rectangle.ghost.tertiary {
    color: ${(props) => props.theme.font.primary.color};

    svg.icon path {
      fill: ${(props) => props.theme.font.primary.color};
    }
  }

  button.button.size-2.rectangle.ghost.tertiary {
    svg.icon {
      margin-left: ${tokens.spacing[100]};
    }

    &:hover {
      color: ${(props) => props.theme.font.primary.color};

      svg.icon path {
        fill: ${(props) => props.theme.font.primary.color};
      }
    }
  }
`;

const TopNavItem = ({
  children,
  active,
  className,
  ...props
}: TopNavItemProps) => {
  return (
    <Container className={c('top-nav-item', { active }, className)}>
      <Button {...props} size={2} variant="ghost" motive="tertiary">
        {children}
      </Button>
    </Container>
  );
};

export { TopNavItem };
