// React & external libs
import React from 'react';

// MUI
import { Box } from '@mui/material';

// SEO Component
import SEOHead from '../components/SEOHead';

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
    <>
      <SEOHead
        title="Athlete Mental Toughness Test & Mental Performance Training"
        description="Take the athlete mental toughness test that reveals what coaches actually want. Get mental performance training insights that give you the competitive edge others miss."
        keywords="athlete mental toughness test, mental performance training for athletes, mental edge for athletes, sports psychology tools for teams, best mindset training apps for athletes"
        ogTitle="GYMNAZE - Athlete Mental Toughness Test & Training Platform"
        ogDescription="The first athlete intelligence assessment platform that measures mental toughness, leadership, and character traits coaches actually value."
      />
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
    </>
  );
};

// Set display name for debugging
HomePage.displayName = 'HomePage';

export default HomePage;
