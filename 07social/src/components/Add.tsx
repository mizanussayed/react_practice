import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material"
import { useState } from "react"

const StyleModal = styled(Modal)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}))
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "20px",
})

export const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Create post"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400}
                    height={280}
                    bgcolor={"background.default"}
                    color={"text.primary"}
                    p={3}
                    borderRadius={5}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://avatars.githubusercontent.com/u/60483815?v=4"
                            onClick={() => setOpen(true)}
                        />
                        <Typography>Mizanussayed</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        placeholder="Whats on your mind?"
                        multiline
                        rows={4}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="Basic button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    )
}
