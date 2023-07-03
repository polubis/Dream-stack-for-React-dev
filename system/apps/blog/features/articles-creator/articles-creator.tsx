import { ArticlesCreatorProps } from './defs';
import { Code } from '@system/figa-ui';
import { ClientRenderer } from './client-renderer';

const ArticlesCreator = ({
  components,
  code,
  onChange,
}: ArticlesCreatorProps) => {
  return (
    <>
      <Code onChange={onChange}>{code}</Code>
      <ClientRenderer code={code} components={components} />;
    </>
  );
};

export { ArticlesCreator };
