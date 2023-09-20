import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import type {
  BUTTON_MOTIVES,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './consts';

type ButtonSize = (typeof BUTTON_SIZES)[number];
type ButtonShape = (typeof BUTTON_SHAPES)[number];
type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
type ButtonMotive = (typeof BUTTON_MOTIVES)[number];

type ButtonProps
= DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
  size?: ButtonSize;
  shape?: ButtonShape;
  variant?: ButtonVariant;
  motive?: ButtonMotive;
  loading?: boolean;
}

export type {
  ButtonProps,
  ButtonSize,
  ButtonShape,
  ButtonVariant,
  ButtonMotive,
};
