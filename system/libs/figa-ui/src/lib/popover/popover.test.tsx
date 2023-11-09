import { fireEvent, render, screen } from '@testing-library/react';
import { Popover } from './popover';
import React from 'react';

describe('Popover can be used when: ', () => {
  jest.spyOn(React, 'useId').mockImplementation(() => ':r0:');

  beforeEach(() => {
    global.ResizeObserver = class MockedResizeObserver {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
    };
  });

  const Content = () => {
    const { close } = Popover.use();

    return (
      <Popover.Content
        className="my-content"
        margin={[200, 200, 200, 200]}
        padding={[200, 200, 200, 200]}
        spacing={[200, 200]}
      >
        <span>Content</span>
        <button onClick={close}>Close</button>
      </Popover.Content>
    );
  };

  const Trigger = () => {
    const { open } = Popover.use();

    return (
      <Popover.Trigger>
        <button onClick={open}>Trigger</button>
      </Popover.Trigger>
    );
  };

  it('[FRAGILE] can be closed after clicking backdrop', async () => {
    const result = render(
      <Popover closeMode="backdrop">
        <Trigger />
        <Content />
      </Popover>
    );

    expect(result).toMatchSnapshot();

    fireEvent.click(screen.getByText(/Trigger/));

    expect(result).toMatchSnapshot();

    fireEvent.click(screen.getByLabelText(/Dialog backdrop/));

    expect(result).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes and allows to use box setup', async () => {
    const result = render(
      <Popover>
        <Trigger />
        <Content />
      </Popover>
    );

    expect(result).toMatchSnapshot();

    fireEvent.click(screen.getByText(/Trigger/));

    expect(result).toMatchSnapshot();

    fireEvent.click(screen.getByText(/Close/));

    expect(result).toMatchSnapshot();
  });
});
