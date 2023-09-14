const AnyComponent = () => {
  useScrollHide(); // Hides window scroll when component mounted.

  // Hides window scroll when component mounted.
  const [, hide, show] = useScrollHide();

  // Hides div scroll when component mounted.
  const [ref, hide, show] = useScrollHide<HTMLDivElement>();

  const handleClick = () => {
    // Allows to hide/show scroll programatically.
    show();
    // or
    hide();
  };

  return <div ref={ref}></div>;
};
