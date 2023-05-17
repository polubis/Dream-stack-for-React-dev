import { render, screen, waitFor } from '@testing-library/react';

import { ProgressCircle } from './progress-circle';

describe('Progress works when', () => {
  it('[FRAGILE] renders with default properties setup', () => {
    const { asFragment } = render(<ProgressCircle />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('uses default text', () => {
    render(<ProgressCircle />);

    screen.getByText('5.0s');
  });

  it('allows to pass custom children text', () => {
    render(<ProgressCircle children={(ms) => ms + 'seconds'} />);

    screen.getByText('5000seconds');
  });

  it('[FRAGILE] assigns classes', () => {
    const { container } = render(<ProgressCircle />);

    expect(container.querySelectorAll('.progress-circle').length).toBe(1);
    expect(container.querySelectorAll('.progress-circle-front').length).toBe(1);
    expect(container.querySelectorAll('.progress-circle-text').length).toBe(1);
  });

  it('parent component can react when timer ends', async () => {
    const onEndSpy = jest.fn();

    render(<ProgressCircle onEnd={onEndSpy} ms={500} />);

    await waitFor(() => {
      expect(onEndSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('interval is cleaned when unmounts', () => {
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval');

    const { unmount } = render(<ProgressCircle ms={1000} />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
    expect(clearIntervalSpy).toHaveBeenCalledWith(expect.any(Number));
  });

  it('there is a option to change timer starting time', async () => {
    render(<ProgressCircle ms={500} />);

    await waitFor(() => {
      screen.getByText('0.0s');
    });
  });

  it('[FRAGILE] can change timer size', () => {
    const { asFragment } = render(<ProgressCircle size={120} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to assign custom class', () => {
    const { container } = render(<ProgressCircle className="my-class" />);

    expect(container.querySelectorAll('.progress-circle.my-class').length).toBe(
      1
    );
  });
});
