import {
  Box,
  Field,
  FilePicker,
  Font,
  Input,
  Select,
  Textarea,
} from '@system/figa-ui';
import {
  articles_creator_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
// @TODO: Backend returns invalid format for articles creation.
// @TODO: Backend returns random errors on article creation???
const CreatorForm = () => {
  const articlesCreatorStore = useArticlesCreatorStore();

  const { thumbnail, title, description, lang } =
    articlesCreatorStore.form.values;

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
