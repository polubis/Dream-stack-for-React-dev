import {
  type ChangeEventHandler,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from 'react';
import { Box } from '../box';
import type { FilePickerProps, FilePickerPreview } from './defs';

import c from 'classnames';
import { Image } from '../image';
import { Loader } from '../loader';
import { loadPreview } from './utils';
import { useToggle } from '@system/figa-hooks';
import { Modal } from '../modal';
import { Font } from '../font';
import { Button } from '../button';

const FilePicker = ({
  className,
  children,
  disabled,
  onChange,
  multiple,
  preview,
  loading,
  invalid,
  accept,
  onConfirm,
  ...props
}: FilePickerProps) => {
  const confirm = useToggle<string>();
  const [pending, setPending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const progress = pending || loading;
  const previewing = preview.length > 0;
  const blocked = disabled || progress;

  const handleClick = (): void => {
    if (blocked) return;

    inputRef.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    setPending(true);

    const result = await loadPreview(e);

    setPending(false);
    onChange?.(...result);
  };

  const handlePreviewImageClick = (
    e: ReactMouseEvent<HTMLSourceElement, MouseEvent>,
    src: FilePickerPreview
  ) => {
    e.stopPropagation();

    if (blocked) return;

    confirm.openWithData(src);
  };

  const handleConfirmRemoval = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onConfirm?.(confirm.data!);
    confirm.close();
  };

  return (
    <>
      {confirm.opened && (
        <Modal spacing={[200, 400]}>
          <Font variant="h5">You are about to delete input file?</Font>
          <Font variant="b1">Are you sure about that?</Font>
          <Box orientation="row" right spacing={[150]}>
            <Button variant="outlined" onClick={confirm.close}>
              No
            </Button>
            <Button onClick={handleConfirmRemoval}>Yes</Button>
          </Box>
        </Modal>
      )}

      <Box
        className={c(
          'file-picker',
          { disabled },
          { previewing },
          { one: preview.length === 1 },
          { loading: progress },
          { invalid },
          className
        )}
        variant="filled"
        onClick={handleClick}
        {...props}
      >
        <input
          ref={inputRef}
          disabled={disabled}
          accept={accept}
          multiple={multiple}
          className="file-picker-input"
          type="file"
          onChange={handleChange}
        />
        <div className="file-picker-preview">
          {preview.map((src) => (
            <Image
              className="file-picker-preview-image"
              alt="File picker preview"
              key={src}
              src={src}
              onClick={(e) => handlePreviewImageClick(e, src)}
            />
          ))}
        </div>
        {progress && <Loader size="small" className="file-picker-loader" />}
        {!previewing && !progress && children}
      </Box>
    </>
  );
};

export { FilePicker };
