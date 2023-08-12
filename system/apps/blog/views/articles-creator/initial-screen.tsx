import { Box, Button, Font, List, ListItem } from '@system/figa-ui';
import { MainLayout } from '../../components';
import { article_actions } from '../../store/article';

const InitialScreen = () => {
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
                    <Button
                        onClick={() => article_actions.load({ lang: 'en', url: 'dasdsa' })}
                    >
                        Start
                    </Button>
                </Box>
            </Box>
        </MainLayout>
    );
};

export { InitialScreen };
