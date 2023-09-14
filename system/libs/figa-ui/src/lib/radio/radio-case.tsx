import styled from 'styled-components';
import c from 'classnames';
import type { RadioCaseProps } from './defs';
import { useId } from 'react';
import { Font } from '../font';
import { center, row, size } from '../shared';
import { tokens } from '../theme-provider';

const Container = styled.div`
  ${row()}

  &, .radio-case-overlay, .radio-case-button {
    cursor: pointer;
  }

  &.reversed {
    flex-direction: row-reverse;

    .radio-case-label {
      margin-right: ${tokens.spacing[150]};
    }
  }

  &:not(.reversed) {
    .radio-case-label {
      margin-left: ${tokens.spacing[150]};
    }
  }

  &.disabled {
    opacity: 0.5;

    &,
    .radio-case-overlay,
    .radio-case-button {
      cursor: not-allowed;
    }
  }

  .radio-case-container {
    .radio-case-input {
      ${size('0px')}
      visibility: hidden;
      position: absolute;
    }

    .radio-case-overlay,
    .radio-case-button {
      border-radius: ${tokens.radius[1000]};
    }

    .radio-case-overlay {
      ${size(tokens.spacing[350])}
      ${center()}
      border: ${tokens.spacing[25]} solid ${(props) =>
        props.theme.radio.borderColor};

      .radio-case-button {
        ${size(tokens.spacing[250])}
        border: none;
        background: none;
      }
    }

    .radio-case-input:checked + .radio-case-overlay {
      border-color: ${(props) => props.theme.radio.active.borderColor};
    }

    .radio-case-input:checked + .radio-case-overlay .radio-case-button {
      background: ${(props) => props.theme.radio.active.bg};
      box-shadow: ${tokens.shadow[50]};
    }
  }
`;

const RadioCase = ({
  className,
  label,
  value,
  name,
  reversed,
  active,
  disabled,
  ...props
}: RadioCaseProps) => {
  const id = useId();
  // @TODO Find solution for wrong type assignment here later.

  return (
    <Container
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      className={c('radio-case', { reversed }, { disabled }, className)}
    >
      <div className="radio-case-container">
        <input
          className="radio-case-input"
          id={id}
          type="radio"
          disabled={disabled}
          checked={active}
          value={value}
          name={name}
        />
        <label className="radio-case-overlay" htmlFor={id}>
          <button className="radio-case-button" />
        </label>
      </div>
      <Font className="radio-case-label" variant="b1">
        {label}
      </Font>
    </Container>
  );
};

export { RadioCase };
