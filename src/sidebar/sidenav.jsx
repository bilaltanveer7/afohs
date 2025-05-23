import * as React from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
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
import EmployeeProfileScreen from './profile';
import LoginActivityScreen from './activity';
import LogoutScreen from './logout';
import NewOrderDialog from './order';
import CloseIcon from "@mui/icons-material/Close";
import bellicon from '../assetts/bell-notification.png';
import { Modal, Slide } from '@mui/material';
import tableicon from '../assetts/Table management.svg'
import { ReactComponent as TableIcon } from '../assetts/Table management.svg';

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
    const [showProfile, setShowProfile] = React.useState(false)
    const [showOrder, setShowOrder] = React.useState(false)
    const [profileView, setProfileView] = React.useState("profile");
    const menuItems = [
        { text: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
        { text: "Inventory", icon: <InventoryIcon />, path: "/inventory" },
        { text: "Transaction", icon: <PeopleIcon />, path: "/transaction" },
        { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
        {
            text: "Table Management",
            icon: <TableIcon />,
            path: "/table/management"
        }
    ];
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                open={open}
                style={{
                    backgroundColor: "#D3E1EB",
                    height: '80px',
                    justifyContent: 'center',
                    zIndex: 1000
                }}
            >
                <Toolbar style={{
                    justifyContent: 'space-between', zIndex: 1000
                }}>
                    {/* Toggle Menu Icon */}
                    <IconButton
                        color="inherit"
                        aria-label="toggle drawer"
                        onClick={() => setOpen(!open)} // Toggle sidebar
                        edge="start"
                        sx={{ marginRight: 5, border: "1px solid #3F4E4F", borderRadius: "2px", }}
                    >
                        {open ? <MenuOpenIcon sx={{ color: '#3F4E4F', width: '20px', height: '20' }} /> : <MenuIcon sx={{ color: '#3F4E4F', width: '20px', height: '20' }} />} {/* Toggle between icons */}
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        {/* Notification Icon */}
                        <IconButton
                            onClick={() => setShowNotification(true)}
                            sx={{ border: "1px solid #3F4E4F", borderRadius: "2px", p: 1.3 }}
                        >
                            <img
                                src={bellicon}
                                alt=""
                                style={{ width: 17, height: 19 }}
                            />
                        </IconButton>
                        <Modal
                            open={showNotification}
                            onClose={() => setShowNotification(false)}
                            closeAfterTransition
                        >
                            <Slide direction="left" in={showNotification} mountOnEnter unmountOnExit>
                                <Box
                                    sx={{
                                        position: 'fixed',
                                        top: '10px',
                                        bottom: '10px',
                                        right: 10,
                                        width: { xs: '100%', sm: 600 },
                                        bgcolor: '#fff',
                                        boxShadow: 4,
                                        zIndex: 1300,
                                        overflowY: 'auto',
                                        borderRadius: 1,
                                        scrollbarWidth: 'none', // Firefox
                                        '&::-webkit-scrollbar': {
                                            display: 'none', // Chrome, Safari, Edge
                                        },
                                    }}
                                >
                                    <NotificationsPanel onClose={() => setShowNotification(false)} />
                                </Box>
                            </Slide>
                        </Modal>

                        {/* Vertical Divider */}
                        <Divider orientation="vertical" flexItem sx={{
                            backgroundColor: "#3F4E4F",  // Set color to black
                            height: "30px",
                            width: "1px",              // Increase thickness
                            opacity: 1,
                            mt: 1
                        }} />

                        {/* Profile Section */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: 'pointer' }}
                            onClick={() => setShowProfile(true)}
                        >
                            <Avatar
                                src="your-profile-image-url.jpg"
                                alt="User Profile"
                                sx={{ width: 40, height: 40, borderRadius: '0' }}
                            />
                            <Box>
                                <Typography sx={{ fontWeight: "bold", color: "#000" }}>MALIK</Typography>
                                <Typography sx={{ fontSize: "12px", color: "#666" }}>Admin</Typography>
                            </Box>
                        </Box>
                        <Modal
                            open={showProfile}
                            onClose={() => setShowProfile(false)}
                            aria-labelledby="profile-modal"
                            sx={{ zIndex: 1300 }}
                        >
                            <Box
                                sx={{
                                    position: 'fixed',
                                    top: '10px',
                                    bottom: '10px',
                                    right: 10,
                                    width: { xs: '100%', sm: 400 },
                                    bgcolor: '#fff',
                                    boxShadow: 4,
                                    zIndex: 1300,
                                    overflowY: 'auto',
                                    borderRadius: 2,
                                    scrollbarWidth: 'none',
                                    '&::-webkit-scrollbar': { display: 'none' },
                                }}
                            >

                                {/* Profile Modal Content */}
                                {profileView === "profile" ? (
                                    <EmployeeProfileScreen setProfileView={setProfileView} onClose={() => setShowProfile(false)} />
                                ) : profileView === "loginActivity" ? (
                                    <LoginActivityScreen setProfileView={setProfileView} />
                                ) : profileView === "logoutSuccess" ? (
                                    <LogoutScreen setProfileView={setProfileView} />
                                ) : null}
                            </Box>
                        </Modal>
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
                        onClick={() => navigate('/new/order')}
                    >
                        {open ? "+ New Order" : "+ New Order"} {/* Show full text only when open */}
                    </Button>
                    {/* <Modal
                        open={showOrder}
                        onClose={() => setShowOrder(false)}
                        aria-labelledby="new-order-modal"
                        sx={{ zIndex: 1300 }}
                    >
                        <Box
                            sx={{
                                position: 'fixed',
                                top: '10px',
                                bottom: '10px',
                                right: 10,
                                width: { xs: '100%', sm: 600 },
                                bgcolor: '#fff',
                                boxShadow: 4,
                                zIndex: 1300,
                                overflowY: 'auto',
                                borderRadius: 2,
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': { display: 'none' },
                            }}
                        >
                            <NewOrderDialog onClose={() => setShowOrder(false)} />
                        </Box>
                    </Modal> */}
                </Box>

                <List>
                    {menuItems.map(({ text, icon, path }) => {
                        const isSelected = location.pathname === path;

                        return (
                            <ListItem key={text} disablePadding sx={{ display: "block", p: 0.5 }}>
                                <ListItemButton
                                    onClick={() => navigate(path)}
                                    sx={{
                                        minHeight: 50,
                                        justifyContent: open ? "initial" : "center",
                                        // px: 5,
                                        mx: 3,
                                        borderRadius: "12px",
                                        backgroundColor: isSelected ? "#333" : "transparent", // Dark gray when selected
                                        "&:hover": {
                                            backgroundColor: "#444" // Slightly lighter gray on hover
                                        }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            justifyContent: "center",
                                            mr: open ? 1 : "auto",
                                            "& svg": {
                                                fill: isSelected ? "orange" : "#fff"
                                            }
                                        }}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                    {/* <ListItemIcon sx={{
                                        color: isSelected ? "orange" : "#fff", // Orange when selected, white otherwise
                                        minWidth: 0,
                                        justifyContent: "center",
                                        mr: open ? 1 : "auto"
                                    }}>
                                        {React.cloneElement(icon, { style: { color: isSelected ? "orange" : "#fff" } })}
                                    </ListItemIcon> */}
                                    <ListItemText
                                        primary={text}
                                        sx={{
                                            color: isSelected ? "orange" : "#fff", // Orange text when selected
                                            opacity: open ? 1 : 0
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </Box>
    );
}