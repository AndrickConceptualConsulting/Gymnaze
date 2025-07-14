// Utility functions for animations and colors
export const getAnimationDelay = (baseDelay, index, increment = 0.1) => {
  return baseDelay + (index * increment);
};

export const getQuestionRGBA = (questionIndex) => {
  const colorMap = {
    0: '44, 60, 136',      // secondary.main
    1: '166, 205, 58',     // accent.main  
    2: '248, 166, 30',     // warning.main
    3: '0, 172, 205'       // primary.main
  };
  return colorMap[questionIndex] || '44, 60, 136';
};

// Feature sections configuration
export const getFeatureSections = (mindsetItems, sportsIQItems, additionalItems) => [
  {
    title: 'Mindset Diagnostics',
    items: mindsetItems,
    color: 'secondary.main',
    baseDelay: 0.2,
  },
  {
    title: 'Sports IQ Testing', 
    items: sportsIQItems,
    color: 'accent.main',
    baseDelay: 0.5,
  },
  {
    title: null, // No title for additional features
    items: additionalItems,
    color: 'warning.main',
    baseDelay: 0.8,
  }
];
