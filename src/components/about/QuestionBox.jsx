import React from 'react';
import { Box, Typography } from '@mui/material';
import { FadeIn } from '../animations/SmartAnimations';
import { ABOUT_STYLES, QUESTION_COLORS } from '../../constants/aboutContent';

const QuestionBox = ({ 
  question, 
  index, 
  isSelected, 
  onClick, 
  delay 
}) => {
  return (
    <FadeIn delay={delay}>
      <Box
        onClick={onClick}
        sx={{
          ...ABOUT_STYLES.questionBox,
          backgroundColor: isSelected 
            ? 'rgba(44, 60, 136, 0.2)' 
            : 'rgba(44, 60, 136, 0.1)',
          borderLeftColor: isSelected 
            ? QUESTION_COLORS[index] 
            : 'secondary.main',
        }}
      >
        <Typography 
          variant="body1" 
          sx={{
            color: 'text.primary',
            fontWeight: isSelected ? 600 : 500,
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {question}
          {isSelected && (
            <Box 
              component="span" 
              sx={{ 
                ml: 'auto',
                color: QUESTION_COLORS[index],
                fontSize: '0.8rem',
                fontWeight: 400,
              }}
            >
              ◀
            </Box>
          )}
        </Typography>
      </Box>
    </FadeIn>
  );
};

export default QuestionBox;
