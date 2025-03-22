import { Box, Typography, Link, Grid } from '@mui/material';
import { myInfo } from '../assets/constants';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            sx={{
                marginTop: '20px',
                padding: '20px 0',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" gutterBottom>
                &copy; {new Date().getFullYear()} {myInfo.name} Portfolio. All Rights Reserved.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <Link color="secondary" href={myInfo.gitHubURL} target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <GitHub />
                        GitHub
                    </Link>
                </Grid>
                <Grid item>
                    <Link color="secondary" href={myInfo.linkedInURL} target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <LinkedIn />
                        LinkedIn
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
