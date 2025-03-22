import { Container, Typography, Button, Grid, Avatar, Chip, Box } from "@mui/material";
import { GitHub, LinkedIn, Description } from "@mui/icons-material";
import resume from '../assets/Jagbir_Singh_SDE_Resume.pdf'
import { AnimatedCard } from "../components/AminatedCard";
import { myInfo, skills } from "../assets/constants";

const Home = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <AnimatedCard customstyle={{ padding: "20px", textAlign: 'center' }}>
                {/* Profile Section */}
                <Avatar
                    sx={{
                        width: 100,
                        height: 100,
                        margin: "auto",
                        backgroundColor: "secondary.main",
                        fontSize: "2rem",
                    }}
                >
                    {myInfo.name.trim().split(' ').map(word => word.charAt(0))}
                </Avatar>

                <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
                    {myInfo.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    {myInfo.designation}
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                    {myInfo.description}
                </Typography>
            </AnimatedCard>
            <AnimatedCard customstyle={{ padding: "20px", textAlign: 'center' }}>
                {/* Skills Section */}
                <Typography variant="h5" fontWeight="bold">
                    Key Skills
                </Typography>
                <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                    {skills.Frontend.map((skillchip, index) => (
                        <Grid item key={index}>
                            <Chip
                                label={skillchip} color="secondary" />
                        </Grid>
                    ))}
                </Grid>
            </AnimatedCard>
            <Box sx={{ textAlign: 'center' }}>
                {/* Buttons */}
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Description />}
                    href={resume}
                    target="_blank"
                    sx={{ m: 1 }}
                >
                    View Resume
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<GitHub />}
                    href={myInfo.gitHubURL}
                    target="_blank"
                    sx={{ m: 1 }}
                >
                    GitHub
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    startIcon={<LinkedIn />}
                    href={myInfo.linkedInURL}
                    target="_blank"
                    sx={{ m: 1 }}
                >
                    LinkedIn
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
