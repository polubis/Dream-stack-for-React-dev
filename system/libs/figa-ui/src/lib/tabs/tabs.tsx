import styled from 'styled-components';
import type { TabsProps } from './defs';
import c from 'classnames';
import { row } from '../shared';
import { tokens } from '../theme-provider';

const Container = styled.nav`
  ${row()}
  overflow-y: auto;

  & > * {
    &:first-child {
      border-top-left-radius: ${tokens.radius[50]};
      border-bottom-left-radius: ${tokens.radius[50]};
    }

    &:last-child {
      border-top-right-radius: ${tokens.radius[50]};
      border-bottom-right-radius: ${tokens.radius[50]};
    }
  }
`;

const Tabs = ({ className, ...props }: TabsProps) => {
  // @TODO Figure out how to improve types here with styled-components.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Container {...(props as any)} className={c('tabs', className)} />;
};

export { Tabs };
