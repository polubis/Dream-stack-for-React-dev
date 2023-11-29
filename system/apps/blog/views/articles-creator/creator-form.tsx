import {
  Box,
  Button,
  Field,
  FilePicker,
  Font,
  Input,
  PlusIcon,
  Textarea,
  size,
  tokens,
  wrap,
} from '@system/figa-ui';
import {
  articles_creator_store_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tagForm } from '../../store/articles-creator/form';
import { ArticleTag } from '@system/blog-api-models';
import { useLang } from '../../dk';

const PlusButton = styled.div`
  button.button.size-3 {
    ${size(tokens.spacing[500])}
    padding: 0;
    background: none;

    &:focus {
      outline: none;
    }

    svg.icon path {
      fill: ${(props) => props.theme.font.default.color};
    }
  }
`;

const ArticleTags = styled.div`
  ${wrap()}

  & > * {
    margin: 0 ${tokens.spacing[100]} ${tokens.spacing[100]} 0;
  }
`;

const TagsForm = () => {
  const articlesCreatorStore = useArticlesCreatorStore();
  const [form, setForm] = useState(() =>
    tagForm.init({ tag: '', tags: articlesCreatorStore.form.values.tags })
  );

  const handleConfirm = (): void => {
    const result = tagForm.confirm(form);

    if (result.invalid) {
      setForm(result);
    } else {
      const newTags = [...form.values.tags, form.values.tag];
      setForm(tagForm.init({ tag: '', tags: newTags }));
    }
  };

  const handleTagRemoval = (tagToRemove: ArticleTag): void => {
    setForm(
      tagForm.set(form)({
        tags: form.values.tags.filter((tag) => tag !== tagToRemove),
      })
    );
  };

  useEffect(() => {
    articles_creator_store_actions.change('tags', form.values.tags);
  }, [form.values.tags]);

  return (
    <Box spacing={[form.values.tags.length > 0 ? 150 : 0]}>
      <Field label="Tags*">
        <Input
          invalid={form.touch.tag && form.invalid}
          placeholder="React, Angular, RxJs, ...etc"
          value={form.values.tag}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleConfirm();
            }
          }}
          onChange={(e) => setForm(tagForm.set(form)({ tag: e.target.value }))}
          suffx={
            <PlusButton>
              <Button
                title="Confirm article tag"
                disabled={form.invalid}
                onClick={handleConfirm}
              >
                <PlusIcon />
              </Button>
            </PlusButton>
          }
        />
      </Field>
      <ArticleTags>
        {form.values.tags.map((tag) => (
          <Button
            size={1}
            key={tag}
            variant="outlined"
            motive="tertiary"
            onClick={() => handleTagRemoval(tag)}
          >
            {tag}
          </Button>
        ))}
      </ArticleTags>
    </Box>
  );
};

const CreatorForm = () => {
  const lang = useLang();
  const articlesCreatorStore = useArticlesCreatorStore();

  const { thumbnail, title, description } = articlesCreatorStore.form.values;

  useEffect(() => {
    articles_creator_store_actions.change('lang', lang);
  }, [lang]);

  return (
    <Box
      padding={[200, 250, 200, 250]}
      spacing={[200, 200, 200]}
      maxWidth="600px"
      margin="auto"
    >
      <Field label="Title*">
        <Input
          value={title}
          placeholder="The best title is between 80 and 130 characters"
          onChange={(e) =>
            articles_creator_store_actions.change('title', e.target.value)
          }
        />
      </Field>

      <TagsForm />

      <Field label="Description*">
        <Textarea
          value={description}
          placeholder="The best description is between 80 and 130 characters"
          onChange={(e) =>
            articles_creator_store_actions.change('description', e.target.value)
          }
        />
      </Field>
      <Field label="Thumbnail*">
        <FilePicker
          preview={thumbnail.preview}
          onChange={(files, preview) =>
            articles_creator_store_actions.change('thumbnail', {
              file: files[0],
              preview,
            })
          }
          onConfirm={() => {
            articles_creator_store_actions.change('thumbnail', {
              file: null,
              preview: [],
            });
          }}
        >
          <Box orientation="row" between>
            <Font variant="h5">Add thumbnail</Font>
            <PlusIcon />
          </Box>
        </FilePicker>
      </Field>
    </Box>
  );
};

export { CreatorForm };
