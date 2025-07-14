// React & external libs
import React from 'react';

// MUI
import { Box } from '@mui/material';

// MUI Icons
import {
  Psychology as PsychologyIcon,
  EmojiEvents as EmojiEventsIcon,
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
} from '@mui/icons-material';

// Local components
import { 
  HeroSection, 
  ExplainerVideoSection,
  ProblemSection, 
  CoachesSection,
  MentalAttributesSection,
  ResultsSection,
  WhyChooseSection,
  CTASection
} from '../components/home';

// Constants
import { mentalAttributesData, benefits, whyChooseFeaturesData } from '../constants/homeData';

// ===== ICON MAPPING =====
const iconMap = {
  Psychology: PsychologyIcon,
  EmojiEvents: EmojiEventsIcon,
  Groups: GroupsIcon,
  TrendingUp: TrendingUpIcon,
  School: SchoolIcon,
};

// ===== DATA WITH JSX =====
const mentalAttributes = mentalAttributesData.map(item => {
  const IconComponent = iconMap[item.iconName];
  return {
    ...item,
    icon: <IconComponent sx={{ color: 'secondary.main' }} />
  };
});

const whyChooseFeatures = whyChooseFeaturesData.map(item => {
  const IconComponent = iconMap[item.iconName];
  return {
    ...item,
    icon: <IconComponent sx={{ fontSize: item.iconSize, color: 'secondary.main' }} />
  };
});

// ===== PAGE COMPONENT =====
const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* ===== Hero Section ===== */}
      <HeroSection />
      
      {/* ===== Explainer Video Section ===== */}
      <ExplainerVideoSection />
      
      {/* ===== Problem Section ===== */}
      <ProblemSection />
      
      {/* ===== Mental Attributes Section ===== */}
      <MentalAttributesSection attributes={mentalAttributes} />
      
      {/* ===== Coaches Section ===== */}
      <CoachesSection />
      
      {/* ===== Results Section ===== */}
      <ResultsSection benefits={benefits} />
      
      {/* ===== Why Choose Section ===== */}
      <WhyChooseSection features={whyChooseFeatures} />
      
      {/* ===== CTA Section ===== */}
      <CTASection />
    </Box>
  );
};

// Set display name for debugging
HomePage.displayName = 'HomePage';

export default HomePage;
