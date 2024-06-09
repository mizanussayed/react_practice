import { Logout, Mail, Notifications, PersonAdd, Pets, Settings } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, Divider, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import { useState } from "react"

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

const ProfileMenu = styled(Menu)(({theme}) => ({
    top:"0"
}))

const Navbar = () => {
    const [open, setOpen] = useState(false);

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
                        onClick={() => setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://avatars.githubusercontent.com/u/60483815?v=4"
                        onClick={() => setOpen(true)}
                    />
                    <Typography>Mizanussayed</Typography>
                </UserBox>
            </StyledToolbar>
            <ProfileMenu
                id="account-menu"
                open={open}
                onClose={() => setOpen(false)}            
                PaperProps={{
                    elevation: 1,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem >
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </ProfileMenu>
        </AppBar>
    )
}

export default Navbar