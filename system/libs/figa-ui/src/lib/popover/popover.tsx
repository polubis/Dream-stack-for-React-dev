// Creates a context per usage.
// 1. When resize of the window - the update of content is added.
// 2. When change content inside happen, the content position is updated.

import { createContext, useContext, useMemo, useState } from 'react';
import type {
  PopoverContentProps,
  PopoverContext,
  PopoverProps,
  PopoverTriggerProps,
} from './defs';
import styled from 'styled-components';
import c from 'classnames';
import { usePortal } from '@system/figa-hooks';
import { slideIn } from '../shared';
import { tokens } from '../theme-provider';
{
  /* <Popover
    closeMode='outside' | 'backdrop' | 'own'
    offsetY={150}
    offsetX={150}
>
  <Popover.Trigger></Popover.Trigger>
  <Popover.Content

  ></Popover.Content>
</Popover>; */
}

const Context = createContext<PopoverContext | null>(null);

const Container = styled.div`
  &-content {
    ${slideIn(tokens.spacing[0], tokens.spacing[0])};
    position: fixed;
    z-index: ${tokens.z[1000]};
  }
`;

const Popover = ({
  className,
  closeMode,
  offsetX,
  offsetY,
  children,
  openOnInit = false,
}: PopoverProps) => {
  const [opened, setOpened] = useState(openOnInit);

  const value = useMemo(
    () => ({
      closeMode,
      offsetX,
      offsetY,
      opened,
      closed: !opened,
      open: () => {
        setOpened(true);
      },
      close: () => {
        setOpened(true);
      },
      toggle: () => {
        setOpened((opened) => !opened);
      },
    }),
    [closeMode, offsetX, offsetY, opened]
  );

  return (
    <Container className={c('popover', className)}>
      <Context.Provider value={value}>{children}</Context.Provider>
    </Container>
  );
};

const usePopover = () => {
  const ctx = useContext(Context);

  if (!ctx) throw Error('You need to wrap your components with <Popover>');

  return ctx;
};

const Trigger = ({ children }: PopoverTriggerProps) => {
  return <div className="popover-trigger">{children}</div>;
};

const Content = ({ children }: PopoverContentProps) => {
  const { closed } = usePopover();
  const { render } = usePortal();

  if (closed) return null;

  return render(<div className="popover-content">{children}</div>);
};

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.use = usePopover;

export { Popover };
