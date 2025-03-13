import { Alert, Box, Button, Divider, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import quizData from '../../data/quizDatas';
import QuizQuestion from './quizQuestions';

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allQuestionsAnswered = quizData.every(question => answers[question.id]);

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Food Knowledge Quiz
      </Typography>
      <Typography variant="body1" paragraph>
        Test your knowledge about food and culinary arts with our interactive quiz.
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {submitted ? (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom>
            Quiz Results
          </Typography>
          <Typography variant="h6" gutterBottom>
            Your score: {score} out of {quizData.length}
          </Typography>
          <Alert severity={score > quizData.length / 2 ? "success" : "info"} sx={{ mb: 2 }}>
            {score > quizData.length / 2 
              ? "Great job! You know your food facts!" 
              : "Keep learning about food to improve your score!"}
          </Alert>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleReset}
          >
            Take Quiz Again
          </Button>
        </Paper>
      ) : (
        <>
          {quizData.map(question => (
            <QuizQuestion
              key={question.id}
              question={question}
              currentAnswer={answers[question.id]}
              onAnswerChange={handleAnswerChange}
            />
          ))}
          
          <Box sx={{ mt: 3, mb: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSubmit}
              disabled={!allQuestionsAnswered}
            >
              Submit Answers
            </Button>
            
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={handleReset}
            >
              Reset
            </Button>
          </Box>
          
          {!allQuestionsAnswered && (
            <Alert severity="info">
              Please answer all questions before submitting.
            </Alert>
          )}
        </>
      )}
    </Box>
  );
}

export default Quiz;