import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, Avatar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import logo1 from '../assetts/slogo.png';
import logo2 from '../assetts/Logo.png';
import NotificationsPanel from './notification';
import CloseIcon from "@mui/icons-material/Close";
import './style.css'

const drawerWidthOpen = 240; // Set open width to 240px
const drawerWidthClosed = 110; // Set closed width to 120px

const openedMixin = (theme) => ({
    width: drawerWidthOpen,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: drawerWidthClosed,
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        width: open ? drawerWidthOpen : drawerWidthClosed,
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        "& .MuiDrawer-paper": {
            width: open ? drawerWidthOpen : drawerWidthClosed, // Ensure proper width change
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
            }),
            backgroundColor: "#000", // Keep the black background
            color: "#fff",
            ...(open ? openedMixin(theme) : closedMixin(theme)),
        },
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? drawerWidthOpen : drawerWidthClosed,
    width: `calc(100% - ${open ? drawerWidthOpen : drawerWidthClosed}px)`,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
}));

export default function SideNav({ open, setOpen }) {
    const [showNotification, setShowNotification] = React.useState(false)
    const menuItems = [
        { text: "Home", icon: <HomeIcon /> },
        { text: "Inventory", icon: <InventoryIcon /> },
        { text: "Members", icon: <PeopleIcon /> },
        { text: "Settings", icon: <SettingsIcon /> }
    ];

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={open}
                style={{
                    backgroundColor: "#BBC6CE",
                    height: '60px',
                    justifyContent: 'center',
                }}
            >
                <Toolbar style={{
                    justifyContent: 'space-between'
                }}>
                    {/* Toggle Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="toggle drawer"
                        onClick={() => setOpen(!open)} // Toggle sidebar
                        edge="start"
                        sx={{ marginRight: 5, border: "1px solid #000", borderRadius: "8px", p: 1 }}
                    >
                        {open ? <MenuOpenIcon sx={{ color: '#000' }} /> : <MenuIcon sx={{ color: '#000' }} />} {/* Toggle between icons */}
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {/* Notification Icon */}
                        <IconButton sx={{ border: "1px solid #000", borderRadius: "8px", p: 1 }}>
                            <NotificationsNoneIcon sx={{ color: "#000" }}
                                onClick={() => setShowNotification(true)} />
                        </IconButton>
                        <div className={`slide-panel-noti ${showNotification ? "open" : ""}`}>
                            <button className="close-btn" onClick={() => setShowNotification(false)}>
                                <CloseIcon fontSize="medium" />
                            </button>
                            <div className="slide-panel-noti-content">
                                <NotificationsPanel />
                            </div>
                        </div>

                        {/* Vertical Divider */}
                        <Divider orientation="vertical" flexItem sx={{
                            backgroundColor: "black",  // Set color to black
                            width: "1px",              // Increase thickness
                            opacity: 1
                        }} />

                        {/* Profile Section */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Avatar
                                src="your-profile-image-url.jpg"
                                alt="User Profile"
                                sx={{ width: 40, height: 40 }}
                            />
                            <Box>
                                <Typography sx={{ fontWeight: "bold", color: "#000" }}>MALIK</Typography>
                                <Typography sx={{ fontSize: "12px", color: "#666" }}>Admin</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Sidebar Drawer */}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
                    <img
                        src={open ? logo2 : logo1}
                        alt="Sidebar Logo"
                        style={{
                            width: open ? "180px" : "80px",
                            transition: "width 0.3s ease-in-out",
                        }}
                    />
                </DrawerHeader>
                <Divider sx={{ backgroundColor: "#4A4A4A", mt: 1 }} />
                <Box sx={{ display: "flex", justifyContent: "center", p: 1, mt: 2 }}>
                    <Button
                        variant="text"
                        sx={{
                            backgroundColor: "#0A2647",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#09203F" },
                            width: open ? "90%" : "100px", // Adjust width dynamically
                            minWidth: "50px", // Prevents shrinking too much
                            height: "40px", // Ensures uniform button height
                            fontSize: open ? "16px" : "12px", // Reduce font size when closed
                            textTransform: "none",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease-in-out",
                        }}
                    >
                        {open ? "+ New Order" : "+ New Order"} {/* Show full text only when open */}
                    </Button>
                </Box>

                <List>
                    {menuItems.map(({ text, icon }, index) => (
                        <ListItem key={text} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 60,
                                    justifyContent: open ? "initial" : "center",
                                    px: 5,
                                }}
                            >
                                <ListItemIcon sx={{ color: "#fff", minWidth: 0, justifyContent: "center", mr: open ? 3 : "auto" }}>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}