import type { RefObject } from 'react';
import type { ToggleReturn } from '../use-toggle';

interface UsePopoverReturn<
  T extends HTMLElement,
  C extends HTMLElement,
  P extends HTMLElement
> {
  popoverRef: RefObject<P>;
  triggerRef: RefObject<T>;
  contentRef: RefObject<C>;
  popover: ToggleReturn;
}

export type { UsePopoverReturn };
