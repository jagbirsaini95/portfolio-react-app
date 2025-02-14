import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme"
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './styles/index.css'

const AppRouter = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Aboutme />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router >
    );
};

export default AppRouter;
