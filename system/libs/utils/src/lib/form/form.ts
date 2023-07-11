import type {
  FormValidatorsSetup,
  FormErrors,
  FormMetadata,
  FormResult,
  FormState,
  FormTouch,
  FormValues,
  FormConfig,
} from './defs';

const createFormState = <
  Values extends FormValues,
  Validators extends FormValidatorsSetup<Values>
>(
  currentValues: Values,
  newValues: Values,
  validators: Validators,
  meta: FormMetadata<Values>
): FormState<Values> => {
  let invalid = false;
  const errors = {} as FormErrors<Values>;
  const result = {} as FormResult<Values>;
  let invalidCount = 0;
  const keys = Object.keys(newValues) as (keyof Values)[];

  for (const key in newValues) {
    const fns = validators[key] ?? [];

    if (fns.length > 0) {
      for (let i = 0; i < fns.length; i++) {
        const validator = fns[i];
        errors[key] = validator(newValues[key], currentValues);
        result[key] = !!errors[key];

        if (result[key]) {
          invalid = true;
          invalidCount++;
          break;
        }
      }
    } else {
      errors[key] = null;
      result[key] = false;
    }
  }

  const validCount = keys.length - invalidCount;

  return {
    errors,
    values: newValues,
    invalid,
    keys,
    valid: !invalid,
    result,
    invalidCount,
    validCount,
    progress: (validCount / keys.length) * 100,
    ...meta,
  };
};

const init = <Values extends FormValues>(values: Values): FormState<Values> => {
  const keys = Object.keys(values) as (keyof Values)[];

  return {
    values,
    touched: false,
    untouched: true,
    pristine: true,
    dirty: false,
    keys,
    result: keys.reduce<FormResult<Values>>((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as FormResult<Values>),
    errors: keys.reduce<FormErrors<Values>>((acc, key) => {
      acc[key] = null;
      return acc;
    }, {} as FormErrors<Values>),
    touch: keys.reduce<FormTouch<Values>>((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as FormTouch<Values>),
    progress: 0,
    valid: true,
    invalid: false,
    invalidCount: 0,
    validCount: keys.length,
  };
};

const form =
  <Values extends FormValues>(config?: FormConfig) =>
  <Validators extends FormValidatorsSetup<Values>>(validators: Validators) => {
    const set =
      (state: FormState<Values>) =>
      (newValues: Partial<Values>): FormState<Values> => {
        const keys = Object.keys(newValues) as Partial<keyof Values>[];

        return createFormState<Values, Validators>(
          state.values,
          {
            ...state.values,
            ...newValues,
          },
          validators,
          {
            pristine: state.pristine,
            touched: true,
            untouched: false,
            dirty: state.dirty,
            touch: {
              ...state.touch,
              ...keys.reduce<Partial<FormTouch<Values>>>((acc, key) => {
                acc[key] = true;
                return acc;
              }, {}),
            },
          }
        );
      };
    return {
      init: (values: Values) =>
        config?.validateOnInit ? set(init(values))({}) : init(values),
      set,
      confirm: (state: FormState<Values>): FormState<Values> => {
        return createFormState<Values, Validators>(
          state.values,
          state.values,
          validators,
          {
            dirty: true,
            pristine: false,
            touched: state.touched,
            untouched: state.untouched,
            touch: { ...state.touch },
          }
        );
      },
      toFormData: (state: FormState<Values>): FormData => {
        const formData = new FormData();

        Object.entries(state.values).forEach(([key, value]) => {
          formData.append(key, value);
        });

        return formData;
      },
    };
  };

export { form };
