import { render } from '@testing-library/react';
import { Blackquote } from './blackquote';

describe('There is option to use blackquote when', () => {
  it('renders content', () => {
    render(<Blackquote title="Example text for testing." />);
  });
});
