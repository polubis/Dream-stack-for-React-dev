import { useCallback, useState } from 'react';
import type {
  ExpansionListProps,
  ExpansionListItemProps,
  SelectionMapId,
  SelectionMap,
  ExpansionListHeaderProps,
  ExpansionListContentProps,
} from './defs';
import c from 'classnames';
import styled from 'styled-components';
import { column, row } from '../shared';
import { tokens } from '../theme-provider';

const Container = styled.ul`
  ${column()}
  width: 100%;

  & > * {
    margin-bottom: ${tokens.spacing[150]};
  }

  .expansion-list-item {
    ${column()}

    .expansion-list-header {
      ${row()}
      justify-content: space-between;
    }

    .expansion-list-content {
      background: ${(props) => props.theme.box.filled.bg};
      border-radius: ${tokens.radius[50]};
      padding: ${tokens.spacing[200]};
      margin-top: ${tokens.spacing[150]};
    }
  }
`;

const ExpansionList = ({ className, children }: ExpansionListProps) => {
  return (
    <Container className={c('expansion-list', className)}>{children}</Container>
  );
};

const useExpansionList = (initialSelectionMap: SelectionMap = {}) => {
  const [selectionMap, setSelectionMap] =
    useState<SelectionMap>(initialSelectionMap);

  const toggle = useCallback((id: SelectionMapId): void => {
    setSelectionMap((prevSelectionMap) => ({
      ...prevSelectionMap,
      [id]: prevSelectionMap[id] ? false : true,
    }));
  }, []);

  const open = useCallback((id: SelectionMapId): void => {
    setSelectionMap((prevSelectionMap) => ({
      ...prevSelectionMap,
      [id]: true,
    }));
  }, []);

  const close = useCallback((id: SelectionMapId): void => {
    setSelectionMap((prevSelectionMap) => ({
      ...prevSelectionMap,
      [id]: false,
    }));
  }, []);

  const replace = useCallback((selectionMap: SelectionMap): void => {
    setSelectionMap(selectionMap);
  }, []);

  return [selectionMap, { toggle, replace, open, close }] as const;
};

const ExpansionListItem = ({ className, children }: ExpansionListItemProps) => {
  return <li className={c('expansion-list-item', className)}>{children}</li>;
};

const ExpansionListHeader = ({ children }: ExpansionListHeaderProps) => {
  return <div className="expansion-list-header">{children}</div>;
};

const ExpansionListContent = ({
  children,
  opened,
}: ExpansionListContentProps) => {
  return opened ? (
    <div className="expansion-list-content">{children}</div>
  ) : null;
};

ExpansionList.use = useExpansionList;
ExpansionList.Item = ExpansionListItem;
ExpansionList.Header = ExpansionListHeader;
ExpansionList.Content = ExpansionListContent;

export { ExpansionList };
