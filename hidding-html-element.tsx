const BigList = () => {
  // Scroll for big list will be hidden when
  // this component mounts.
  const [ref, hide, show] = useScrollHide<HTMLDivElement>();

  const handleClick = (): void => {
    // You may trigger hide() or show() in any moment you want.
    // With this setup, you'll maintain the window object scroll.
    hide();
    show();
  };

  return (
    <div ref={ref} style={{ height: "10000px" }}>
      {/* Big list with scroll. */}
    </div>
  );
};
