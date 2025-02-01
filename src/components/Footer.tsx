import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#282c34',
                color: 'white',
                padding: '20px 0',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" gutterBottom>
                &copy; {new Date().getFullYear()} Jagbir Singh Portfolio. All Rights Reserved.
            </Typography>
            <Typography variant="body2">
                <Link href="https://github.com/jagbirsaini95" color="inherit" target="_blank" rel="noopener noreferrer">
                    GitHub
                </Link>{' | '}
                <Link href="https://www.linkedin.com/in/jagbirsaini95" color="inherit" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
