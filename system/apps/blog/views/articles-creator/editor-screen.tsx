import { Box, Button, CloseIcon, Code, CodeIcon, CreatorLayout, Font, FormIcon, FullScreenCloseIcon, FullScreenIcon, PageIcon, Thumbnail } from "@system/figa-ui";
import { articles_creator_actions, useArticlesCreatorStore } from "../../store/articles-creator";
import { ArticleMdRenderer } from "../../features/articles-creator";
import { ARTICLE_COMPONENTS } from "../../core";
import { useToggle } from "@system/figa-hooks";
import { CreatorForm } from "./creator-form";

const EditorScreen = () => {
    const articlesCreatorStore = useArticlesCreatorStore()
    const formToggler = useToggle()

    const handleClose = (): void => {
        articles_creator_actions.setView('initial')
    }

    const { form: { values: { thumbnail, title } } } = articlesCreatorStore;

    return <CreatorLayout
        navigation={() => (
            <Box orientation="row" between>
                <Font variant="h5">Article creator</Font>
                <Button
                    size={1}
                    shape="rounded"
                    onClick={handleClose}
                >
                    <CloseIcon />
                </Button>
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
                    variant={formToggler.isOpen ? 'filled' : 'outlined'}
                    onClick={formToggler.toggle}
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
            </>
        )}
    >
        {formToggler.isOpen ? <CreatorForm /> : <Code
            onChange={(content) =>
                articles_creator_actions.change('content', content)
            }
        >
            {articlesCreatorStore.form.values.content}
        </Code>}

        <ArticleMdRenderer
            code={articlesCreatorStore.form.values.content}
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
    </CreatorLayout>
};

export { EditorScreen };
