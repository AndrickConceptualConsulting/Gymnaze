// React
import React from 'react';

// MUI
import { Box, Container, ToggleButtonGroup, ToggleButton } from '@mui/material';

// Local components
import { ScrollReveal } from '../animations/SmartAnimations';

// Constants
import { COMPONENT_STYLES } from '../../constants/athletesData';

// ===== ATHLETE TOGGLE SECTION =====
const AthleteToggleSection = ({ athleteType, onAthleteTypeChange, children }) => {
  return (
    <Box sx={{ backgroundColor: 'rgba(248, 249, 250, 0.6)' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
        <ScrollReveal direction="up" delay={0.2}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <ToggleButtonGroup
              value={athleteType}
              exclusive
              onChange={onAthleteTypeChange}
              aria-label="athlete type"
              sx={COMPONENT_STYLES.toggleButtonGroup}
            >
              <ToggleButton 
                value="high-school" 
                aria-label="high school athletes"
                title="View content for high school athletes"
              >
                High School Athletes
              </ToggleButton>
              <ToggleButton 
                value="college" 
                aria-label="college athletes"
                title="View content for college athletes"
              >
                College Athletes
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </ScrollReveal>

        {/* Dynamic Content */}
        {children}
      </Container>
    </Box>
  );
};

AthleteToggleSection.displayName = 'AthleteToggleSection';

export default AthleteToggleSection;
