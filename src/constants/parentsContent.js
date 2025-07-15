// Content for Parents page
export const PARENTS_CONTENT = {
  hero: {
    title: 'Help Your Child Stand Out—On and Off the Field'
  },

  sections: {
    recruiting: {
      title: 'The Recruiting Process Can Feel Like a Black Box',
      content: 'If you\'re a parent trying to support your child\'s college dreams, you know how overwhelming—and confusing—it can be. Highlight reels and stats only go so far. Gymnaze helps your athlete show the traits that truly matter to coaches: character, leadership, and coachability.',
      placeholder: '[Parent supporting athlete image placeholder]'
    },

    traits: {
      title: 'Traits That Get Coaches to Pay Attention',
      subtitle: 'Recruiting isn\'t just about athletic performance anymore. Today\'s coaches want to know:',
      footer: 'Gymnaze measures these intangibles—with tools coaches trust.'
    },

    data: {
      title: 'Clear Data for a Clearer Path Forward',
      subtitle: 'With the Gymnaze mindset assessment, your family gets:',
      footer: 'No more guessing games. Just real answers.',
      placeholder: '[Assessment report preview placeholder]'
    },

    confidence: {
      title: 'Confidence That Goes Beyond the Game',
      subtitle: 'Gymnaze doesn\'t just help with sports. It helps your child:',
      placeholder: '[Family moments and growth placeholder]'
    },

    faq: {
      title: 'Frequently Asked Questions'
    },

    cta: {
      title: 'You Want the Best for Your Athlete.',
      subtitle: 'Start with the mindset tools that unlock real opportunities.',
      buttons: [
        { label: 'Join Beta', to: '/early-access', variant: 'contained' }
      ]
    }
  },

  traits: [
    {
      icon: 'School',
      title: 'Coachability',
      description: 'Will your child take feedback and grow?',
    },
    {
      icon: 'TrendingUp',
      title: 'Resilience',
      description: 'How do they respond to setbacks or pressure?',
    },
    {
      icon: 'Psychology',
      title: 'Game IQ',
      description: 'Can they think fast in competitive moments?',
    },
    {
      icon: 'Groups',
      title: 'Leadership',
      description: 'Do they lift up their team?',
    },
    {
      icon: 'Speed',
      title: 'Focus',
      description: 'Are they locked in through challenges and change?',
    },
  ],

  assessmentBenefits: [
    'A detailed report on your child\'s mental strengths',
    'Language and insights to help with coach outreach, bios, and interviews',
    'Data to support recruiting conversations and reduce second-guessing',
  ],

  lifeBenefits: [
    'Build self-awareness and emotional maturity',
    'Gain communication tools for leadership and life',
    'Stay grounded in a process that\'s often filled with pressure and hype',
  ],

  faqs: [
    {
      id: 'recruiting-help',
      question: 'How do I help my child get recruited?',
      answer: 'Start by showcasing more than just stats. Coaches want to see character, leadership, and mental toughness. Gymnaze provides the data and language to communicate these intangibles effectively in recruiting conversations, athlete bios, and interviews.',
    },
    {
      id: 'test-how',
      question: 'How does this test work?',
      answer: 'The Gymnaze assessment is a comprehensive 200+ question evaluation that measures key mental traits coaches value. Your child completes it online, and you receive a detailed report with actionable insights and specific language for recruiting materials.',
    },
    {
      id: 'elite-only',
      question: 'Is this just for elite athletes?',
      answer: 'Not at all. Gymnaze is designed for any student-athlete who wants to maximize their recruiting potential and develop valuable life skills. The insights are valuable whether your child is aiming for Division I or smaller college programs.',
    },
    {
      id: 'assessment-duration',
      question: 'How long does the assessment take?',
      answer: 'The assessment typically takes 30-45 minutes to complete. Your child can take breaks as needed, and the results are available immediately upon completion.',
    },
  ]
};

// Style constants
export const PARENTS_STYLES = {
  gridItemSpacing: {
    paddingLeft: { xs: '0px !important', md: '32px !important' },
    paddingTop: { xs: '8px !important', md: '32px !important' }
  },

  sectionPadding: {
    py: { xs: 6, md: 8 }
  },

  heroTitle: {
    color: 'text.primary',
    mb: 2,
    fontWeight: 700,
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    lineHeight: 1.2,
    textAlign: 'center',
    maxWidth: '900px',
    mx: 'auto',
  },

  sectionTitle: {
    color: 'text.primary',
    mb: 3,
    fontWeight: 600,
  },

  bodyText: {
    color: 'text.secondary',
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },

  centeredBodyText: {
    color: 'text.secondary',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    textAlign: 'center',
    maxWidth: '800px',
    mx: 'auto',
  },

  placeholder: {
    height: { xs: '250px', md: '350px' },
    backgroundColor: 'background.paper',
    borderRadius: 2,
    border: '1px solid rgba(44, 60, 136, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ctaBox: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    p: { xs: 4, md: 6 },
    position: 'relative',
  },

  buttonGroup: {
    display: 'flex',
    gap: 3,
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
};

// Icon mapping
export const ICON_MAPPING = {
  School: 'SchoolIcon',
  TrendingUp: 'TrendingUpIcon',
  Psychology: 'PsychologyIcon',
  Groups: 'GroupsIcon',
  Speed: 'SpeedIcon',
};
