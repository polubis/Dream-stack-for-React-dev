import type { ReactElement } from 'react';
import { Font } from '../font';
import type { AlertProps, AlertType } from './defs';

import c from 'classnames';
import {
  ErrorIcon,
  type IconProps,
  InfoIcon,
  OkIcon,
  WarnIcon,
  CloseIcon,
} from '../icon';
import { Button } from '../button';
import styled, { css } from 'styled-components';
import { row } from '../shared';
import { tokens } from '../theme-provider';

const setupFilledIcon = (bg: string, color: string) => css`
  background: ${bg};

  .font {
    color: ${color};
  }

  svg.icon path {
    fill: ${color};
  }

  button.button {
    &:hover {
      background: ${bg};
    }

    &:focus,
    &.active {
      outline-color: ${color};
    }
  }
`;

const setupOutlinedIcon = (color: string) => css`
  border-color: ${color};

  .font {
    color: ${color};
  }

  svg.icon path {
    fill: ${color};
  }
`;

const ICONS_MAP: Record<AlertType, (props: IconProps) => ReactElement> = {
  info: InfoIcon,
  ok: OkIcon,
  error: ErrorIcon,
  warn: WarnIcon,
};

const Container = styled.div`
  ${row()}
  padding: ${tokens.spacing[100]} ${tokens.spacing[150]};
  border-radius: ${tokens.radius[50]};
  border: ${tokens.spacing[25]} solid transparent;

  .button {
    margin-left: ${tokens.spacing[100]};
  }

  .icon {
    flex-shrink: 0;
  }

  .font {
    padding-left: ${tokens.spacing[100]};
    margin-right: auto;
  }

  &.filled {
    box-shadow: ${tokens.shadow[50]};

    &.info {
      ${(props) =>
        setupFilledIcon(
          props.theme.alert.filled.info.bg,
          props.theme.alert.filled.info.color
        )}
    }

    &.ok {
      ${(props) =>
        setupFilledIcon(
          props.theme.alert.filled.ok.bg,
          props.theme.alert.filled.ok.color
        )}
    }

    &.error {
      ${(props) =>
        setupFilledIcon(
          props.theme.alert.filled.error.bg,
          props.theme.alert.filled.error.color
        )}
    }

    &.warn {
      ${(props) =>
        setupFilledIcon(
          props.theme.alert.filled.warn.bg,
          props.theme.alert.filled.warn.color
        )}
    }
  }

  &.outlined {
    &.info {
      ${(props) => setupOutlinedIcon(props.theme.alert.outlined.info.color)}
    }

    &.ok {
      ${(props) => setupOutlinedIcon(props.theme.alert.outlined.ok.color)}
    }

    &.error {
      ${(props) => setupOutlinedIcon(props.theme.alert.outlined.error.color)}
    }

    &.warn {
      ${(props) => setupOutlinedIcon(props.theme.alert.outlined.warn.color)}
    }
  }
`;

const Alert = ({
  className,
  type = 'info',
  variant = 'filled',
  children,
  maxWidth,
  trim,
  onClose,
}: AlertProps) => {
  const Icon = ICONS_MAP[type];

  return (
    <Container
      className={c('alert', type, variant, className)}
      style={{
        maxWidth,
      }}
    >
      <Icon />
      <Font variant="b2" trim={trim}>
        {children}
      </Font>
      {onClose && (
        <Button
          size={1}
          variant="ghost"
          motive="tertiary"
          shape="rounded"
          aria-label="Close alert"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      )}
    </Container>
  );
};

export { Alert };
