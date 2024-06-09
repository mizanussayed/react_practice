import { Mail, Notifications, Pets } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography, styled } from "@mui/material"

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant="h6"
                    sx={{ display: { xs: "none", sm: "block" } }}>
                    Logo
                </Typography>
                <Pets
                    sx={{ display: { xs: "block", sm: "none" } }} />
                <Search>
                    <InputBase placeholder="search ...... " />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>

                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://avatars.githubusercontent.com/u/60483815?v=4"
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://avatars.githubusercontent.com/u/60483815?v=4"
                    />
                    <Typography>Mizanussayed</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar