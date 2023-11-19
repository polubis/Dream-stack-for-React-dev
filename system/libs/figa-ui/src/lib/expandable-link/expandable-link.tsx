import styled from 'styled-components';
import type {
  ExpandableLinkProps,
  ExpandableLinkItemProps,
  ExpandableLinkBaseProps,
  ExpandableLinkListProps,
} from './defs';
import c from 'classnames';
import { column, size } from '../shared';
import { tokens } from '../theme-provider';
import { ListItem } from '../list';
import { Link } from '../link';

const Container = styled.section`
  ${column()}
  user-select: none;

  .expandable-link-name {
    cursor: pointer;
    width: fit-content;
    padding: ${tokens.spacing[400]} ${tokens.spacing[300]};
    position: relative;
    background-color: ${(props) => props.theme.box.filled.bg};

    &:hover {
      color: ${(props) => props.theme.font.primary.color};
    }

    &--active {
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        ${size(tokens.spacing[50], '100%')};
        background-color: ${(props) => props.theme.outline.color};
      }
    }
  }

  .expandable-link-list-item {
    cursor: pointer;
    background-color: ${(props) => props.theme.box.filled.bg};
    padding: ${tokens.spacing[100]} ${tokens.spacing[200]};

    &:hover span {
      color: ${(props) => props.theme.font.primary.color};
    }
  }
`;

const ExpandableLinkBase = ({
  className,
  children,
  isActive,
}: ExpandableLinkBaseProps) => {
  return (
    <Link
      variant="h3"
      className={c(
        'expandable-link-name',
        isActive ? 'expandable-link-name--active' : null,
        className
      )}
    >
      {children}
    </Link>
  );
};

const ExpandableLinkItem = ({
  children,
  className,
}: ExpandableLinkItemProps) => {
  return (
    <ListItem className={c('expandable-link-list-item', className)}>
      <Link variant="h3">{children}</Link>
    </ListItem>
  );
};

const ExpandableLinkList = ({
  className,
  children,
}: ExpandableLinkListProps) => {
  return <ul className={c('expandable-link-list', className)}>{children}</ul>;
};

const ExpandableLink = ({ className, children }: ExpandableLinkProps) => {
  return <Container className={className}>{children}</Container>;
};

ExpandableLink.Base = ExpandableLinkBase;
ExpandableLink.List = ExpandableLinkList;
ExpandableLink.Item = ExpandableLinkItem;

export { ExpandableLink };
