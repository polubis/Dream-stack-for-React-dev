const useScrollHide = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  // Simple function to determine the strategy to use.
  const getElement = (): HTMLElement => ref.current ?? document.body;

  const show = () => {};
};
