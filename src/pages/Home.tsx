import { Container, Typography, Button, Box, Grid, Paper, Avatar } from "@mui/material";
import { GitHub, LinkedIn, Description } from "@mui/icons-material";
import resume from '../assets/Jagbir_Singh_SDE_Resume.pdf'
import { AnimatedCard } from "../components/AminatedCard";
import { myInfo, skills } from "../assets/constants";

const Home = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <AnimatedCard customStyle={{ padding: "20px", textAlign: 'center' }}>
                {/* Profile Section */}
                <Avatar
                    sx={{
                        width: 100,
                        height: 100,
                        margin: "auto",
                        backgroundColor: "primary.main",
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

                {/* Skills Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Key Skills
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        {skills.Frontend.map((skillchip, index) => (
                            <Grid item key={index}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        borderRadius: "20px",
                                        backgroundColor: "secondary.light",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {skillchip}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Buttons */}
                <Box sx={{ mt: 4 }}>
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
            </AnimatedCard>
        </Container>
    );
};

export default Home;
