const useScrollHide = <T extends HTMLElement>() => {
  const show = () => {};

  const hide = () => {};

  useEffect(() => {
    hide();

    return () => {
      show();
    };
  }, []);
};
