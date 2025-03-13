import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Box, Button, MobileStepper, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    label: 'Take Our Food Quiz',
    description: 'Test your knowledge about food and culinary arts',
    imgPath: 'images/slider-1.jpg',
  },
  {
    label: 'Latest Food News',
    description: 'Stay updated with the latest trends in food industry',
    imgPath: 'images/slider-2.jpg',
  },
  {
    label: 'Learn About Cooking',
    description: 'Discover new recipes and cooking techniques',
    imgPath: 'images/slider-3.jpg',
  },
];

function HomeSlider() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;
  const [autoPlay, setAutoPlay] = useState(true);
  const [translateValue, setTranslateValue] = useState(0);

  const handleNext = () => {
    const nextStep = activeStep === maxSteps - 1 ? 0 : activeStep + 1;
    setActiveStep(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep === 0 ? maxSteps - 1 : activeStep - 1;
    setActiveStep(prevStep);
  };

  // Set up autoplay
  useEffect(() => {
    let interval;
    
    if (autoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeStep, autoPlay]);

  // Update the translation value whenever activeStep changes
  useEffect(() => {
    setTranslateValue(-activeStep * 100);
  }, [activeStep]);

  // Set up swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handleBack(),
    trackMouse: true,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: 500,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          {...handlers}
          sx={{
            width: '100%',
            height: 400,
            overflow: 'hidden',
            position: 'relative',
          }}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(${translateValue}%)`,
              width: `${slides.length * 100}%`,
              height: '100%',
            }}
          >
            {slides.map((step, index) => (
              <Box
                key={step.label}
                sx={{
                  height: '100%',
                  width: `${100 / slides.length}%`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundImage: `url(${step.imgPath})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Box 
                  sx={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                    p: 4, 
                    borderRadius: 2,
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h4" color="white" gutterBottom>
                    {step.label}
                  </Typography>
                  <Typography variant="subtitle1" color="white">
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ width: '100%', flexGrow: 1 }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </Paper>
    </Box>
  );
}

export default HomeSlider;