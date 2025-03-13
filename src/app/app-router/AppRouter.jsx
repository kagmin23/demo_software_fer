import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../../components/footer';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Home from '../../pages/home';
import News from '../../pages/news';
import Quiz from '../../pages/quiz';


function AppRouter() {
  return (
    <Router>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/news">News</Button>
            <Button color="inherit" component={Link} to="/quiz">Quiz</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 10, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
    
  );
}

export default AppRouter;