import { useIsomorphicLayoutEffect } from "../use-isomorphic-layout-effect";

const useScrollHide = <T extends HTMLElement>() => {
  // ...rest of the code is at the top

  // We've replaced "useLayoutEffect" with SSR safe
  // "useIsomorphicLayoutEffect" abstraction.
  useIsomorphicLayoutEffect(() => {
    hide();

    return show;
  }, []);

  // ...rest of the code is at below.
};
