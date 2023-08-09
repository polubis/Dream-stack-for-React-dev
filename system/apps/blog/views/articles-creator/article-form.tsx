import { Box, Button, Field, FilePicker, Font, Input, Select, Textarea } from "@system/figa-ui";

const ArticleForm = () => {
    return (
        <Box
            padding={[200, 150, 200, 200]}
            spacing={[200, 200, 200, 200, 400]}
            maxWidth="600px"
            margin="auto"
        >
            {/* <FilePicker
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
            </Box> */}
        </Box>
    )
};

export { ArticleForm };
