import { useRef } from "react";

const useScrollHide = <T extends HTMLElement>() => {
  // Ref will be used to track HTML elements.
  // Initially it's "null", because component needs
  // to be mounted firstly...
  const ref = useRef<T>(null);

  // Shows scroll.
  const show = () => {};

  // Hides scroll.
  const hide = () => {};

  // The API to consume by component or other hook.
  return [ref, hide, show];
};

export { useScrollHide };
