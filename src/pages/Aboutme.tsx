import { Container, Typography } from "@mui/material";
import JSTimeline from "../components/JSTimeline";
import { AnimatedCard } from "../components/AminatedCard";
import { myInfo, skills } from "../assets/constants";

const Aboutme = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <AnimatedCard customStyle={{ padding: "20px" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                    {myInfo.description}
                </Typography>
            </AnimatedCard>
            <AnimatedCard customStyle={{ padding: "20px" }}>
                <Typography variant="h5" fontWeight="bold">
                    Skills
                </Typography>
                {Object.entries(skills).map(([category, skillList]) => (
                    <Typography key={category} variant="body2" color="textSecondary">
                        <strong>{category}:</strong> {skillList.join(", ")}
                    </Typography>
                ))}
            </AnimatedCard>
            <AnimatedCard customStyle={{ padding: "20px", 'margin-top': "10% !important" }}>
                <Typography variant="h5" fontWeight="bold">
                    Experience Timeline
                </Typography>
                <JSTimeline />
            </AnimatedCard>
        </Container>
    );
};

export default Aboutme;
