const Modal = () => {
  // Automatically hides scroll for the window.
  // First skipped value is a "ref".
  // In context of window - not needed.
  const [, hide, show] = useScrollHide();

  const handleClick = (): void => {
    // You may trigger hide() or show() in any moment you want.
    // With this setup, you'll maintain the window object scroll.
    hide();
    show();
  };

  return (
    <div>
      {/* When this component will be mounted, the window scroll is hidden. */}
    </div>
  );
};
