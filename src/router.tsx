import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid2 } from "@mui/material"
import Aboutme from "./components/Aboutme"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Container>
                <Grid2>
                    <Aboutme />
                </Grid2>
                <Grid2>
                    <Routes>
                        <Route path="/" element={<Resume />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                    <Footer />
                </Grid2>
            </Container>
        </Router>
    );
};

export default AppRouter;
