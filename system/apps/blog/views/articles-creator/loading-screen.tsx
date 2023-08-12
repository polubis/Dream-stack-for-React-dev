import { Box, Loader } from '@system/figa-ui';
import { MainLayout } from '../../components';
import { useArticlesCreatorStore } from '../../store/articles-creator';

const LoadingScreen = () => {
    const state = useArticlesCreatorStore();

    if (state.is !== 'loading') return null

    return (
        <MainLayout>
            <Box margin="auto">
                <Box margin="auto">
                    <Loader size="big" />
                </Box>
            </Box>
        </MainLayout>
    );
};

export { LoadingScreen };
