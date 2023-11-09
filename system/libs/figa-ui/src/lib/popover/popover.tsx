import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from 'react';
import type {
  PopoverContentProps,
  PopoverContext,
  PopoverProps,
  PopoverTriggerProps,
} from './defs';
import { useIsomorphicLayoutEffect, usePortal } from '@system/figa-hooks';
import { spacing } from '../shared';
import { Box } from '../box';
import type { SpacingKey } from '../theme-provider';

const Context = createContext<PopoverContext | null>(null);

const Popover = ({
  closeMode = 'own',
  offsetX = 0,
  offsetY = 150,
  children,
  openOnInit = false,
}: PopoverProps) => {
  const id = useId();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    openOnInit && setOpened(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
      closeMode,
      offsetX,
      offsetY,
      opened,
      triggerId: `popover-trigger-${id}`,
      contentId: `popover-content-${id}`,
      closed: !opened,
      open: () => {
        setOpened(true);
      },
      close: () => {
        setOpened(false);
      },
      toggle: () => {
        setOpened((opened) => !opened);
      },
    }),
    [closeMode, offsetX, offsetY, opened, id]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const setContentOffset = (
  trigger: HTMLElement,
  content: HTMLElement,
  offsetY: SpacingKey
): void => {
  const triggerRect = trigger.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();

  const isTriggerRight = triggerRect.left >= window.innerWidth / 2;
  const isTriggerBottom = triggerRect.top >= window.innerHeight / 2;

  content.style.left = `${
    isTriggerRight
      ? triggerRect.left - contentRect.width + triggerRect.width
      : triggerRect.left
  }px`;
  content.style.top = `${
    isTriggerBottom
      ? triggerRect.top - contentRect.height - spacing.parse(offsetY)
      : triggerRect.top + triggerRect.height + spacing.parse(offsetY)
  }px`;

  const triggerRightOffset = window.innerWidth - triggerRect.right;
  const isExceedingWindowWidth = isTriggerRight
    ? contentRect.width + triggerRightOffset > window.innerWidth
    : contentRect.width + triggerRect.left > window.innerWidth;

  if (isExceedingWindowWidth) {
    content.style.width = '96%';
    content.style.maxWidth = 'unset';
    content.style.minWidth = 'unset';
    content.style.left = '2%';
  }
};

const usePopover = () => {
  const ctx = useContext(Context);

  if (!ctx) throw Error('You need to wrap your components with <Popover>');

  return ctx;
};

const Trigger = ({ children }: PopoverTriggerProps) => {
  const { triggerId } = usePopover();

  return (
    <div id={triggerId} className="popover-trigger">
      {children}
    </div>
  );
};

const Content = ({ children, className, ...props }: PopoverContentProps) => {
  const { triggerId, contentId, close, closed, offsetY, offsetX, closeMode } =
    usePopover();
  const { render } = usePortal();

  useIsomorphicLayoutEffect(() => {
    if (closed) return;

    const trigger = document.getElementById(triggerId);
    const content = document.getElementById(contentId);

    if (!trigger || !content) throw Error('Cannot find Trigger or Content');

    const listenContentResize = () => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          entry.target === content &&
            setContentOffset(trigger, content, offsetY);
        }
      });

      resizeObserver.observe(content);

      return resizeObserver;
    };
    const listenWindowResize = () => {
      setContentOffset(trigger, content, offsetY);
    };

    window.addEventListener('resize', listenWindowResize);

    const resizeObserver = listenContentResize();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', listenWindowResize);
    };
  }, [closed, offsetX, offsetY, triggerId, contentId]);

  if (closed) return null;

  if (closeMode === 'backdrop') {
    return render(
      <>
        <div className="backdrop popover-backdrop" onClick={close} />
        <Box {...props} id={contentId} className="popover-content">
          {children}
        </Box>
      </>
    );
  }

  return render(
    <Box {...props} id={contentId} className="popover-content">
      {children}
    </Box>
  );
};

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.use = usePopover;

export { Popover };
