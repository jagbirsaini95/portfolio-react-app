import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, } from "@mui/material"
import Aboutme from "./pages/Aboutme"
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const AppRouter = () => {
    return (
        <Router>
            <Container>
                <Sidebar />
                <div style={{ padding: '20px', marginLeft: '60px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<Aboutme />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </Container>
        </Router>
    );
};

export default AppRouter;
