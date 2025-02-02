import { Box, Typography, Link } from '@mui/material';
import { myInfo } from '../assets/constants';

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
                &copy; {new Date().getFullYear()} {myInfo.name} Portfolio. All Rights Reserved.
            </Typography>
            <Typography variant="body2">
                <Link href={myInfo.gitHubURL} color="inherit" target="_blank" rel="noopener noreferrer">
                    GitHub
                </Link>{' | '}
                <Link href={myInfo.linkedInURL} color="inherit" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </Link>
            </Typography>
        </Box>
    );
};

export default Footer;
