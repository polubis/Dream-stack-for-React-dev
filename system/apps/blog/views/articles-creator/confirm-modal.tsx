import { Alert, Box, Button, Font, List, ListItem, Modal } from "@system/figa-ui";

const ConfirmModal = () => {
    return (
        // onClose={handleConfirmClose}
        <Modal >
            {/* <Box
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
            </Box> */}
        </Modal>
    )
};

export { ConfirmModal };
