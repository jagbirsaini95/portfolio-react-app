import { Container, Typography, Button, Box, Grid, Paper, Avatar } from "@mui/material";
import { GitHub, LinkedIn, Description } from "@mui/icons-material";
import resume from '../assets/Jagbir_Singh_SDE_Resume.pdf'

const skills = ["React", "Redux", "Angular", "Express.js", "Socket.IO", "MongoDB", "Git", "Postman"];

const Home = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
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
                    JS
                </Avatar>

                <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
                    Jagbir Singh
                </Typography>
                <Typography variant="h6" color="textSecondary">
                    Software Developer | React | Angular | Node.js
                </Typography>
                <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                    Passionate Software Developer with 3 years of experience in developing scalable web applications using modern technologies like React, Redux, Angular, Node.js, and MongoDB.
                </Typography>

                {/* Skills Section */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Key Skills
                    </Typography>
                    <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        {skills.map((skill, index) => (
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
                                    {skill}
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
                        sx={{ mx: 1 }}
                    >
                        View Resume
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<GitHub />}
                        href="https://github.com/jagbirsaini95"
                        target="_blank"
                        sx={{ mx: 1 }}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<LinkedIn />}
                        href="https://www.linkedin.com/in/jagbirsaini95"
                        target="_blank"
                        sx={{ mx: 1 }}
                    >
                        LinkedIn
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Home;
