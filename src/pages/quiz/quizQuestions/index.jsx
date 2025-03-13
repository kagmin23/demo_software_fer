import {
    Box,
    Card,
    CardContent,
    Paper,
    Radio,
    Stack,
    Typography
} from '@mui/material';
import PropTypes from 'prop-types';

const QuizQuestion = ({ question, currentAnswer, onAnswerChange }) => {
  return (
    <Card 
      elevation={3} 
      sx={{ 
        mb: 4, 
        borderRadius: 2,
        overflow: 'visible',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '5px',
          height: '100%',
          backgroundColor: 'primary.main',
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          color="primary.dark" 
          gutterBottom
          sx={{ mb: 3 }}
        >
          {question.question}
        </Typography>

        <Stack spacing={2}>
          {question.options.map((option, index) => (
            <Paper
              key={index}
              elevation={currentAnswer === option ? 2 : 0}
              sx={{
                p: 1.5,
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: currentAnswer === option ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                border: '1px solid',
                borderColor: currentAnswer === option ? 'primary.main' : 'grey.300',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  borderColor: 'primary.light'
                }
              }}
              onClick={() => onAnswerChange(question.id, option)}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Radio
                  checked={currentAnswer === option}
                  onChange={() => onAnswerChange(question.id, option)}
                  sx={{ mr: 1 }}
                  color="primary"
                />
                <Typography variant="body1">{option}</Typography>
              </Box>
            </Paper>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

// Add PropTypes validation
QuizQuestion.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  currentAnswer: PropTypes.string,
  onAnswerChange: PropTypes.func.isRequired
};

// Add default props
QuizQuestion.defaultProps = {
  currentAnswer: ''
};

export default QuizQuestion;