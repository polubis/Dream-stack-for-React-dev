import type { ReactElement } from 'react';
import { Font } from '../font';
import type { AlertProps, AlertType } from './defs';

import c from 'classnames';
import { ErrorIcon, type IconProps, InfoIcon, OkIcon, WarnIcon } from '../icon';

const ICONS_MAP: Record<AlertType, (props: IconProps) => ReactElement> = {
  info: InfoIcon,
  ok: OkIcon,
  error: ErrorIcon,
  warn: WarnIcon,
};

const Alert = ({
  className,
  type = 'info',
  variant = 'filled',
  children,
  fixed,
  maxWidth,
  trimmed,
  style,
  ...props
}: AlertProps) => {
  const Icon = ICONS_MAP[type];

  return (
    <div
      className={c('alert', type, variant, { fixed }, { trimmed }, className)}
      style={{
        ...style,
        maxWidth,
      }}
      {...props}
    >
      <Font variant="b2">{children}</Font>
      <Icon />
    </div>
  );
};

export { Alert };
