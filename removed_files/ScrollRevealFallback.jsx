import React, { useEffect, useRef, useState } from 'react';

// Fallback animation hook for when framer-motion isn't available
const useScrollReveal = (direction = 'up', delay = 0) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(50px)';
        case 'down': return 'translateY(-50px)';
        case 'left': return 'translateX(50px)';
        case 'right': return 'translateX(-50px)';
        default: return 'translateY(50px)';
      }
    }
    return 'translateY(0)';
  };

  return {
    ref,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: getTransform(),
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  };
};

// CSS-only ScrollReveal component
const ScrollRevealFallback = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  ...props 
}) => {
  const { ref, style } = useScrollReveal(direction, delay);

  return (
    <div
      ref={ref}
      style={style}
      className={`scroll-reveal ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollRevealFallback;