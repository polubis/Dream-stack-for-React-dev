const getElement = (): HTMLElement => ref.current ?? document.body;

const show = () => {
  const element = getElement();
  const style = initialStyle.current;

  element.style.overflow = style.overflow;
};

const hide = () => {
  const element = getElement();
  initialStyle.current.overflow = element.style.overflow;

  element.style.overflow = "hidden";
};
