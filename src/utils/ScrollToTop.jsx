import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Automatically scrolls to the top of the page when route changes
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.smooth - Whether to use smooth scrolling (default: true)
 * @param {number} options.delay - Delay before scrolling in milliseconds (default: 0)
 * @param {boolean} options.enabled - Whether scrolling is enabled (default: true)
 */
const ScrollToTop = ({ 
  smooth = true, 
  delay = 0, 
  enabled = true 
} = {}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!enabled) return;

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'instant'
      });
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [pathname, smooth, delay, enabled]);

  return null; // This component doesn't render anything
};

/**
 * Custom hook for programmatic scrolling to top
 * Can be used in components when you need to scroll to top manually
 */
export const useScrollToTop = () => {
  const scrollToTop = (smooth = true) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'instant'
    });
  };

  return scrollToTop;
};

/**
 * Higher-order component to add scroll-to-top behavior to any component
 */
export const withScrollToTop = (Component, options = {}) => {
  return function ScrollToTopWrapper(props) {
    return (
      <>
        <ScrollToTop {...options} />
        <Component {...props} />
      </>
    );
  };
};

export default ScrollToTop;
