import { useState } from 'react'
import { MainLayout } from '../../components';
import { Box, Button, Code, CodeBlock } from '@system/figa-ui';
import dynamic from 'next/dynamic';
import { ARTICLE_COMPONENTS } from 'apps/blog/components/PageWrapper';

const Markdown = dynamic(() => import('markdown-to-jsx'))

interface IdleState {
    key: 'idle'
}

interface LoadingState {
    key: 'loading'
}

interface LoadedState {
    key: 'loaded'
    code: string;
}

interface LoadFailedState {
    key: 'load-failed'
}

type CreatorViewState = IdleState | LoadingState | LoadFailedState | LoadedState

const mdx = `
  # Hello, MDX!

  This is a **dynamic** MDX rendering example using Next.js.

  - List item 1
  - List item 2
`;

const CreatorView = () => {
    const [state, setState] = useState({ key: 'idle' } as CreatorViewState)

    const handleLoad = async () => {
        setState({ key: 'loading' })

        try {
            setState({ key: 'loaded', code: mdx })
        } catch {
            setState({ key: 'load-failed' })
        }
    }

    const handleChange = (code: string) => {
        setState({ key: 'loaded', code })
    }

    return (
        <MainLayout>
            {state.key === 'idle' &&
                <Button onClick={handleLoad}>
                    Click
                </Button>
            }

            {state.key === 'loaded' &&
                <Box spacing={[150]}>
                    <CodeBlock>
                        <Code onChange={handleChange}>{state.code}</Code>
                    </CodeBlock>
                    <Markdown key={state.code}
                        options={{
                            overrides: {
                                h1: {
                                    component: ARTICLE_COMPONENTS.h1,
                                },
                            },
                        }}
                    >
                        {state.code}
                    </Markdown>
                </Box>
            }
        </MainLayout>
    );
};

export { CreatorView };
