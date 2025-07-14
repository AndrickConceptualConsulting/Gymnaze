// Form validation schema
export const validationRules = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    },
    maxLength: {
      value: 50,
      message: 'Name must be less than 50 characters'
    }
  },
  organization: {
    required: 'Organization is required',
    minLength: {
      value: 2,
      message: 'Organization must be at least 2 characters'
    },
    maxLength: {
      value: 100,
      message: 'Organization must be less than 100 characters'
    }
  },
  role: {
    required: 'Please select your role'
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address'
    }
  },
  numberOfAthletes: {
    required: 'Number of athletes is required',
    min: {
      value: 1,
      message: 'Must have at least 1 athlete'
    },
    max: {
      value: 10000,
      message: 'Maximum 10,000 athletes'
    }
  },
  notes: {
    maxLength: {
      value: 1000,
      message: 'Notes must be less than 1000 characters'
    }
  }
};

// Interest options for dropdown - Updated with better segmentation
export const interestOptions = [
  { value: 'testing-with-team', label: 'Testing this with my team' },
  { value: 'learning-assessment', label: 'Learning how the assessment works' },
  { value: 'development-metrics', label: 'Understanding athlete development metrics' },
  { value: 'recruiting-decisions', label: 'Using data to support recruiting decisions' },
  { value: 'not-sure', label: 'Not sure yet' }
];

// Role options for dropdown
export const roleOptions = [
  { value: 'head-coach', label: 'Head Coach' },
  { value: 'assistant-coach', label: 'Assistant Coach' },
  { value: 'athletic-director', label: 'Athletic Director' },
  { value: 'recruiter', label: 'Recruiter' },
  { value: 'trainer', label: 'Trainer' },
  { value: 'other', label: 'Other' }
];

// How did you hear about us options
export const referralOptions = [
  { value: 'conference', label: 'Conference/Event' },
  { value: 'colleague', label: 'Colleague Referral' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'search-engine', label: 'Google Search' },
  { value: 'website', label: 'Found Your Website' },
  { value: 'other', label: 'Other' }
];

// Default form values
export const defaultValues = {
  name: '',
  organization: '',
  role: '',
  email: '',
  numberOfAthletes: '',
  interest: '',
  notes: '',
  phone: '',
  referralSource: '',
  wantWalkthrough: false,
  readyToPilot: false
};
