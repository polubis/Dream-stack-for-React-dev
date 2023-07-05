import { ArticlesCreatorProps } from './defs';
import {
  Box,
  Button,
  CloseIcon,
  Code,
  CreatorLayout,
  Font,
} from '@system/figa-ui';
import { ClientRenderer } from './client-renderer';

const ArticlesCreator = ({
  components,
  code,
  onChange,
}: ArticlesCreatorProps) => {
  return (
    <CreatorLayout
      navigation={() => (
        <Box orientation="row" between>
          <Font variant="h5">Article creator</Font>
          <Button>Submit</Button>
        </Box>
      )}
      codeToolbox={() => (
        <>
          <Button size={1} shape="rounded">
            <CloseIcon />
          </Button>
        </>
      )}
      previewToolbox={() => (
        <Button size={1} shape="rounded">
          <CloseIcon />
        </Button>
      )}
    >
      <Code onChange={onChange}>{code}</Code>
      <ClientRenderer code={code} components={components} />
    </CreatorLayout>
  );
};

export { ArticlesCreator };
