import styled from 'styled-components';
import type { SwitchProps } from './defs';
import c from 'classnames';
import { useId } from 'react';
import { center, row, size } from '../shared';
import { Font } from '../font';
import { tokens } from '../theme-provider';

const Container = styled.div`
  ${row()}

  &.reversed {
    flex-direction: row-reverse;

    & > *:first-child {
      margin-left: ${tokens.spacing[150]};
    }
  }

  &:not(.reversed) {
    & > *:first-child {
      margin-right: ${tokens.spacing[150]};
    }
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;

    .switch-container {
      .switch-button,
      .switch-overlay {
        cursor: not-allowed;
      }
    }
  }

  &:not(.disabled) {
    .switch-container {
      .switch-overlay:active .switch-button {
        width: 60%;
      }
    }
  }

  .switch-container {
    input {
      position: absolute;
      ${size('0px')}
      visibility: hidden;
    }

    .switch-overlay {
      ${center()}
      width: ${tokens.spacing[700]};
      height: ${tokens.spacing[350]};
      cursor: pointer;
      position: relative;
      border-radius: ${tokens.spacing[1000]};
      transition: background-color 0.2s;
      background: ${(props) => props.theme.switch.bg};
    }

    .switch-button {
      content: '';
      ${size(tokens.spacing[250])}
      left: ${tokens.spacing[50]};
      top: 0;
      cursor: pointer;
      bottom: 0;
      margin: auto 0;
      border: none;
      position: absolute;
      border-radius: 45px;
      box-shadow: ${tokens.shadow[50]};
      transition: 0.2s;
      background: ${(props) => props.theme.switch.color};
    }

    .switch-checkbox:checked + .switch-overlay .switch-button {
      left: calc(100% - ${tokens.spacing[50]});
      transform: translateX(-100%);
    }

    .switch-checkbox:checked + .switch-overlay {
      background: ${(props) => props.theme.switch.active.bg};
    }
  }
`;

const Switch = ({
  className,
  label,
  reversed,
  active,
  disabled,
  ...props
}: SwitchProps) => {
  const id = useId();
  // @TODO Find solution for wrong type assignment here later.
  return (
    <Container
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      className={c('switch', { reversed }, { disabled }, className)}
    >
      <div className="switch-container">
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          className="switch-checkbox"
          checked={active}
        />
        <label className="switch-overlay" htmlFor={id}>
          <button className="switch-button" />
        </label>
      </div>
      {label && <Font variant="b2">{label}</Font>}
    </Container>
  );
};

export { Switch };
