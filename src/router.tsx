import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Container, } from "@mui/material"
import Aboutme from "./pages/Aboutme"
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppRouter = () => {
    return (
        <Router>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                justifyContent: "space-around"
            }}>
                <Sidebar />
                <Box sx={{
                    padding: '2%'
                }} >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<Aboutme />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Box>
                <Footer />
            </Container>
        </Router >
    );
};

export default AppRouter;
