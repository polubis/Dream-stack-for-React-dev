import { Box, Button, CloseIcon, Code, CodeIcon, CreatorLayout, Font, FullScreenCloseIcon, FullScreenIcon, PageIcon } from "@system/figa-ui";
import { ARTICLE_COMPONENTS } from "../../core";
import { ArticleMdRenderer } from "../../features/articles-creator";
import { articles_creator_actions, useArticlesCreatorStore } from "../../store/articles-creator";

const EditorScreen = () => {
    const state = useArticlesCreatorStore()

    if (state.is !== 'creation' && state.is !== 'edition') return null

    return <CreatorLayout
        navigation={() => (
            <Box orientation="row" between>
                <Font variant="h5">Article creator</Font>
                <Button
                    size={1}
                    shape="rounded"
                    onClick={articles_creator_actions.reset}
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
        <Code
            onChange={(content) =>
                articles_creator_actions.change('content', content)
            }
        >
            {state.form.values.content}
        </Code>
        <ArticleMdRenderer
            code={state.form.values.content}
            components={ARTICLE_COMPONENTS}
            thumbnail={null}
        />
    </CreatorLayout>
};

export { EditorScreen };
