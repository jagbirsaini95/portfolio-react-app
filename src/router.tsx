import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Grid2 } from "@mui/material"
import Aboutme from "./components/Aboutme"
import Resume from "./pages/Resume"
import Portfolio from "./pages/Portfolio"
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";

const AppRouter = () => {
    return (
        <Router>
            <Container>
                <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ border: '2px solid red', padding: '20px' }}>
                    <Grid2 size={3} style={{ border: '2px solid red' }}>
                        <Aboutme />
                    </Grid2>
                    <Grid2 size={9} style={{ border: '2px solid red' }}>
                        <Routes>
                            <Route path="/" element={<Resume />} />
                            <Route path="/resume" element={<Resume />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                        <Footer />
                    </Grid2>
                </Grid2>
            </Container>
        </Router>
    );
};

export default AppRouter;
