import type { CSSProperties } from 'react'

type ScrollHideStyle = Required<Pick<CSSProperties, 'overflow'>>;

const initial_style: ScrollHideStyle = {
  overflow: 'auto',
};

const useScrollHide = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  // We'll store the default scroll value at the beginning. 
  const initialStyle = useRef(initial_style);

  // ...rest of the code is below.
