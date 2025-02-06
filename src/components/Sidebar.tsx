import { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, ListItemButton } from "@mui/material";
import { Home, Info, Work, ContactMail, Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { myInfo } from "../assets/constants";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const menuItems = [
        { text: "Home", icon: <Home />, path: "/" },
        { text: "About", icon: <Info />, path: "/about" },
        { text: "Projects", icon: <Work />, path: "/projects" },
        { text: "Contact", icon: <ContactMail />, path: "/contact" },
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
        toggleDrawer();
    };

    return (
        <>
            <IconButton onClick={toggleDrawer} sx={{ position: "fixed", top: 10, left: 10, zIndex: 1 }}>
                <Menu />
            </IconButton>

            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <List sx={{ width: 250 }}>
                    <ListItem>
                        <ListItemText primary={myInfo.name.trim().split(' ')[0].concat("'s Portfolio")} sx={{ fontWeight: "bold", textAlign: "center" }} />
                    </ListItem>
                    <Divider />
                    {menuItems.map((item, index) => (
                        <ListItemButton key={index} onClick={() => handleNavigation(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
