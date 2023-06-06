import { render } from '@testing-library/react';
import { Blackquote } from './blackquote';

describe('Blackquote', () => {
  it('renders content', () => {
    render(<Blackquote title="Example text for testing." />);
  });
});
