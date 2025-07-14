// Content for About page
export const ABOUT_CONTENT = {
  hero: {
    title: 'How GYMNAZE Measures the Leadership Behind the Talent',
    subtitle: 'Mindset Is the Metric That Matters Most'
  },
  
  mission: {
    heading: 'We Built GYMNAZE to Measure What Everyone Else Ignores',
    body: [
      'Speed. Strength. Stats. These are easy to track. But the traits that separate good from great - leadership, coachability, resilience - are harder to spot. That\'s where GYMNAZE comes in.',
      'We created the Athlete Intelligence & Identity Assessment to:'
    ],
    goals: [
      'Help athletes showcase the mindset traits that matter',
      'Give coaches clear data to build high-character, high-performing teams'
    ]
  },

  problem: {
    heading: 'The Problem We\'re Solving',
    intro: 'Every coach faces the same challenge: How do you identify the athletes who will thrive in your program? Stats tell part of the story, but they miss the qualities that truly determine success.',
    questionsTitle: 'The Critical Questions',
    callToAction: 'Click any question to see how Gymnaze provides the answer →'
  },

  differences: {
    heading: 'What Makes GYMNAZE Different',
    intro: 'GYMNAZE combines cutting-edge sports psychology with real-world usability:',
    conclusion: 'This isn\'t a quiz. It\'s a clarity engine - backed by data, designed for action.'
  },

  team: {
    heading: 'Who We Are',
    members: [
      {
        role: 'Athletes',
        emoji: '🏃‍♂️',
        description: 'Who understand the game'
      },
      {
        role: 'Coaches', 
        emoji: '🏃‍♀️',
        description: 'Who build champions'
      },
      {
        role: 'Educators',
        emoji: '🧠', 
        description: 'Who unlock potential'
      },
      {
        role: 'Developers',
        emoji: '💻',
        description: 'Who build solutions'
      }
    ],
    belief: 'And we believe in one powerful truth:',
    mission: 'Leadership is a skill. Mindset can be trained. And what matters most should be visible.',
    conclusion: 'We built GYMNAZE so that talent and character could be evaluated side by side - because both are essential to success.'
  },

  features: {
    mindsetDiagnostics: {
      title: 'Mindset Diagnostics',
      items: [
        {
          title: 'Focus',
          description: 'Concentration and attention under pressure'
        },
        {
          title: 'Discipline',
          description: 'Consistency and commitment to excellence'
        },
        {
          title: 'Resilience',
          description: 'Bouncing back from setbacks stronger'
        }
      ]
    },
    sportsIQ: {
      title: 'Sports IQ Testing',
      items: [
        {
          title: 'Decision-making',
          description: 'Quick, smart choices in critical moments'
        },
        {
          title: 'Awareness',
          description: 'Reading the game and anticipating plays'
        },
        {
          title: 'Adaptability',
          description: 'Adjusting strategy and approach mid-game'
        }
      ]
    },
    additional: [
      {
        title: 'Leadership Scoring',
        description: 'Benchmarked against elite athletes'
      },
      {
        title: 'Coach Dashboards',
        description: 'Real-time insights for smarter recruiting and development'
      }
    ]
  },

  coachQuestions: [
    {
      question: 'How can I tell if an athlete is coachable?',
      visualization: {
        title: 'Coachability Assessment',
        points: [
          'Receptiveness to feedback',
          'Willingness to adjust technique',
          'Response to constructive criticism',
          'Growth mindset indicators'
        ]
      }
    },
    {
      question: 'What are the traits stats don\'t show - but predict success?',
      visualization: {
        title: 'Hidden Success Factors',
        points: [
          'Mental resilience under pressure',
          'Leadership in critical moments',
          'Team chemistry contribution',
          'Competitive drive and discipline'
        ]
      }
    },
    {
      question: 'How can I find high-character athletes before they arrive?',
      visualization: {
        title: 'Character Evaluation',
        points: [
          'Integrity in competition',
          'Respect for teammates and opponents',
          'Accountability for mistakes',
          'Commitment to team goals'
        ]
      }
    },
    {
      question: 'Is there a way to objectively measure athlete leadership?',
      visualization: {
        title: 'Leadership Metrics',
        points: [
          'Influence on team performance',
          'Communication effectiveness',
          'Decision-making under pressure',
          'Ability to elevate others'
        ]
      }
    }
  ]
};

// Style constants
export const ABOUT_STYLES = {
  centerText: {
    textAlign: 'center',
    maxWidth: '800px',
    mx: 'auto'
  },
  
  sectionPadding: {
    py: { xs: 6, md: 8 }
  },
  
  containerSpacing: {
    px: { xs: 2, md: 3 }
  },
  
  gridReset: {
    '& .MuiGrid-item': { 
      paddingLeft: { xs: '0px !important', md: '32px !important' },
      paddingTop: { xs: '8px !important', md: '32px !important' }
    }
  },

  heroTitle: {
    color: 'text.primary',
    mb: 4,
    fontWeight: 700,
    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
    lineHeight: 1.2,
    textAlign: 'center',
    maxWidth: '1000px',
    mx: 'auto'
  },

  sectionTitle: {
    color: 'text.primary',
    mb: 3,
    fontWeight: 600,
    fontSize: { xs: '1.8rem', md: '2.2rem' },
    textAlign: 'center'
  },

  bodyText: {
    color: 'text.secondary',
    fontSize: '1.1rem',
    lineHeight: 1.7
  },

  // Composed styles to avoid redundant spreads
  centeredBodyText: {
    color: 'text.secondary',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    textAlign: 'center',
    maxWidth: '800px',
    mx: 'auto'
  },

  leftAlignedBodyText: {
    color: 'text.secondary',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    textAlign: { xs: 'left', md: 'left' },
    px: { xs: 2, md: 0 },
  },

  featureSectionTitle: {
    mb: 4,
    fontWeight: 600,
    textAlign: 'center'
  },

  questionBox: {
    p: 3,
    borderRadius: 2,
    borderLeft: '4px solid',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(44, 60, 136, 0.15)',
      transform: 'translateX(8px)',
    },
  }
};

// Icon mapping for features
export const FEATURE_ICONS = {
  Focus: 'Speed',
  Discipline: 'TrendingUp', 
  Resilience: 'CheckCircle',
  'Decision-making': 'Psychology',
  Awareness: 'Visibility',
  Adaptability: 'Assessment',
  'Leadership Scoring': 'EmojiEvents',
  'Coach Dashboards': 'Dashboard'
};

// Color mapping for coach questions
export const QUESTION_COLORS = {
  0: 'secondary.main',
  1: 'accent.main', 
  2: 'warning.main',
  3: 'primary.main'
};

// Icon mapping for coach questions
export const QUESTION_ICONS = {
  0: 'School',
  1: 'Visibility',
  2: 'Groups', 
  3: 'EmojiEvents'
};
