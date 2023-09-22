interface SliderProps {
  images: HTMLImageElement[] | File[] | string[];
  autoplay?: boolean;
  speed?: boolean;
  direction?: 'horizontal' | 'vertical';
  loop?: boolean;
}

export type { SliderProps };
