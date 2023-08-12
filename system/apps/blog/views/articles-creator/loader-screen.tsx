import { Box, Loader } from "@system/figa-ui"
import { MainLayout } from "../../components"

const LoaderScreen = () => {
    return (
        <MainLayout>
            <Box margin="auto">
                <Box margin="auto">
                    <Loader size="big" />
                </Box>
            </Box>
        </MainLayout>
    )
}

export { LoaderScreen }