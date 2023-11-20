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
  SetContentPayload,
} from './defs';
import {
  useIsomorphicLayoutEffect,
  usePortal,
  useSubject,
} from '@system/figa-hooks';
import { spacing } from '../shared';
import { Box } from '../box';

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

// @TODO:
// 1. Add scroll hide option.
// 2. Add option to click outside
// 3. Add option for empty backdrop to close.
// 4. Fix chromatic snapshot tests.
// 5. Fix too big content scroll trim.

const setContentOffset = ({
  trigger,
  content,
  offsetY,
  fullWidth,
}: SetContentPayload): void => {
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
  const triggerBottomOffset = window.innerHeight - triggerRect.bottom;
  const isExceedingWindowWidth = isTriggerRight
    ? contentRect.width + triggerRightOffset > window.innerWidth
    : contentRect.width + triggerRect.left > window.innerWidth;
  const isExceedingWindowHeight = isTriggerBottom
    ? contentRect.height + triggerBottomOffset + spacing.parse(offsetY) >
      window.innerHeight
    : contentRect.height + triggerRect.top + spacing.parse(offsetY) >
      window.innerHeight;

  if (isExceedingWindowWidth) {
    content.style.width = '96%';
    content.style.maxWidth = 'unset';
    content.style.minWidth = 'unset';
    content.style.left = '2%';
    content.style.overflowX = 'auto';
  }

  if (isExceedingWindowHeight) {
    content.style.height = '96%';
    content.style.maxHeight = 'unset';
    content.style.minHeight = 'unset';
    content.style.top = '2%';
    content.style.overflowY = 'auto';
  }

  if (fullWidth) {
    content.style.maxWidth = 'unset';
    content.style.width = `${triggerRect.width}px`;
    content.style.left = `${triggerRect.left}px`;
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

const Content = ({
  children,
  className,
  fullWidth = false,
  ...props
}: PopoverContentProps) => {
  const { triggerId, contentId, close, closed, offsetY, offsetX, closeMode } =
    usePopover();
  const { render } = usePortal();

  const { emit } = useSubject({ cb: setContentOffset, delay: 10 });

  useIsomorphicLayoutEffect(() => {
    if (closed) return;

    const trigger = document.getElementById(triggerId);
    const content = document.getElementById(contentId);

    if (!trigger || !content) throw Error('Cannot find Trigger or Content');

    const listenContentResize = () => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          entry.target === content &&
            emit({ trigger, content, offsetY, fullWidth });
        }
      });

      resizeObserver.observe(content);

      return resizeObserver;
    };
    const listenWindowResize = () => {
      emit({ trigger, content, offsetY, fullWidth });
    };

    window.addEventListener('resize', listenWindowResize);

    const resizeObserver = listenContentResize();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', listenWindowResize);
    };
  }, [closed, offsetX, offsetY, triggerId, contentId, fullWidth]);

  if (closed) return null;

  if (closeMode === 'backdrop') {
    return render(
      <>
        <div
          aria-label="Dialog backdrop"
          className="backdrop"
          onClick={close}
        />
        <Box
          {...props}
          id={contentId}
          aria-label="Popover content"
          className="popover-content"
        >
          {children}
        </Box>
      </>
    );
  }

  return render(
    <Box
      {...props}
      aria-label="Popover content"
      id={contentId}
      className="popover-content"
    >
      {children}
    </Box>
  );
};

Popover.Trigger = Trigger;
Popover.Content = Content;
Popover.use = usePopover;

export { Popover };
