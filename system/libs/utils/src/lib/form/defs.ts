type ValidatorType =
  | 'required'
  | 'minLength'
  | 'maxLength'
  | 'min'
  | 'max'
  | 'email'
  | 'pascalCase'
  | 'duplicated';

type NullableValidatorType = ValidatorType | null;

type FormTouch<Values extends FormValues> = {
  [K in keyof Values]: boolean;
};

interface FormMetadata<Values extends FormValues> {
  touched: boolean;
  untouched: boolean;
  dirty: boolean;
  pristine: boolean;
  touch: FormTouch<Values>;
}

type FormResult<Values extends FormValues> = {
  [K in keyof Values]: boolean;
};

type FormErrors<Values extends FormValues> = {
  [K in keyof Values]: NullableValidatorType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormValues = Record<string | number | symbol, any>;

type FormState<Values extends FormValues> = {
  values: Values;
  errors: FormErrors<Values>;
  result: FormResult<Values>;
  invalidCount: number;
  validCount: number;
  invalid: boolean;
  valid: boolean;
  progress: number;
  keys: (keyof Values)[];
} & FormMetadata<Values>;

type FormValidatorsSetup<Values extends FormValues> = {
  [K in keyof Values]?: ((
    value: Values[K],
    state: Values
  ) => NullableValidatorType)[];
};

interface FormConfig {
  validateOnInit?: boolean;
}

export type {
  FormValidatorsSetup,
  FormState,
  FormErrors,
  FormResult,
  FormMetadata,
  FormTouch,
  FormConfig,
  NullableValidatorType,
  ValidatorType,
  FormValues,
};
