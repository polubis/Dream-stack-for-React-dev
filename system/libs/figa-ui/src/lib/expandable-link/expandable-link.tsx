import styled from 'styled-components';
import type {
  ExpandableLinkProps,
  ExpandableLinkItemProps,
  ExpandableLinkNameProps,
  ExpandableLinkListProps,
} from './defs';
import c from 'classnames';
import { column, size } from '../shared';
import { tokens } from '../theme-provider';
import { ListItem } from '../list';
import { Link } from '../link';

const Container = styled.nav`
  ${column()}
  user-select: none;
  position: relative;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.font.primary.color};
    & .expandable-link-list {
      display: block;
    }
  }

  &.active {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      ${size(tokens.spacing[50], '100%')};
      background-color: ${(props) => props.theme.outline.color};
    }

    & .expandable-link-name {
      color: ${(props) => props.theme.font.primary.color};
    }
  }

  .expandable-link-list {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    white-space: nowrap;

    &:focus-within,
    &:hover {
      display: block;
    }
  }

  .expandable-link-name {
    cursor: pointer;
    width: fit-content;
    padding: ${tokens.spacing[400]} ${tokens.spacing[300]};
    background-color: ${(props) => props.theme.box.filled.bg};
  }

  .expandable-link-list-item {
    cursor: pointer;
    background-color: ${(props) => props.theme.box.filled.bg};
    padding: ${tokens.spacing[100]} ${tokens.spacing[200]};
    display: block;

    & {
      text-decoration: none;
    }

    &:hover span {
      color: ${(props) => props.theme.font.primary.color};
    }
  }
`;

const ExpandableLinkName = ({
  className,
  children,
}: ExpandableLinkNameProps) => {
  return (
    <Link variant="h3" className={c('expandable-link-name', className)}>
      {children}
    </Link>
  );
};

const ExpandableLinkItem = ({
  children,
  className,
  path,
}: ExpandableLinkItemProps) => {
  return (
    <a className={c('expandable-link-list-item', className)} href={path}>
      <ListItem>
        <Link variant="h3">{children}</Link>
      </ListItem>
    </a>
  );
};

const ExpandableLinkList = ({
  className,
  children,
}: ExpandableLinkListProps) => {
  return <ul className={c('expandable-link-list', className)}>{children}</ul>;
};

const ExpandableLink = ({
  className,
  children,
  active,
}: ExpandableLinkProps) => {
  return (
    <Container className={c(className, { active })} tabIndex={0}>
      {children}
    </Container>
  );
};

ExpandableLink.Name = ExpandableLinkName;
ExpandableLink.List = ExpandableLinkList;
ExpandableLink.Item = ExpandableLinkItem;

export { ExpandableLink };
