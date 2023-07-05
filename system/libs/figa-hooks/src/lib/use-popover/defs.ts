import type { RefObject } from 'react';
import type { UseToggleReturn } from '../use-toggle';

interface UsePopoverReturn<
  T extends HTMLElement,
  C extends HTMLElement,
  P extends HTMLElement
> {
  popoverRef: RefObject<P>;
  triggerRef: RefObject<T>;
  contentRef: RefObject<C>;
  popover: UseToggleReturn;
}

export type { UsePopoverReturn };
