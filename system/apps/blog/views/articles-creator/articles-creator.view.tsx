import {
  Box,
  Button,
  Loader,
  Font,
  List,
  ListItem,
  CreatorLayout,
  CloseIcon,
  Code,
  FullScreenCloseIcon,
  FullScreenIcon,
  PageIcon,
  CodeIcon,
  Input,
  CheckIcon,
  FormIcon,
  MobileIcon,
  FilePicker,
  Modal,
  Select,
  Thumbnail,
  Field,
  Textarea,
  Alert,
} from '@system/figa-ui';
import { MainLayout } from '../../components';
import { ARTICLE_COMPONENTS } from '../../core';
import { useArticlesCreatorStore, reset } from '../../store/articles-creator';
import { ArticleMdRenderer } from '../../features/articles-creator';
import { useToggle } from '@system/figa-hooks';

const MDX = `#### Quick start

Here you find basic info and useful links. 

#### First run

Clone repository and open it in your IDE. Remember to have \`node 18+\` and \`npm 6+\` versions. 

Next type following commands:

1. \`cd system\`

2. \`npm i --legacy-peer-deps\`

3. Then run anything you want. It can be app, more than one apps, storybook or other. Check **COMMANDS.md** file for more. 

#### Structure of repository

We have two main parts in this repo. First is an API in **.NET** ecosystem and second is monorepo in **JavaScript**. 

We used monorepo because it gives us easy way to give permissions for devs and it provides linear git history of changes in whole system. 

Thanks to this everyone will be able to track progress. 

## Description of repository elements

Currently we have several applications:

1. First is a blog platform currently available at [GreenOn Software](https://greenonsoftware.com). We migrating it to **Next** from **Gatsby**.

2. Second is an app for musicans [jamjam](https://jamjambeings.com) 

- we are migrating it from **CRA** to **Next**.

- we are migrating it from **CRA** to **Next**.

- we are migrating it from **CRA** to **Next**.

3. Third is **design-system** implementation with reusable not domain specific UI. Its called **figa-ui**.

4. We have also other reusable parts like **figa-hooks** which implements reusable not app specific hooks.

1. Second is an app for musicans [jamjam](https://jamjambeings.com) 

- we are migrating it from **CRA** to **Next**.

- we are migrating it from **CRA** to **Next**.

- we are migrating it from **CRA** to **Next**.

![My image description](https://img.freepik.com/premium-wektory/dobry-widok-na-gory-grafika-ilustracja-projekt-koszulki-wektor-sztuki_24519-2593.jpg?w=2000)
*my description of image!*
`;

const ArticlesCreatorView = () => {
  const {
    key,
    content,
    setField,
    load,
    submit,
    title,
    submitKey,
    description,
    lang,
    thumbnail,
    url,
    submitResponse,
  } = useArticlesCreatorStore();

  const form = useToggle();
  const mobileView = useToggle();
  const confirmModal = useToggle();

  const handleConfirmClose = (): void => {
    if (submitKey === 'pending') return;

    confirmModal.close();
  };

  if (key === 'idle') {
    return (
      <MainLayout>
        <Box
          margin="auto"
          maxWidth="400px"
          variant="outlined"
          spacing={[150, 250, 500]}
          padding={[250, 250, 250, 250]}
        >
          <Font variant="h6">Try to use our editor</Font>
          <Font variant="b1">Create an article in the following way: </Font>
          <List ordered>
            <ListItem>Write article content in md syntax</ListItem>
            <ListItem>
              Check how it looks like on mobile/tablet/desktop devices
            </ListItem>
            <ListItem>Confirm an article and wait for review</ListItem>
            <ListItem>
              Improve required stuff and get your article published!
            </ListItem>
          </List>
          <Box right>
            <Button onClick={() => load(MDX)}>Start</Button>
          </Box>
        </Box>
      </MainLayout>
    );
  }

  if (key === 'loading') {
    return (
      <MainLayout>
        <Box margin="auto">
          <Box margin="auto">
            <Loader size="big" />
          </Box>
        </Box>
      </MainLayout>
    );
  }

  if (key === 'loaded') {
    const ArticleContent = (
      <ArticleMdRenderer
        code={content}
        components={ARTICLE_COMPONENTS}
        thumbnail={
          thumbnail.preview.length > 0 && (
            <Thumbnail
              src={thumbnail.preview[0]}
              alt="Article thumbnail"
              title={title}
            />
          )
        }
      />
    );

    return (
      <>
        {confirmModal.isOpen && (
          <Modal onClose={handleConfirmClose}>
            <Box
              maxWidth="400px"
              spacing={[200, 150, 400, submitKey === 'error' ? 250 : 0]}
            >
              <Font variant="h5">
                Do you want to submit an article for review?
              </Font>
              <Font variant="b1">What will happen now: </Font>
              <List ordered>
                <ListItem>Your article will be sent to review</ListItem>
                <ListItem>
                  Moderators will check its content and suggest corrections
                </ListItem>
                <ListItem>
                  Then you will have to introduce them - don&apos;t worry you
                  will get an email notification
                </ListItem>
                <ListItem>
                  Then your article will be published and will appear in the tab
                  of your articles.
                </ListItem>
              </List>
              <Box orientation="row" spacing={[150]} right>
                <Button
                  disabled={submitKey === 'pending'}
                  variant="outlined"
                  onClick={handleConfirmClose}
                >
                  Not now
                </Button>
                <Button loading={submitKey === 'pending'} onClick={submit}>
                  Submit
                </Button>
              </Box>
              {submitKey === 'error' && (
                <Alert type="error">{submitResponse.message}</Alert>
              )}
            </Box>
          </Modal>
        )}
        <CreatorLayout
          navigation={() => (
            <Box orientation="row" between>
              <Font variant="h5">Article creator</Font>
              <Box orientation="row" spacing={[150]}>
                <Button
                  size={1}
                  shape="rounded"
                  variant="outlined"
                  onClick={reset}
                >
                  <CloseIcon />
                </Button>
                <Button size={1} shape="rounded" onClick={confirmModal.toggle}>
                  <CheckIcon />
                </Button>
              </Box>
            </Box>
          )}
          codeToolbox={({ view, expandBoth, expandCode, expandPreview }) => (
            <>
              {view === 'code' && (
                <Button size={1} shape="rounded" onClick={expandPreview}>
                  <PageIcon />
                </Button>
              )}
              {view === 'code-full' && (
                <Button size={1} shape="rounded" onClick={expandBoth}>
                  <FullScreenCloseIcon />
                </Button>
              )}
              {view === 'both' && (
                <Button size={1} shape="rounded" onClick={expandCode}>
                  <FullScreenIcon />
                </Button>
              )}
              <Button
                size={1}
                shape="rounded"
                variant={form.isOpen ? 'filled' : 'outlined'}
                onClick={form.toggle}
              >
                <FormIcon />
              </Button>
            </>
          )}
          previewToolbox={({ view, expandBoth, expandPreview, expandCode }) => (
            <>
              {view === 'preview' && (
                <Button size={1} shape="rounded" onClick={expandCode}>
                  <CodeIcon />
                </Button>
              )}
              {view === 'preview-full' && (
                <Button size={1} shape="rounded" onClick={expandBoth}>
                  <FullScreenCloseIcon />
                </Button>
              )}
              {view === 'both' && (
                <Button size={1} shape="rounded" onClick={expandPreview}>
                  <FullScreenIcon />
                </Button>
              )}
              <Button
                size={1}
                shape="rounded"
                variant={mobileView.isOpen ? 'filled' : 'outlined'}
                onClick={mobileView.toggle}
              >
                <MobileIcon />
              </Button>
            </>
          )}
        >
          {form.isOpen ? (
            <Box
              padding={[200, 150, 200, 200]}
              spacing={[200, 200, 200, 200, 400]}
              maxWidth="600px"
              margin="auto"
            >
              <FilePicker
                preview={thumbnail.preview}
                onChange={(files, preview) =>
                  setField('thumbnail', {
                    file: files[0],
                    preview,
                  })
                }
                onConfirm={() => {
                  setField('thumbnail', {
                    file: null,
                    preview: [],
                  });
                }}
              >
                <Font variant="h5">Pick the thumbnail from your disc</Font>
              </FilePicker>
              <Field label="Title*">
                <Input
                  autoFocus
                  value={title}
                  placeholder="The best title is between 80 and 130 characters"
                  onChange={(e) => setField('title', e.target.value)}
                />
              </Field>
              <Field label="URL to article">
                <Input
                  placeholder="I will be automatically generated"
                  value={url}
                  disabled
                  onChange={(e) => setField('url', e.target.value)}
                />
              </Field>
              <Field label="Description*">
                <Textarea
                  value={description}
                  placeholder="The best description is between 80 and 130 characters"
                  onChange={(e) => setField('description', e.target.value)}
                />
              </Field>
              <Field label="Language*">
                <Select
                  placeholder="You can write in English or Polish language"
                  value={lang}
                  onChange={(lang) => setField('lang', lang)}
                  options={[
                    {
                      key: 'pl',
                      child: <>Polish</>,
                    },
                    { key: 'en', child: <>English</> },
                  ]}
                />
              </Field>
              <Box orientation="row" right>
                <Button onClick={confirmModal.toggle}>Confirm</Button>
              </Box>
            </Box>
          ) : (
            <Code onChange={(code) => setField('content', code)}>
              {content}
            </Code>
          )}
          {mobileView.isOpen ? (
            <Box
              variant="outlined"
              padding={[200, 200, 200, 200]}
              maxWidth="320px"
              margin="auto"
            >
              {ArticleContent}
            </Box>
          ) : (
            ArticleContent
          )}
        </CreatorLayout>
      </>
    );
  }

  throw new Error('Lack of component support for this key ' + key);
};

export { ArticlesCreatorView };
