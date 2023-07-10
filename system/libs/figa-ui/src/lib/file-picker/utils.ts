import type { ChangeEvent } from 'react';
import type { FilePickerPreviewList } from './defs';

const loadImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') {
        reject();
        return;
      }

      resolve(reader.result);
    };

    reader.readAsDataURL(file);
  });
};

const loadPreview = async (
  e: ChangeEvent<HTMLInputElement>
): Promise<[FileList | null, FilePickerPreviewList]> => {
  const { files } = e.target;

  if (!files) {
    return [null, []];
  }

  const promises: Promise<string>[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    promises.push(loadImage(file));
  }

  const preview = await Promise.all(promises);

  return [files, preview];
};

export { loadPreview };
