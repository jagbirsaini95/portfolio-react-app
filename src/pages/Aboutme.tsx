import { Container, Typography, Link, Box, Grid } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
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
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Skills
                    </Typography>
                    {Object.entries(skills).map(([category, skillList]) => (
                        <Typography key={category} variant="body2" color="textSecondary">
                            <strong>{category}:</strong> {skillList.join(", ")}
                        </Typography>
                    ))}
                </Box>
            </AnimatedCard>
            <AnimatedCard customStyle={{ padding: "20px" }}>
                <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
                    Experience Timeline
                </Typography>
                <JSTimeline />

                <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Typography variant="h5" fontWeight="bold">
                        Social Links
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" sx={{ mt: 1 }}>
                        <Grid item>
                            <Link href={myInfo.gitHubURL} target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <GitHub />
                                GitHub
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={myInfo.linkedInURL} target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <LinkedIn />
                                LinkedIn
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </AnimatedCard>
        </Container>
    );
};

export default Aboutme;
