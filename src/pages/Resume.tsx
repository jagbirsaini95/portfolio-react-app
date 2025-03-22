import {
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemText,
    Link,
    Box,
} from "@mui/material";
import { myInfo, experienceTimeline, projects, skills } from "./../assets/constants"; // Import your data

const Resume = () => {
    return (
        <Container maxWidth="md" sx={{ my: 4 }}>
            {/* Personal Info */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                        {myInfo.name}
                    </Typography>
                    <Typography variant="h5" color="secondary">
                        {myInfo.designation}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        <Link color="secondary" href={`mailto:${myInfo.email}`}>{myInfo.email}</Link> | {" "}
                        <Link color="secondary" href={myInfo.linkedInURL} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </Link>{" "}
                        | {" "}
                        <Link color="secondary" href={myInfo.gitHubURL} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </Link>
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 1 }}>
                        {myInfo.description}
                    </Typography>

                </CardContent>
            </Card>

            {/* Experience Section */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Experience
            </Typography>
            {experienceTimeline.map((exp, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h6" color="secondary">
                                {exp.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {exp.year}
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {exp.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}

            {/* Projects Section */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
                Projects
            </Typography>
            <Grid container spacing={2}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" color="secondary">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2">{project.description}</Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    {" "}
                                    <Link color="secondary" href={project.url} target="_blank" rel="noopener noreferrer">
                                        View Project
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Skills Section */}
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
                Skills
            </Typography>
            <Grid container spacing={2}>
                {Object.entries(skills).map(([category, skillList], index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
                                <Typography variant="h6" color="secondary">
                                    {category}
                                </Typography>
                                <List>
                                    {skillList.map((skill, i) => (
                                        <ListItem key={i} disablePadding>
                                            <ListItemText primary={`${skill}`} />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Resume;
