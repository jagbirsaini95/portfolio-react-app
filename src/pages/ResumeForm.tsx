import { useState } from 'react';
import {
    Box,
    Button,
    Container,
    Paper,
    Stepper,
    Step,
    StepLabel,
    Typography,
    TextField,
    Grid,
    IconButton,
    Card,
    CardContent,
    useMediaQuery,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, Download as DownloadIcon } from '@mui/icons-material';
import { ResumeData } from '../types/Resume';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useTheme } from "@mui/material/styles";
import '../styles/resume.css'

const steps = ['Personal Information', 'Education', 'Experience', 'Skills & Projects'];

const initialResumeData: ResumeData = {
    personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: '',
    },
    education: [{
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
    }],
    experience: [{
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
    }],
    skills: [{
        name: '',
        level: 'Intermediate',
    }],
    projects: [{
        name: '',
        description: '',
        technologies: '',
        link: '',
    }],
};

const ResumeForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);

    const theme = useTheme();

    // Detect screen size
    const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Mobile: md and below (<=960px)


    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
        console.log(resumeData);

    };

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };

    const handlePersonalInfoChange = (field: string, value: string) => {
        setResumeData((prev) => ({
            ...prev,
            personalInfo: {
                ...prev.personalInfo,
                [field]: value,
            },
        }));
    };

    const handleEducationChange = (index: number, field: string, value: string) => {
        setResumeData((prev) => {
            const newEducation = [...prev.education];
            newEducation[index] = {
                ...newEducation[index],
                [field]: value,
            };
            return { ...prev, education: newEducation };
        });
    };

    const addEducation = () => {
        setResumeData((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    institution: '',
                    degree: '',
                    field: '',
                    startDate: '',
                    endDate: '',
                    gpa: '',
                },
            ],
        }));
    };

    const removeEducation = (index: number) => {
        setResumeData((prev) => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index),
        }));
    };

    const handleExperienceChange = (index: number, field: string, value: string) => {
        setResumeData((prev) => {
            const newExperience = [...prev.experience];
            newExperience[index] = {
                ...newExperience[index],
                [field]: value,
            };
            return { ...prev, experience: newExperience };
        });
    };

    const addExperience = () => {
        setResumeData((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    company: '',
                    position: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
        }));
    };

    const removeExperience = (index: number) => {
        setResumeData((prev) => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index),
        }));
    };

    const downloadPDF = async () => {
        const resumeElement = document.getElementById('resume-preview');
        if (resumeElement) {
            const canvas = await html2canvas(resumeElement);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('resume.pdf');
        }
    };
    // ToDo
    // const downloadDOC = () => {
    //     const resumeElement = document.getElementById('resume-preview');
    //     if (resumeElement) {
    //         const content = resumeElement.innerHTML;
    //         const blob = new Blob([content], { type: 'application/msword' });
    //         const url = URL.createObjectURL(blob);
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.download = 'resume.doc';
    //         link.click();
    //         URL.revokeObjectURL(url);
    //     }
    // };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Full Name"
                                value={resumeData.personalInfo.fullName}
                                onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                value={resumeData.personalInfo.email}
                                onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Phone"
                                value={resumeData.personalInfo.phone}
                                onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Location"
                                value={resumeData.personalInfo.location}
                                onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="LinkedIn"
                                value={resumeData.personalInfo.linkedin}
                                onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="GitHub (Optional)"
                                value={resumeData.personalInfo.github}
                                onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                );

            case 1:
                return (
                    <Box>
                        {resumeData.education.map((edu, index) => (
                            <Card key={index} sx={{ mb: 2 }}>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Institution"
                                                value={edu.institution}
                                                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Degree"
                                                value={edu.degree}
                                                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Field of Study"
                                                value={edu.field}
                                                onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                fullWidth
                                                label="Start Date"
                                                type="date"
                                                value={edu.startDate}
                                                onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                fullWidth
                                                label="End Date"
                                                type="date"
                                                value={edu.endDate}
                                                onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextField
                                                fullWidth
                                                label="GPA"
                                                value={edu.gpa}
                                                onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <IconButton
                                                color="error"
                                                onClick={() => removeEducation(index)}
                                                disabled={resumeData.education.length === 1}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))}
                        <Button startIcon={<AddIcon />} onClick={addEducation}>
                            Add Education
                        </Button>
                    </Box>
                );

            case 2:
                return (
                    <Box>
                        {resumeData.experience.map((exp, index) => (
                            <Card key={index} sx={{ mb: 2 }}>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Company"
                                                value={exp.company}
                                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Position"
                                                value={exp.position}
                                                onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="Start Date"
                                                type="date"
                                                value={exp.startDate}
                                                onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                fullWidth
                                                label="End Date"
                                                type="date"
                                                value={exp.endDate}
                                                onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                label="Description"
                                                value={exp.description}
                                                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                                                helperText="Use bullet points and action verbs. Focus on achievements and metrics."
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <IconButton
                                                color="error"
                                                onClick={() => removeExperience(index)}
                                                disabled={resumeData.experience.length === 1}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        ))}
                        <Button startIcon={<AddIcon />} onClick={addExperience}>
                            Add Experience
                        </Button>
                    </Box>
                );

            case 3:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h6">Skills</Typography>
                            {resumeData.skills.map((skill, index) => (
                                <Box key={index} sx={{ mb: 2 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Skill"
                                                value={skill.name}
                                                onChange={(e) => {
                                                    const newSkills = [...resumeData.skills];
                                                    newSkills[index] = { ...skill, name: e.target.value };
                                                    setResumeData({ ...resumeData, skills: newSkills });
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                startIcon={<AddIcon />}
                                onClick={() => {
                                    setResumeData({
                                        ...resumeData,
                                        skills: [...resumeData.skills, { name: '', level: 'Intermediate' }],
                                    });
                                }}
                            >
                                Add Skill
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Projects</Typography>
                            {resumeData.projects.map((project, index) => (
                                <Card key={index} sx={{ mb: 2 }}>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Project Name"
                                                    value={project.name}
                                                    onChange={(e) => {
                                                        const newProjects = [...resumeData.projects];
                                                        newProjects[index] = { ...project, name: e.target.value };
                                                        setResumeData({ ...resumeData, projects: newProjects });
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={3}
                                                    label="Description"
                                                    value={project.description}
                                                    onChange={(e) => {
                                                        const newProjects = [...resumeData.projects];
                                                        newProjects[index] = { ...project, description: e.target.value };
                                                        setResumeData({ ...resumeData, projects: newProjects });
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Technologies Used"
                                                    value={project.technologies}
                                                    onChange={(e) => {
                                                        const newProjects = [...resumeData.projects];
                                                        newProjects[index] = { ...project, technologies: e.target.value };
                                                        setResumeData({ ...resumeData, projects: newProjects });
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Project Link (Optional)"
                                                    value={project.link}
                                                    onChange={(e) => {
                                                        const newProjects = [...resumeData.projects];
                                                        newProjects[index] = { ...project, link: e.target.value };
                                                        setResumeData({ ...resumeData, projects: newProjects });
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            ))}
                            <Button
                                startIcon={<AddIcon />}
                                onClick={() => {
                                    setResumeData({
                                        ...resumeData,
                                        projects: [
                                            ...resumeData.projects,
                                            { name: '', description: '', technologies: '', link: '' },
                                        ],
                                    });
                                }}
                            >
                                Add Project
                            </Button>
                        </Grid>
                    </Grid>
                );

            default:
                return null;
        }
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ p: 4, my: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    ATS-Optimized Resume Builder
                </Typography>
                <Stepper activeStep={activeStep} sx={{ py: 4 }} className={isMobile ? 'steps-resume-mobile-view' : ''}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ mt: 4 }}>
                    {activeStep === steps.length ? (
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Resume Preview
                            </Typography>
                            <Paper id="resume-preview" elevation={1} sx={{ p: 4, mb: 4 }}>
                                {/* Resume Preview Content */}
                                <Typography variant="h4" gutterBottom>
                                    {resumeData.personalInfo.fullName}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    {resumeData.personalInfo.location}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    LinkedIn: {resumeData.personalInfo.linkedin}
                                    {resumeData.personalInfo.github && ` | GitHub: ${resumeData.personalInfo.github}`}
                                </Typography>

                                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                                    Education
                                </Typography>
                                {resumeData.education.map((edu, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {edu.institution}
                                        </Typography>
                                        <Typography variant="body1">
                                            {edu.degree} in {edu.field}
                                        </Typography>
                                        <Typography variant="body2">
                                            {edu.startDate} - {edu.endDate} | GPA: {edu.gpa}
                                        </Typography>
                                    </Box>
                                ))}

                                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                                    Experience
                                </Typography>
                                {resumeData.experience.map((exp, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {exp.company}
                                        </Typography>
                                        <Typography variant="body1">{exp.position}</Typography>
                                        <Typography variant="body2">
                                            {exp.startDate} - {exp.endDate}
                                        </Typography>
                                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                                            {exp.description}
                                        </Typography>
                                    </Box>
                                ))}

                                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                                    Skills
                                </Typography>
                                <Typography variant="body1">
                                    {resumeData.skills.map((skill) => skill.name).join(' • ')}
                                </Typography>

                                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                                    Projects
                                </Typography>
                                {resumeData.projects.map((project, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography variant="subtitle1" fontWeight="bold">
                                            {project.name}
                                            {project.link && (
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    sx={{ ml: 1 }}
                                                >
                                                    ({project.link})
                                                </Typography>
                                            )}
                                        </Typography>
                                        <Typography variant="body1">{project.description}</Typography>
                                        <Typography variant="body2">
                                            Technologies: {project.technologies}
                                        </Typography>
                                    </Box>
                                ))}
                            </Paper>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button onClick={() => setActiveStep(activeStep - 1)}>Back</Button>
                                <Box>
                                    <Button
                                        variant="contained"
                                        startIcon={<DownloadIcon />}
                                        onClick={downloadPDF}
                                        sx={{ mr: 2 }}
                                    >
                                        Download PDF
                                    </Button>
                                    {/* <Button
                                        variant="contained"
                                        startIcon={<DownloadIcon />}
                                        onClick={downloadDOC}
                                    >
                                        Download DOC
                                    </Button> */}
                                </Box>
                            </Box>
                        </Box>
                    ) : (
                        <Box>
                            {renderStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                >
                                    {activeStep === steps.length - 1 ? 'Preview' : 'Next'}
                                </Button>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default ResumeForm;