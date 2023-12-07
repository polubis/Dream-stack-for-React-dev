import {
  Box,
  Button,
  Divider,
  Field,
  Font,
  VIEWPORT,
  column,
  tokens,
} from '@system/figa-ui';
import styled from 'styled-components';
import { ArticlesStatusSelect } from '../articles-status-select';
import { ArticlesScreenProps } from './defs';
import { isEqual } from 'lodash';
import { useMemo } from 'react';
import { ArticlesTagsSelect } from '../articles-tags-select';
import { ArticlesSearchInput } from '../articles-search-input';

const Wrapper = styled.div`
  background: #191919;
  padding: ${tokens.spacing[600]} ${tokens.spacing[250]};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: ${tokens.spacing[250]};
  max-width: ${VIEWPORT.laptop}px;
  margin: 0 auto;

  .articles-filters {
    background: ${(props) => props.theme.box.outlined.bg};
    border: ${tokens.spacing[12]} solid #393939;
    border-radius: ${tokens.radius[100]};

    .divider div {
      width: 100%;
      background: ${(props) => props.theme.box.outlined.borderColor};
    }
  }

  .articles-content {
  }
`;

const ArticlesScreen = (props: ArticlesScreenProps) => {
  const { selectors, actions } = props;
  const state = selectors.useState();

  const resetIsDisabled = useMemo(
    () =>
      state.is === 'idle' ? true : isEqual(state.initialParams, state.params),
    [state]
  );

  return (
    <Wrapper>
      <Container>
        <div className="articles-filters">
          <Box padding={[250, 200, 250, 300]} orientation="row" between>
            <Font variant="h6">Filters</Font>
            <Button
              size={1}
              variant="ghost"
              motive="tertiary"
              disabled={resetIsDisabled}
              onClick={actions.reset}
            >
              Clear All
            </Button>
          </Box>
          <Divider />
          <Box padding={[250, 250, 250, 250]} spacing={[250, 250, 600]}>
            <Field label="Search phrase">
              <ArticlesSearchInput
                loading={state.is === 'changing'}
                search={state.is === 'idle' ? '' : state.params.Search}
                onChange={(Search) => actions.change({ Search })}
              />
            </Field>
            <Field label="Status">
              <ArticlesStatusSelect
                status={state.is === 'idle' ? 'Draft' : state.params.Status}
                onChange={(Status) => actions.change({ Status })}
              />
            </Field>
            <Field label="Tags">
              <ArticlesTagsSelect
                tags={state.is === 'idle' ? [] : state.params.Tags}
                onConfirm={(Tags) => actions.change({ Tags })}
              />
            </Field>

            <Box orientation="row" right spacing={[150]}>
              <Button size={2} motive="tertiary" variant="ghost">
                Save
              </Button>
              <Button size={2} motive="tertiary" variant="ghost">
                Share
              </Button>
            </Box>
          </Box>
        </div>
        <div className="articles-content">Right</div>
      </Container>
    </Wrapper>
  );
};

export { ArticlesScreen };
