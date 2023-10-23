interface ArticlesSearchProps {
  search: string;
  loading?: boolean;
  onChange(search: string): void;
}

export type { ArticlesSearchProps };
