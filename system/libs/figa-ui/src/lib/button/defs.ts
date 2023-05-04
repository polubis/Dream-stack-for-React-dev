import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import {
  BUTTON_MOTIVES,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './consts';

type ButtonSize = (typeof BUTTON_SIZES)[number];
type ButtonShape = (typeof BUTTON_SHAPES)[number];
type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
type ButtonMotive = (typeof BUTTON_MOTIVES)[number];

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: ButtonSize;
  shape?: ButtonShape;
  variant?: ButtonVariant;
  motive?: ButtonMotive;
}

export type {
  ButtonProps,
  ButtonSize,
  ButtonShape,
  ButtonVariant,
  ButtonMotive,
};
