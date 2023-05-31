import { renderHook } from '@testing-library/react';
import { useStepper } from './use-stepper';
import { act } from '@testing-library/react-hooks';

describe('Step can be changed when', () => {
  const steps = [
    { key: '1', label: 'My label', Component: (props: { id: string }) => null },
    { key: '2', Component: (props: { number: string }) => <div>Text</div> },
    { key: '3', Component: () => null },
  ] as const;

  type Steps = typeof steps;
  type UnionOfSteps = Steps[number];

  it('starts with given step', () => {
    const { result } = renderHook(() =>
      useStepper<UnionOfSteps, Steps>('1', steps)
    );

    expect(result.current[0]).toEqual(steps[0]);
  });

  it('allows to set specific step', () => {
    const { result } = renderHook(() =>
      useStepper<UnionOfSteps, Steps>('1', steps)
    );

    act(() => {
      result.current[1].set('2');
    });

    expect(result.current[0]).toEqual(steps[1]);
  });

  it('goes to next step', () => {
    const { result } = renderHook(() =>
      useStepper<UnionOfSteps, Steps>('1', steps)
    );

    act(() => {
      result.current[1].next();
    });

    expect(result.current[0]).toEqual(steps[1]);
  });

  it('goes to previous step', () => {
    const { result } = renderHook(() =>
      useStepper<UnionOfSteps, Steps>('2', steps)
    );

    act(() => {
      result.current[1].previous();
    });

    expect(result.current[0]).toEqual(steps[0]);
  });

  it('goes to first step if out of range after next attempt', () => {
    const { result } = renderHook(() =>
      useStepper<UnionOfSteps, Steps>('3', steps)
    );

    act(() => {
      result.current[1].next();
    });

    expect(result.current[0]).toEqual(steps[0]);
  });

  it('goes to last step if out of range after previous attempt', () => {
    const { result } = renderHook(() =>
      useStepper<UnionOfSteps, Steps>('1', steps)
    );

    act(() => {
      result.current[1].previous();
    });

    expect(result.current[0]).toEqual(steps[2]);
  });
});
