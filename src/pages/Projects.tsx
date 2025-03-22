import { Container, Typography, Grid, CardContent, CardMedia, CardActionArea, Link } from "@mui/material";
import { projects } from "../assets/constants";
import { AnimatedCard } from "../components/AminatedCard";

const Projects = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center">
                My Projects
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                Some of the projects I have worked on recently.
            </Typography>

            <Grid container spacing={4} >
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <AnimatedCard>
                            <CardActionArea component={Link} href={project.url} target="_blank" rel="noopener noreferrer">
                                <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </AnimatedCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;
