import { fireEvent, render, screen } from '@testing-library/react';
import { FilePicker } from './file-picker';
import type { FilePickerPreviewList } from './defs';

describe('File picker can be used when: ', () => {
  const PREVIEW: FilePickerPreviewList = [
    'https://i.ytimg.com/vi/hy7tHQUR3TM/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBl5eA3gwpjJrMFmbJaY3VIZNjH1O6iJYTg&usqp=CAU',
  ];

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <FilePicker
        multiple
        className="my-class"
        invalid
        disabled
        loading
        preview={PREVIEW}
      >
        Pick file
      </FilePicker>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('toggles removal confirmation modal', () => {
    const spy = jest.fn();

    render(
      <FilePicker preview={PREVIEW} onConfirm={spy}>
        Pick file
      </FilePicker>
    );

    fireEvent.click(screen.getAllByAltText(/File picker preview/)[0]);

    screen.getByText(/You are about to delete input file?/);
    screen.getByText(/Are you sure about that?/);
    screen.getByText(/No/);
    fireEvent.click(screen.getByText(/Yes/));

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(PREVIEW[0]);
  });

  it('[FRAGILE] assigns additional classes if only one preview item passed', () => {
    const { asFragment } = render(
      <FilePicker
        multiple
        className="my-class"
        invalid
        disabled
        loading
        preview={[PREVIEW[0]]}
      >
        Pick file
      </FilePicker>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
