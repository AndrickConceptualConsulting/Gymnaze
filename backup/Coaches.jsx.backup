import React from 'react';
import {
  Box,
  Typography,
  Container,
  ToggleButtonGroup,
  ToggleButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ScrollReveal } from '../components/animations/SmartAnimations';
import { useLeadershipToggle } from '../hooks/useLeadershipToggle';
import { leadershipConfig } from '../data/coachesContent';
import HeroSection from '../components/coaches/HeroSection';
import TraitsSection from '../components/coaches/TraitsSection';
import ToolsSection from '../components/coaches/ToolsSection';
import CultureSection from '../components/coaches/CultureSection';
import CTASection from '../components/coaches/CTASection';

const Coaches = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [leadershipType, setLeadershipType] = useLeadershipToggle();

  const handleLeadershipTypeChange = (event, newLeadershipType) => {
    if (newLeadershipType !== null) {
      setLeadershipType(newLeadershipType);
    }
  };

  const config = leadershipConfig[leadershipType];

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* SEO Title as H1 */}
      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
        <ScrollReveal direction="up" delay={0.1}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'text.primary',
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2,
              textAlign: 'center',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            Smarter Athlete Evaluation Starts With the Right Checklist
          </Typography>
        </ScrollReveal>
      </Container>

      {/* Toggle Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 } }}>
        <ScrollReveal direction="up" delay={0.2}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <ToggleButtonGroup
              value={leadershipType}
              exclusive
              onChange={handleLeadershipTypeChange}
              aria-label="leadership type"
              sx={{
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0, 172, 205, 0.3)',
                borderRadius: '12px',
                '& .MuiToggleButton-root': {
                  color: 'text.secondary',
                  border: 'none',
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    backgroundColor: 'secondary.main',
                    color: 'background.default',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(0, 172, 205, 0.1)',
                  },
                },
              }}
            >
              <ToggleButton value="high-school" aria-label="high school sports leadership">
                High School Leadership
              </ToggleButton>
              <ToggleButton value="college" aria-label="college sports leadership">
                College Leadership
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </ScrollReveal>

        {/* Dynamic Content Based on Toggle */}
        <HeroSection config={config} />
        <TraitsSection config={config} />
        <ToolsSection config={config} imagePosition="right" />
        <CultureSection config={config} imagePosition="left" />
        <CTASection config={config} />
      </Container>
    </Box>
  );
};

export default Coaches;
