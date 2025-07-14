// ===== TRAITS DATA (Non-JSX) =====
export const TRAITS_DATA = {
  'high-school': [
    {
      iconName: 'School',
      title: 'Coachability',
      description: 'Do you take feedback and grow from it?',
    },
    {
      iconName: 'Psychology',
      title: 'Game IQ',
      description: 'Can you read plays, not just react?',
    },
    {
      iconName: 'TrendingUp',
      title: 'Mental Toughness',
      description: 'Do you stay calm under pressure?',
    },
    {
      iconName: 'SportsFootball',
      title: 'Resilience',
      description: 'Can you bounce back when things don\'t go your way?',
    },
    {
      iconName: 'Groups',
      title: 'Leadership',
      description: 'Do you lift others up?',
    },
  ],
  college: [
    {
      iconName: 'Speed',
      title: 'Focus Under Pressure',
      description: 'Stay locked in through adversity.',
    },
    {
      iconName: 'Groups',
      title: 'Leadership',
      description: 'Set the tone, even when you\'re not the loudest voice.',
    },
    {
      iconName: 'School',
      title: 'Coachability',
      description: 'Level up faster by applying feedback quickly.',
    },
    {
      iconName: 'Psychology',
      title: 'Game IQ',
      description: 'Read situations in real time and make smart decisions.',
    },
  ],
};

// ===== BENEFITS DATA =====
export const BENEFITS = {
  'high-school': [
    'Full report on your mental strengths and areas to improve',
    'Shareable insights for coaches, mentors, and recruiters',
    'Tools to build your athlete bio and prep for interviews',
  ],
  college: [
    'A full psychological profile built for college athletes',
    'Development tips to strengthen your leadership and composure',
    'Competitive benchmarks across your sport and position',
  ],
};

// ===== CONTENT DATA =====
export const CONTENT = {
  'high-school': {
    title: 'Get Recruited for More Than Just Your Stats',
    subtitle: 'You work hard. But in today\'s crowded recruiting field, hustle alone isn\'t enough. College coaches are searching for more—intangibles like mindset, leadership, and game IQ. Gymnaze shows you how to measure and grow the traits they actually care about.',
    sectionTitle: 'What Coaches Want (That Most Athletes Miss)',
    sectionSubtitle: 'Stand out with real data on your:',
    assessmentTitle: 'The Gymnaze Mental Edge Assessment',
    assessmentText: 'Take a 200+ question test built for serious athletes. You\'ll get:',
    finalTitle: 'Move from Overlooked to Unmissable',
    finalText: 'When coaches see more than your highlight reel, they remember you. Gymnaze helps you turn your mindset into your competitive edge.',
    ctaTitle: 'Your Mental Game Matters.',
    ctaSubtitle: 'Take the Mindset Test and Get Noticed.',
  },
  college: {
    title: 'Compete Smarter. Lead Stronger. Train With Purpose.',
    subtitle: 'Whether you\'re trying to lock in a starting spot, earn leadership respect, or build your legacy, your mental edge is what separates good from great. Gymnaze gives you the clarity to elevate your game.',
    sectionTitle: 'Build Your Edge With Data-Backed Insight',
    sectionSubtitle: 'Your performance is more than physical. College programs that use Gymnaze assess:',
    assessmentTitle: 'Unlock Your Athlete Identity',
    assessmentText: 'Take the elite-level Gymnaze assessment and receive:',
    finalTitle: 'Play With Confidence. Lead With Proof.',
    finalText: 'Whether you\'re aiming for the next level or becoming a leader on your current team, your mindset matters. Use Gymnaze to prove—and improve—what makes you indispensable.',
    ctaTitle: 'Elevate Your Game.',
    ctaSubtitle: 'Take the Gymnaze Mindset Test Today.',
  },
};

// ===== STYLE CONSTANTS =====
export const STYLES = {
  sectionHeading: {
    color: 'text.primary',
    mb: 3,
    fontWeight: 600,
    textAlign: 'center',
  },
  sectionSubheading: {
    color: 'text.secondary',
    mb: 6,
    textAlign: 'center',
    fontSize: '1.1rem',
    maxWidth: '800px',
    mx: 'auto',
    lineHeight: 1.7,
  },
  assessmentText: {
    color: 'text.secondary',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    mb: 4,
  },
  finalSectionHeading: {
    color: 'text.primary',
    mb: 3,
    textAlign: 'center',
    fontWeight: 600,
  },
  finalSectionText: {
    color: 'text.secondary',
    textAlign: 'center',
    fontSize: '1.1rem',
    maxWidth: '800px',
    mx: 'auto',
    lineHeight: 1.7,
  },
  ctaHeading: {
    color: 'text.primary',
    mb: 3,
    fontWeight: 600,
  },
  ctaSubtitle: {
    color: 'text.secondary',
    mb: 4,
    fontSize: '1.1rem',
    maxWidth: '600px',
    mx: 'auto',
  },
};

// ===== COMPONENT STYLES =====
export const COMPONENT_STYLES = {
  toggleButtonGroup: {
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
  },
  h1Title: {
    color: 'text.primary',
    mb: 2,
    fontWeight: 700,
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    lineHeight: 1.2,
    textAlign: 'center',
    maxWidth: '900px',
    mx: 'auto',
  },
  ctaContainer: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    p: { xs: 4, md: 6 },
    position: 'relative',
  },
  ctaButtonBase: {
    px: 6,
    py: 2,
    fontSize: '1.2rem',
    fontWeight: 600,
    position: 'relative',
    zIndex: 1,
  },
  ctaPrimaryButton: {
    backgroundColor: 'transparent',
    color: 'background.default',
    border: 'none',
  },
  ctaSecondaryButton: {
    borderColor: 'transparent',
    color: 'secondary.main',
    backgroundColor: 'transparent',
  },
};
