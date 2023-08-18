const InsideAnyToggleableComponent = () => {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);
  };

  const close = () => {
    setOpened(false);
  };

  const toggle = () => {
    setOpened(!opened);
  };
};