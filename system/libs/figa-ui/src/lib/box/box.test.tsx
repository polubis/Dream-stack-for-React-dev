import { render } from '@testing-library/react';

import { Box } from './box';

describe('User is able to use box when', () => {
  it('[FRAGILE] renders with default setup', () => {
    const { asFragment } = render(
      <Box>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns orientation classes', () => {
    const { asFragment } = render(
      <Box orientation="center-column">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] creates space', () => {
    const { asFragment } = render(
      <Box orientation="center-row" spacing={[100, 150, 200]}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to use padding and assigns custom classes', () => {
    const { asFragment } = render(
      <Box
        className="my-class"
        orientation="column"
        padding={[100, 150, 200, 250]}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
