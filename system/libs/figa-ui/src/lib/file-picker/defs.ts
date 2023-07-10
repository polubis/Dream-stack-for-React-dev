import type { ReactNode } from 'react';
import type { BoxProps } from '../box';

type FilePickerHTMLElementProps = Omit<BoxProps, 'onChange' | 'children'>;

type FilePickerPreview = string;
type FilePickerPreviewList = FilePickerPreview[];
type FilePickerFiles = FileList | null;

type FilePickerOnChange = (
  files: FilePickerFiles,
  preview: FilePickerPreviewList
) => void;

interface FilePickerProps extends FilePickerHTMLElementProps {
  disabled?: boolean;
  multiple?: boolean;
  accept?: string;
  invalid?: boolean;
  loading?: boolean;
  children: ReactNode;
  preview: FilePickerPreviewList;
  onChange?: FilePickerOnChange;
  onConfirm?: (src: FilePickerPreview) => void;
}

export type {
  FilePickerProps,
  FilePickerOnChange,
  FilePickerHTMLElementProps,
  FilePickerPreviewList,
  FilePickerFiles,
  FilePickerPreview,
};
