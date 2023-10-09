import {
  Badge,
  Box,
  Button,
  Field,
  FilePicker,
  Font,
  Input,
  PlusIcon,
  Select,
  Textarea,
} from '@system/figa-ui';
import {
  articles_creator_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
import type { FormEventHandler } from 'react';
// @TODO: Backend returns invalid format for articles creation.
// @TODO: Backend returns random errors on article creation???

const errors_t = {
  required: 'This field is required',
  minLength: 'This field must have minLength of',
  maxLength: 'This field must have max value of',
};

const CreatorForm = () => {
  const articlesCreatorStore = useArticlesCreatorStore();

  const { thumbnail, title, description, lang, tagValue, tags } =
    articlesCreatorStore.form.values;
  const errors = articlesCreatorStore.form.errors;

  const handleTagConfirm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    articles_creator_actions.confirmTag();
  };

  return (
    <Box
      padding={[400, 400, 400, 400]}
      spacing={[200, 200, 200, 400]}
      maxWidth="600px"
      margin="auto"
    >
      <Field label="Title*">
        <Input
          autoFocus
          value={title}
          placeholder="The best title is between 80 and 130 characters"
          onChange={(e) =>
            articles_creator_actions.change('title', e.target.value)
          }
        />
      </Field>
      <Field label="Description*">
        <Textarea
          value={description}
          placeholder="The best description is between 80 and 130 characters"
          onChange={(e) =>
            articles_creator_actions.change('description', e.target.value)
          }
        />
      </Field>
      <Field label="Thumbnail*">
        <FilePicker
          preview={thumbnail.preview}
          onChange={(files, preview) =>
            articles_creator_actions.change('thumbnail', {
              file: files[0],
              preview,
            })
          }
          onConfirm={() => {
            articles_creator_actions.change('thumbnail', {
              file: null,
              preview: [],
            });
          }}
        >
          <Font variant="h5">Pick the thumbnail from your disc</Font>
        </FilePicker>
      </Field>
      <form onSubmit={handleTagConfirm}>
        <Field
          label="Tags*"
          error={errors_t[errors.tags] || errors_t[errors.tagValue]}
        >
          <Input
            placeholder="Type to add tags and confirm with enter..."
            value={tagValue}
            onChange={(e) =>
              articles_creator_actions.change('tagValue', e.target.value)
            }
            suffx={
              <Button type="submit" size={1}>
                <PlusIcon />
              </Button>
            }
          />
        </Field>
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </form>
      <Field label="Language*">
        <Select
          placeholder="You can write in English or Polish language"
          value={lang}
          onChange={(lang) => articles_creator_actions.change('lang', lang)}
          options={[
            {
              key: 'pl',
              child: <>Polish</>,
            },
            { key: 'en', child: <>English</> },
          ]}
        />
      </Field>
    </Box>
  );
};

export { CreatorForm };
