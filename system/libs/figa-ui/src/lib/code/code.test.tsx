import { render, screen } from '@testing-library/react';
import { Code } from './Code';

describe('code can be used when: ', () => {
  const id = 'code';
  const children = `<Prelude>
  <M>
    When you compare the documentation and code written by developers, you can
    often find a completely different use for certain things.
  </M>
  <M>
    Technology is evolving and it's really problematic to handle all use cases -
    especially when you are writing libs/frameworks.
  </M>
  <M>
    A typical example of that is useRef() hook which sometimes is used by a
    community in a different way than described in the docs.
  </M>
  <M>Yup, that's right. That hook has more than one use case.</M>
</Prelude>`;

  it('[FRAGILE] when renders root node in component with given id', () => {
    const { container } = render(<Code id={id} children={children} />);

    expect(container.querySelector('#' + id)).toBeTruthy();
  });

  it('renders given code snippet', () => {
    render(<Code id={id} children={children} />);

    screen.getByText(/Technology is evolving/);
  });
});
