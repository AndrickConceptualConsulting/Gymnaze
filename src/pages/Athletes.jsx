// React & external libs
import React, { useMemo } from 'react';

// MUI
import { Box, Typography, Container } from '@mui/material';

// MUI Icons
import {
  Psychology as PsychologyIcon,
  EmojiEvents as EmojiEventsIcon,
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  SportsFootball as SportsFootballIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

// Local components
import { ScrollReveal } from '../components/animations/SmartAnimations';
import { 
  HighSchoolContent, 
  CollegeContent, 
  AthleteToggleSection, 
  AthleteCTASection 
} from '../components/athletes';

// Hooks
import { useAthleteToggle } from '../hooks/useAthleteToggle';

// Constants
import { TRAITS_DATA, BENEFITS, CONTENT, COMPONENT_STYLES } from '../constants/athletesData';

// ===== ICON MAPPING =====
const iconMap = {
  Psychology: PsychologyIcon,
  EmojiEvents: EmojiEventsIcon,
  Groups: GroupsIcon,
  TrendingUp: TrendingUpIcon,
  School: SchoolIcon,
  SportsFootball: SportsFootballIcon,
  Speed: SpeedIcon,
};

// ===== ATHLETE CONTENT MAPPING =====
const AthleteContent = {
  'high-school': HighSchoolContent,
  college: CollegeContent,
};

// ===== ANALYTICS TRACKING =====
const handleTestClick = () => {
  // Track CTA clicks - integrate with your analytics platform
  console.log('Athletes: Take the Test button clicked');
  // Example integrations:
  // gtag('event', 'click', { event_category: 'CTA', event_label: 'Athletes Test' });
  // mixpanel.track('Athletes Test Click');
};

const handleDemoClick = () => {
  // Track demo clicks
  console.log('Athletes: See Your Report button clicked');
  // Example integrations:
  // gtag('event', 'click', { event_category: 'CTA', event_label: 'Athletes Demo' });
  // mixpanel.track('Athletes Demo Click');
};

// ===== MAIN COMPONENT =====
const Athletes = () => {
  // Use the custom hook for athlete type toggle
  const [athleteType, setAthleteType] = useAthleteToggle();

  // Memoized data for performance with JSX icons
  const currentTraits = useMemo(() => {
    return TRAITS_DATA[athleteType].map(item => {
      const IconComponent = iconMap[item.iconName];
      return {
        ...item,
        icon: <IconComponent sx={{ color: 'secondary.main' }} />
      };
    });
  }, [athleteType]);

  const currentBenefits = useMemo(() => BENEFITS[athleteType], [athleteType]);
  const currentContent = useMemo(() => CONTENT[athleteType], [athleteType]);

  const handleAthleteTypeChange = (event, newAthleteType) => {
    if (newAthleteType !== null) {
      setAthleteType(newAthleteType);
    }
  };

  // Get the appropriate content component
  const ContentComponent = AthleteContent[athleteType];

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* ===== Hero Section ===== */}
      <Box sx={{ backgroundColor: 'background.default' }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 } }}>
          <ScrollReveal direction="up" delay={0.1}>
            <Typography
              variant="h1"
              component="h1"
              sx={COMPONENT_STYLES.h1Title}
            >
              Discover the Traits College Coaches Actually Want
            </Typography>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ===== Toggle Section ===== */}
      <AthleteToggleSection
        athleteType={athleteType}
        onAthleteTypeChange={handleAthleteTypeChange}
      >
        <ContentComponent traits={currentTraits} />
      </AthleteToggleSection>

      {/* ===== CTA Section ===== */}
      <AthleteCTASection
        title={currentContent.ctaTitle}
        subtitle={currentContent.ctaSubtitle}
        onTestClick={handleTestClick}
        onDemoClick={handleDemoClick}
      />
    </Box>
  );
};

// Set display name for debugging
Athletes.displayName = 'Athletes';

export default Athletes;
