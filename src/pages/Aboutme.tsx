import { Container, Typography } from "@mui/material";
import JSTimeline from "../components/JSTimeline";
import { AnimatedCard } from "../components/AminatedCard";
import { myInfo, } from "../assets/constants";
import SkillTabs from "../components/SkillTabs";

const Aboutme = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <AnimatedCard customstyle={{ padding: "20px" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                    {myInfo.description}
                </Typography>
            </AnimatedCard>
            <AnimatedCard customstyle={{ padding: "20px" }}>
                <Typography variant="h5" fontWeight="bold">
                    Skills
                </Typography>
                <SkillTabs />
            </AnimatedCard>
            <AnimatedCard customstyle={{ padding: "20px", marginTop: "10% !important" }}>
                <Typography variant="h5" fontWeight="bold">
                    Experience Timeline
                </Typography>
                <JSTimeline />
            </AnimatedCard>
        </Container>
    );
};

export default Aboutme;
