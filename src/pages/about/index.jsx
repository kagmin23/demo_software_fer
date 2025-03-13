import NewspaperIcon from '@mui/icons-material/Newspaper';
import QuizIcon from '@mui/icons-material/Quiz';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Avatar, Box, Divider, Grid, Paper, Typography } from '@mui/material';

function About() {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" paragraph>
                Learn more about our food quiz application and our mission.
            </Typography>
            <Divider sx={{ mb: 4 }} />

            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                    Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                    Our mission is to provide an engaging platform for food enthusiasts to test their knowledge
                    and stay updated with the latest trends in the culinary world. We believe that learning about
                    food should be fun and interactive, which is why we&apos;ve created this quiz application.
                </Typography>
                <Typography variant="body1">
                    Whether you&apos;re a professional chef, a home cook, or simply someone who enjoys good food,
                    our quizzes are designed to challenge and educate you about various aspects of food
                    and culinary arts.
                </Typography>
            </Paper>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                What We Offer
            </Typography>

            <Grid container spacing={4} sx={{ mt: 1, mb: 11 }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                            <QuizIcon fontSize="large" />
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                            Interactive Quizzes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Test your knowledge with our carefully crafted quizzes covering various food topics,
                            from cooking techniques to food history and international cuisines.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                        <Avatar sx={{ bgcolor: 'secondary.main', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                            <NewspaperIcon fontSize="large" />
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                            Food News
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Stay updated with the latest trends, events, and news in the food industry.
                            Our news section keeps you informed about what&apos;s happening in the culinary world.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                        <Avatar sx={{ bgcolor: 'success.main', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                            <RestaurantIcon fontSize="large" />
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                            Food Education
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Learn about various aspects of food through our quizzes and news articles.
                            Expand your culinary knowledge and discover new facts about food and cooking.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default About;