import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Link,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.dark', color: 'white', pt: 6, pb: 3, mt: 5 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Quiz Application
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Test your knowledge with our interactive quizzes on various topics. Learn while having fun!
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="facebook" color="inherit" size="small" sx={{ '&:hover': { color: 'primary.light' } }}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="twitter" color="inherit" size="small" sx={{ '&:hover': { color: 'primary.light' } }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton aria-label="instagram" color="inherit" size="small" sx={{ '&:hover': { color: 'primary.light' } }}>
                                <InstagramIcon />
                            </IconButton>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Quick Links
                        </Typography>
                        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                            {[
                                { text: 'Home', path: '/' },
                                { text: 'News', path: '/news' },
                                { text: 'Quiz', path: '/quiz' },
                                { text: 'About', path: '/about' },
                                { text: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <Box component="li" key={link.text} sx={{ mb: 1 }}>
                                    <Link
                                        component={RouterLink}
                                        to={link.path}
                                        color="inherit"
                                        sx={{
                                            textDecoration: 'none',
                                            '&:hover': {
                                                textDecoration: 'underline',
                                                color: 'primary.light'
                                            }
                                        }}
                                    >
                                        {link.text}
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">
                            Newsletter
                        </Typography>
                        <Typography variant="body2" paragraph>
                            Subscribe to our newsletter to get updates on our latest quizzes and news.
                        </Typography>
                        <Box component="form" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                            <TextField
                                size="small"
                                variant="outlined"
                                placeholder="Your Email"
                                fullWidth
                                sx={{
                                    backgroundColor: 'background.paper',
                                    borderRadius: 1
                                }}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    whiteSpace: 'nowrap',
                                    minWidth: { xs: '100%', sm: 'auto' }
                                }}
                            >
                                Subscribe
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} Quiz Application. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;