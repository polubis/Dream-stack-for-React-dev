import { Box, Button, Field, FilePicker, Font, Input, Select, Textarea } from "@system/figa-ui";
import { type ArticlesCreator, articles_creator_actions } from "../../store/articles-creator";

const MaintainForm = (state: ArticlesCreator.SafeState) => {
    return (
        <Box
            padding={[200, 150, 200, 200]}
            spacing={[200, 200, 200, 200, 400]}
            maxWidth="600px"
            margin="auto"
        >
            <FilePicker
                preview={state.form.values.thumbnail.preview}
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
            <Field label="Title*">
                <Input
                    autoFocus
                    value={state.form.values.title}
                    placeholder="The best title is between 80 and 130 characters"
                    onChange={(e) => articles_creator_actions.change('title', e.target.value)}
                />
            </Field>
            {state.is === 'edited' || state.is === 'editing' || state.is === 'edition' &&
                <Field label="URL to article">
                    <Input
                        placeholder="I will be automatically generated"
                        value={state.url}
                        disabled
                    />
                </Field>
            }
            <Field label="Description*">
                <Textarea
                    value={state.form.values.description}
                    placeholder="The best description is between 80 and 130 characters"
                    onChange={(e) => articles_creator_actions.change('description', e.target.value)}
                />
            </Field>
            <Field label="Language*">
                <Select
                    placeholder="You can write in English or Polish language"
                    value={state.form.values.lang}
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
            <Box orientation="row" right>
                <Button>Confirm</Button>
            </Box>
        </Box>
    )
}

export { MaintainForm }