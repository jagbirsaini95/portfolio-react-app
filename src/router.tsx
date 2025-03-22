import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme"
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './styles/index.css'
// import ResumeForm from "./pages/ResumeForm";
import Resume from "./pages/Resume";
import { IconButton } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useTheme } from "./context/ThemeContext";

const AppRouter = () => {
    const { darkMode, toggleTheme } = useTheme();
    return (
        <Router>
            <IconButton onClick={toggleTheme} color='inherit' sx={{
                position: "fixed", right: 40, bottom: 50, zIndex: 1, backgroundColor: `${darkMode ? 'black' : 'white'}`, animation: "glowing 1s infinite alternate",
                "@keyframes glowing": {
                    "0%": { boxShadow: "0px 0px 15px rgba(141, 30, 181, 0.5)" },
                    "100%": { boxShadow: "0px 0px 25px rgba(141, 30, 181, 1)" },
                },
            }} aria-label="Dark/light mode button">
                {darkMode ? <LightModeIcon fontSize="large" color="inherit" /> : <DarkModeIcon fontSize="large" />}
            </IconButton>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutme />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                {/* TODO */}
                {/* <Route path="/create-resume" element={<ResumeForm />} /> */}
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </Router >
    );
};

export default AppRouter;
