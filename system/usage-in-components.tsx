import { useIsomorphicLayoutEffect, useSSRSafeEffect } from './fix-idea';

const Modal = () => {
  useIsomorphicLayoutEffect(() => {
    // This code will not execute on server side
    // and there will be no warning prompted.
  }, []);

  useSSRSafeEffect(() => {
    // This code will not execute on server side
    // and there will be no warning prompted.
  }, []);
};
