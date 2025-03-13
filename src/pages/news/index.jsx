import { Box, Divider, Grid, Typography } from '@mui/material';
import newsData from '../../data/newDatas';
import NewsItem from './NewsItem';

function News() {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Food News
      </Typography>
      <Typography variant="body1" paragraph>
        Stay updated with the latest news and trends in the food industry.
      </Typography>
      <Divider sx={{ mb: 4 }} />
      
      <Grid container spacing={4}>
        {newsData.map((news) => (
          <Grid item key={news.id} xs={12} sm={6} md={4}>
            <NewsItem news={news} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default News;