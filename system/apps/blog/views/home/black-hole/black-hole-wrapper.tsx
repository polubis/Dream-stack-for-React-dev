import { useElementSize } from '@system/figa-hooks';
import { isLUp, isMUp } from '@system/figa-ui';
import React, { useMemo } from 'react';
import type { BlackHoleProps } from './defs';
import { BlackHole } from './black-hole';

const BlackHoleWrapper = () => {
  const { state } = useElementSize();

  const props = useMemo((): BlackHoleProps & { key: string } => {
    const id = 'hole';

    if (state.status === 'undetected' || state.status === 'unsupported') {
      return {
        id,
        key: 'undetected',
        height: 0,
        width: 0,
        radius: 0,
      };
    }

    const { width } = state;
    const key = width.toString();

    if (isLUp(width)) {
      return {
        id,
        key,
        height: 800,
        width: 800,
        radius: 90,
      };
    }

    if (isMUp(width)) {
      return {
        id,
        key,
        height: 600,
        width: 600,
        radius: 90,
      };
    }

    return {
      id,
      key,
      height: 280,
      width: 280,
      radius: 40,
    };
  }, [state]);

  return <BlackHole {...props} />;
};

export { BlackHoleWrapper };
