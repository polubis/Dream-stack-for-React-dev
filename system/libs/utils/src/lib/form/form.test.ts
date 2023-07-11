import { form } from './form';
import { max, min, minLength, maxLength, required } from './validators';

describe('Form can be used when: ', () => {
  interface ExampleForm {
    username: string;
    password: string;
    code: number;
    flags: boolean[];
  }

  it('initializes state', () => {
    const { init } = form<ExampleForm>()({
      username: [required],
      password: [minLength(2)],
      code: [max(2)],
      flags: [],
    });

    expect(
      init({
        username: '',
        password: '',
        code: 1,
        flags: [true, false],
      })
    ).toMatchSnapshot();
  });

  it('allows to change field value and validates', () => {
    const { init, set } = form<ExampleForm>()({
      username: [required],
      password: [minLength(2)],
      code: [max(2)],
      flags: [],
    });

    const state = init({
      username: '',
      password: '',
      code: 3,
      flags: [true, false],
    });

    expect(
      set(state)({
        username: '',
        password: 'd',
        code: 4,
      })
    ).toMatchSnapshot();
  });

  it('validates on init if passed in configuration', () => {
    const { init } = form<ExampleForm>({ validateOnInit: true })({
      username: [required],
      password: [minLength(2)],
      code: [max(2)],
      flags: [],
    });

    expect(
      init({
        username: '',
        password: '',
        code: 3,
        flags: [true, false],
      })
    ).toMatchSnapshot();
  });

  it('allows to confirm and validates', () => {
    const { init, confirm } = form<ExampleForm>()({
      username: [required],
      password: [minLength(2)],
      code: [max(2)],
      flags: [],
    });

    const state = init({
      username: '',
      password: '',
      code: 3,
      flags: [true, false],
    });

    expect(confirm(state)).toMatchSnapshot();
  });

  it('converts values to form data format', () => {
    const { init, toFormData } = form<ExampleForm>()({
      username: [required],
      password: [minLength(2)],
      code: [max(2)],
      flags: [],
    });

    const state = init({
      username: 'username',
      password: '',
      code: 3,
      flags: [true, false],
    });

    expect(toFormData(state).getAll('username')).toEqual(['username']);
    expect(toFormData(state).get('username')).toEqual('username');
  });
});
