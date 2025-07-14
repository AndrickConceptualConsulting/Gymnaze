// Animation utility functions
export const getAnimationDelay = (baseDelay, index, increment = 0.1) => {
  return baseDelay + (index * increment);
};

// Default animation props to reduce repetition
export const defaultFadeInProps = {
  duration: 0.6,
  easing: 'ease-out'
};

export const defaultScrollRevealProps = {
  direction: 'up',
  duration: 0.6,
  distance: '30px'
};

// Performance optimization - lazy loading helper
export const createLazySection = (importFunc) => {
  return React.lazy(importFunc);
};
