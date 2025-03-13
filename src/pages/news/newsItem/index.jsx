import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function NewsItem({ news }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={news.images}
        alt={news.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {news.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Read More</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

// Add PropTypes validation
NewsItem.propTypes = {
  news: PropTypes.shape({
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default NewsItem;