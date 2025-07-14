// Newsletter form configuration
export const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please enter a valid email address'
    }
  },
  firstName: {
    required: 'First name is required',
    minLength: {
      value: 2,
      message: 'First name must be at least 2 characters'
    },
    maxLength: {
      value: 30,
      message: 'First name must be less than 30 characters'
    }
  }
};

// Interest categories for newsletter personalization
export const interestOptions = [
  { value: 'athlete', label: 'Athlete Development' },
  { value: 'coaching', label: 'Coaching & Leadership' },
  { value: 'parent', label: 'Youth Sports & Parenting' },
  { value: 'general', label: 'General Updates' }
];

// Default form values
export const defaultValues = {
  email: '',
  firstName: '',
  interest: 'general'
};

// Newsletter benefits for display
export const newsletterBenefits = [
  'Exclusive Content',
  'Early Access Updates', 
  'Athlete Tips',
  'Coaching Insights'
];
