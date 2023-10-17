interface SliderProps {
  images: HTMLImageElement[] | File[] | string[];
  autoplay?: boolean;
  speed?: boolean;
  direction?: 'horizontal' | 'vertical';
  loop?: boolean;
}

interface ButtonProps {
  onClick: () => void;
  icon: () => JSX.Element;
}

export type { SliderProps, ButtonProps };
