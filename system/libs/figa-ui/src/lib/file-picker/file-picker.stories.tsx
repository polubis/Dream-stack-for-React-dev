import type { Story, Meta } from '@storybook/react';

import { FilePicker } from './file-picker';
import { Font } from '../font';
import { Box } from '../box';
import { useState } from 'react';
import type { FilePickerOnChange, FilePickerPreviewList } from './defs';

export default {
  component: FilePicker,
  title: 'FilePicker',
} as Meta;

const Template: Story<{ preview: FilePickerPreviewList }> = (props) => {
  const [preview, setPreview] = useState<FilePickerPreviewList>(props.preview);

  const handleChange: FilePickerOnChange = (_, preview) => {
    setPreview(preview);
  };

  return (
    <Box
      spacing={[200, 300, 200, 300, 200, 300, 200, 300, 200, 300, 200, 300]}
      padding={[300, 300, 300, 300]}
    >
      <Font variant="h3">Default file picker</Font>
      <FilePicker preview={preview} onChange={handleChange}>
        <Font variant="h5">Pick your file</Font>
      </FilePicker>
      <Font variant="h3">Limitted with box properties</Font>
      <FilePicker preview={preview} onChange={handleChange} maxWidth="300px">
        <Font variant="h5">Pick your file</Font>
      </FilePicker>
      <Font variant="h3">Disabled file pickers</Font>
      <FilePicker
        preview={preview}
        onChange={handleChange}
        maxWidth="300px"
        disabled
      >
        <Font variant="h5">Pick your file</Font>
      </FilePicker>
      <Font variant="h3">Multiple files</Font>
      <FilePicker
        preview={preview}
        onChange={handleChange}
        maxWidth="300px"
        multiple
      >
        <Font variant="h5">Pick your file</Font>
      </FilePicker>
      <Font variant="h3">Loading</Font>
      <FilePicker
        preview={preview}
        onChange={handleChange}
        loading
        maxWidth="300px"
      >
        <Font variant="h5">Pick your file</Font>
      </FilePicker>
      <Font variant="h3">Invalid</Font>
      <FilePicker
        invalid
        preview={preview}
        onChange={handleChange}
        maxWidth="300px"
      >
        <Font variant="h5">Wrong format of images...</Font>
      </FilePicker>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  preview: [],
};

export const OnePreview = Template.bind({});
OnePreview.args = {
  preview: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBl5eA3gwpjJrMFmbJaY3VIZNjH1O6iJYTg&usqp=CAU',
  ],
};

export const WithContent = Template.bind({});
WithContent.args = {
  preview: [
    'https://i.ytimg.com/vi/hy7tHQUR3TM/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBl5eA3gwpjJrMFmbJaY3VIZNjH1O6iJYTg&usqp=CAU',
    'https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/opengraph_color.png',
    'https://images.ctfassets.net/lzny33ho1g45/60IgGQVSrxrUf5IAYdpxnc/e11f2cd9185c28bbc82462a0602b6e83/google-drive-vs-google-photos-00-hero.png?w=1520&fm=jpg&q=30&fit=thumb&h=760',
    'https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Google_IO_Bard_Keyword_Header_Option_B_2096x1182.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMoD_dTTKX7ZPPEdDaSFDzOfKk7WNfPDq8w&usqp=CAU',
    'https://static01.nyt.com/images/2020/12/14/well/14google-photo/14google-photo-videoSixteenByNineJumbo1600.jpg',
  ],
};
