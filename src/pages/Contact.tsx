import { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { Send } from "@mui/icons-material";
import { myInfo } from "../assets/constants";
import { AnimatedCard } from "../components/AminatedCard";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const mailtoLink = `mailto:${myInfo.email}?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <AnimatedCard customstyle={{ padding: "20px" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Me
                </Typography>
                <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
                    Feel free to reach out via email.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        label="Your Name"
                        name="name"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        fullWidth
                        required
                        margin="normal"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Your Message"
                        name="message"
                        fullWidth
                        required
                        multiline
                        rows={4}
                        margin="normal"
                        variant="outlined"
                        value={formData.message}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                        sx={{ mt: 2 }}
                        startIcon={<Send />}
                    >
                        Send Email
                    </Button>
                </Box>
            </AnimatedCard>
        </Container>
    );
};

export default Contact;
