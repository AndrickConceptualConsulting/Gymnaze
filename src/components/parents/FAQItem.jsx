import React from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography 
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const FAQItem = ({ question, answer }) => {
  return (
    <Accordion
      sx={{
        backgroundColor: 'background.paper',
        border: '1px solid rgba(44, 60, 136, 0.2)',
        borderRadius: '12px !important',
        mb: 2,
        '&:before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: '0 0 16px 0',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}
        sx={{
          '& .MuiAccordionSummary-content': {
            margin: '16px 0',
          },
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: 'text.primary',
            fontWeight: 600,
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQItem;
