import { fireEvent, render, screen } from '@testing-library/react';

import { IntroSection } from './intro-section';
import type { IntroSectionProps } from './defs';

describe('User is able to user intro section when', () => {
  const introSectionFixture = (props: Partial<IntroSectionProps> = {}) => {
    const result = render(
      <IntroSection
        header="header"
        description="description"
        action="action"
        onConfirm={jest.fn()}
        {...props}
      />
    );

    return result;
  };

  it('head, description and title of interactive element are displayed', () => {
    introSectionFixture();

    screen.getByText(/header/);
    screen.getByText(/description/);
    screen.getByText(/action/);
  });

  it('when confirmation can be clicked', () => {
    const onConfirmSpy = jest.fn();

    introSectionFixture({ onConfirm: onConfirmSpy });

    fireEvent.click(screen.getByText(/action/));

    expect(onConfirmSpy).toHaveBeenCalledTimes(1);
  });

  it('[FRAGILE] classes are assigned and box component is used', () => {
    const { asFragment } = introSectionFixture();

    expect(asFragment()).toMatchSnapshot();
  });
});
