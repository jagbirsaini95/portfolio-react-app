import { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    ListItemButton,
    Box,
    useMediaQuery,
} from "@mui/material";
import { Home, Info, Work, ContactMail, Menu, Summarize } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { myInfo } from "../assets/constants";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    // Detect screen size
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Mobile: md and below (<=960px)

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const menuItems = [
        { text: "Home", icon: <Home />, path: "/" },
        { text: "About", icon: <Info />, path: "/about" },
        { text: "Projects", icon: <Work />, path: "/projects" },
        { text: "Contact", icon: <ContactMail />, path: "/contact" },
        { text: "Resume", icon: <Summarize />, path: "/resume" },
        // { text: "Create Resume", icon: <RestaurantMenuSharp />, path: "/create-resume" }, TODO
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
        toggleDrawer();
    };

    return (
        <>
            {/* Mobile Sidebar */}
            {isMobile ? (
                <>
                    <IconButton onClick={toggleDrawer} color="inherit" sx={{ position: "fixed", top: 10, left: 10, zIndex: 1 }}>
                        <Menu />
                    </IconButton>

                    <Drawer anchor="left" open={open} onClose={toggleDrawer} sx={{
                        "& .MuiDrawer-paper": {
                        },
                    }}>
                        <List sx={{
                            width: 250,
                        }}>
                            <ListItem>
                                <ListItemText primary={myInfo.name.trim().split(' ')[0].concat("'s Portfolio")} sx={{ fontWeight: "bold", textAlign: "center" }} />
                            </ListItem>
                            <Divider />
                            {menuItems.map((item, index) => (
                                <ListItemButton key={index} onClick={() => handleNavigation(item.path)}>
                                    <ListItemIcon sx={{
                                    }}>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Drawer>
                </>
            ) : (
                // Navbar for Tabs & Laptops
                <AppBar position="static" sx={{
                     backgroundColor: "#282c34",
                    position: 'sticky', top: 0, zIndex: 1
                }}>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                            {myInfo.name.trim().split(" ")[0].concat("'s Portfolio")}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            {menuItems.map((item, index) => (
                                <IconButton key={index} color="inherit" onClick={() => navigate(item.path)}>
                                    {item.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
};

export default Sidebar;
