import styled from 'styled-components';
import type { TopNavItemProps } from './defs';
import { Button } from '../button';
import c from 'classnames';

const Container = styled.div``;

const TopNavItem = ({ text, active, className }: TopNavItemProps) => {
  return (
    <Container className={c('top-nav-item', { active }, className)}>
      <Button variant="ghost" motive="tertiary">
        {text}
      </Button>
    </Container>
  );
};

export { TopNavItem };
