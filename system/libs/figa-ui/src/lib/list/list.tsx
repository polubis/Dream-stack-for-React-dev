import type { ListItemProps, ListProps } from './defs';
import c from 'classnames';

const ListItem = ({ className, children }: ListItemProps) => {
  return <li className={className}>{children}</li>;
};

const List = ({ className, children, ordered }: ListProps) => {
  const classes = c('list', className);

  if (ordered) {
    return <ol className={classes}>{children}</ol>;
  }

  return <ul className={classes}>{children}</ul>;
};

export { List, ListItem };
