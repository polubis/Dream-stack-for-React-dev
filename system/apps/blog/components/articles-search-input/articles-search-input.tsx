import { Button, CloseIcon, Input } from '@system/figa-ui';
import type { ArticlesSearchProps } from './defs';

const ArticlesSearchInput = ({ search, onChange }: ArticlesSearchProps) => {
  return (
    <Input
      className="articles-search"
      value={search}
      placeholder="🏸 Type to find article..."
      onChange={(e) => onChange(e.target.value)}
      suffx={
        search.length > 0 && (
          <Button onClick={() => onChange('')}>
            <CloseIcon />
          </Button>
        )
      }
    />
  );
};

export { ArticlesSearchInput };
