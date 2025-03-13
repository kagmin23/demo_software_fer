import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeSlider from './home-slide';

function Home() {
    return (
        <div>
            <Box>
                <HomeSlider />

                <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to Our Food Quiz App
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Test your knowledge about food, cooking, and culinary news with our interactive quizzes.
                        Stay updated with the latest food trends and news from around the world.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/quiz"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        Start Quiz Now
                    </Button>
                </Box>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={4}>
                        <Card elevation={3} sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://i.ytimg.com/vi/0Re4soiUdzs/maxresdefault.jpg"
                                alt="Quiz feature"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Interactive Quizzes
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Test your knowledge with our fun and educational food quizzes.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card elevation={3} sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://image.isu.pub/221213172257-dc32c1f705305be79e52b0df8f4ce8fb/jpg/page_1_thumb_large.jpg"
                                alt="News feature"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Latest Food News
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Stay updated with the latest trends and news in the food industry.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card elevation={3} sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://t3.ftcdn.net/jpg/06/05/16/18/360_F_605161840_rHNKtjqEo2ADf16hRTWi0ojlw9V6VN1e.jpg"
                                alt="Contact feature"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Get In Touch
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Have questions or feedback? Contact us to share your thoughts.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;