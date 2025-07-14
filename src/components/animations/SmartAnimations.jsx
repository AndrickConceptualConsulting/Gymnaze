import React from 'react';

// Simple CSS-based components that work reliably
export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  ...props 
}) => {
  return (
    <div
      className={`scroll-reveal-simple ${className}`}
      style={{
        animation: `fadeIn${direction.charAt(0).toUpperCase() + direction.slice(1)} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s both`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const FadeIn = ({ 
  children, 
  delay = 0, 
  scale = false,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`fade-in-simple ${className}`}
      style={{
        animation: `fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s both`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '', ...props }) => {
  return (
    <div className={`stagger-container ${className}`} {...props}>
      {React.Children.map(children, (child, index) => 
        React.cloneElement(child, {
          style: {
            ...child.props.style,
            animationDelay: `${index * staggerDelay}s`,
          }
        })
      )}
    </div>
  );
};

export const StaggerItem = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`stagger-item ${className}`} 
      style={{
        animation: 'fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        opacity: 0,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const PageTransition = ({ children }) => {
  return (
    <div 
      className="page-transition"
      style={{
        animation: 'pageEnter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      }}
    >
      {children}
    </div>
  );
};

// Alias for backward compatibility
export const AnimatedSection = ScrollReveal;