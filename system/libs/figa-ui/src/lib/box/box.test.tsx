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

  it('[FRAGILE] allows to set maximum width', () => {
    const { asFragment } = render(
      <Box maxWidth="350px" margin="auto">
        <div>1</div>
      </Box>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] creates space for rows', () => {
    const { asFragment } = render(
      <Box orientation="center-row" spacing={[100, 150, 200]}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] creates space for columns', () => {
    const { asFragment } = render(
      <Box spacing={[100, 150, 200]}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('applies margins', () => {
    it('[FRAGILE] for auto', () => {
      const { container } = render(
        <Box orientation="column" margin="auto">
          <div>1</div>
        </Box>
      );

      expect(
        (container.querySelector('.box') as HTMLElement).style.margin
      ).toBe('auto');
    });

    it('[FRAGILE] for mixed setup', () => {
      const { container } = render(
        <Box orientation="column" margin={['auto', 50, 50, 50]}>
          <div>1</div>
        </Box>
      );

      expect(
        (container.querySelector('.box') as HTMLElement).style.margin
      ).toBe('auto 4px 4px 4px');
    });
  });

  it('[FRAGILE] skipps margins apply when not passed', () => {
    const { container } = render(
      <Box orientation="column">
        <div>1</div>
      </Box>
    );

    expect((container.querySelector('.box') as HTMLElement).style.margin).toBe(
      ''
    );
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
