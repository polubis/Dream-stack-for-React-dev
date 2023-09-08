import { render } from '@testing-library/react';
import { Detail } from './detail';

describe('Detail can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <Detail
        className="my-class"
        label="My custom label"
        value="My custom value"
      />
    );

    const component = container.querySelector('.detail');

    expect(component?.className).toContain('detail my-class');
    expect(asFragment()).toMatchSnapshot();
  });
});
