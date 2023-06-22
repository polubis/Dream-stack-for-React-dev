import { render, screen } from '@testing-library/react';
import { Loader } from './loader';
import type { LoaderProps } from './defs';

describe('Loader can be used when', () => {

  const loaderVariants = [
    { variant: '1', class: 'loader-1' },
    { variant: '2', class: 'loader-2' },
    { variant: '3', class: 'loader-3' },
    { variant: '4', class: 'loader-4' },
  ];

  it('[FRAGILE] renders with default setup', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] render all variants', async () => {
    loaderVariants.forEach(el => {
      const { container } = render(<Loader variant={el.variant as LoaderProps['variant']} data-testid={`loader-test-v${el.variant}`} />);
      const childElement = container.querySelector(`.${el.class}`);
      expect(childElement).toBeTruthy();
    })
  });  
 
  it('[FRAGILE] allows to pass classes', () => {
    render(
      <Loader className="class1 class2" data-testid="loader-test" />
    );
    const loader = screen.getByTestId('loader-test');
    expect(loader.className).toContain('class1 class2');
  });

  it('allows to pass custom caption', () => {
    render(<Loader>Test caption</Loader>);
    screen.getByText(/Test caption/);
  });  

});