// Data for Coaches page content
export const leadershipConfig = {
  'high-school': {
    traits: [
      {
        icon: 'School',
        title: 'Coachability',
        description: 'Do they listen and adapt during practice?',
      },
      {
        icon: 'Groups',
        title: 'Leadership',
        description: 'Do teammates naturally follow their example?',
      },
      {
        icon: 'TrendingUp',
        title: 'Resilience',
        description: 'How do they respond to pressure and mistakes?',
      },
      {
        icon: 'Speed',
        title: 'Focus',
        description: 'Can they stay locked in from start to finish?',
      },
      {
        icon: 'Psychology',
        title: 'Game IQ',
        description: 'Do they understand situational play?',
      },
    ],
    tools: [
      'A visual athlete mindset dashboard',
      'Coachability assessments and performance flags',
      'Pre-loaded prompts for tryouts, interviews, and meetings',
      'Progress tracking across the season',
    ],
    cultureBenefits: [
      'See gaps in your program\'s leadership or resilience',
      'Spot mindset trends by class or position',
      'Use data to spark better conversations with athletes and parents',
    ],
    hero: {
      heading: 'Go Beyond the Stat Sheet',
      subheading: 'You know talent when you see it. But how do you prove it to recruiters—or help athletes grow into their full potential? Gymnaze equips you with the mindset tools that matter most in high school sports development.',
    },
    sections: {
      traits: {
        title: 'Traits That Signal a Recruitable Mindset',
        subtitle: 'The Gymnaze evaluation checklist helps you score:',
        footer: 'These are the intangibles recruiters are looking for—and Gymnaze makes them measurable.',
      },
      tools: {
        title: 'Tools That Help You Lead and Support',
        subtitle: 'With Gymnaze, high school coaches get:',
        placeholder: '[Coach dashboard preview placeholder]',
      },
      culture: {
        title: 'Build a Culture That Gets Noticed',
        subtitle: 'You also gain access to Gymnaze\'s team culture tools:',
        placeholder: '[Team culture analytics placeholder]',
      },
    },
    cta: {
      title: 'Lead With Confidence.',
      body: 'Get the Checklist and Evaluate What Really Matters.',
      buttons: [
        { label: 'Get the Checklist', to: '/demo' },
        { label: 'View Tools', to: '/tools' }
      ]
    }
  },
  college: {
    traits: [
      {
        icon: 'School',
        title: 'Coachability',
        description: 'Will they embrace feedback and system changes?',
      },
      {
        icon: 'Groups',
        title: 'Leadership',
        description: 'Can they lead with composure in high-stakes moments?',
      },
      {
        icon: 'TrendingUp',
        title: 'Resilience',
        description: 'How do they recover after failure or frustration?',
      },
      {
        icon: 'Speed',
        title: 'Focus',
        description: 'Can they maintain consistency through long seasons?',
      },
      {
        icon: 'Psychology',
        title: 'Game IQ',
        description: 'Do they make anticipatory, intelligent decisions?',
      },
    ],
    tools: [
      'Custom scoring models and visual comparison tools',
      'Embedded interview frameworks',
      'Trackable mindset development data',
      'Coach-facing dashboards for quick, credible decision-making',
    ],
    cultureBenefits: [
      'Measures alignment on leadership, focus, and toughness',
      'Flags early warning signs before issues grow',
      'Drives better athlete communication and peer development',
    ],
    hero: {
      heading: 'Elevate Evaluation From Instinct to Insight',
      subheading: 'As a college coach, you\'ve seen the cost of recruiting mistakes and misaligned athletes. Gymnaze empowers you with a checklist to measure what matters—before you offer a spot.',
    },
    sections: {
      traits: {
        title: 'Traits That Build Championship Culture',
        subtitle: 'Use the Gymnaze athlete evaluation model to assess:',
        footer: 'Back your evaluations with metrics—not just gut feel.',
      },
      tools: {
        title: 'The Tools College Coaches Actually Use',
        subtitle: 'Gymnaze includes:',
        placeholder: '[Advanced evaluation tools placeholder]',
      },
      culture: {
        title: 'Shape the Roster—and Culture—You Want',
        subtitle: 'Great teams are built on shared values. Gymnaze\'s team culture dashboard:',
        placeholder: '[Team culture dashboard placeholder]',
      },
    },
    cta: {
      title: 'Make Culture Your Competitive Advantage.',
      body: 'Schedule a Demo or Get the Checklist.',
      buttons: [
        { label: 'Schedule Demo', to: '/demo' },
        { label: 'Get Checklist', to: '/tools' }
      ]
    }
  }
};

export const iconMapping = {
  School: 'SchoolIcon',
  Groups: 'GroupsIcon',
  TrendingUp: 'TrendingUpIcon',
  Speed: 'SpeedIcon',
  Psychology: 'PsychologyIcon',
};
