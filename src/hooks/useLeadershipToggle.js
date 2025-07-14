import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useLeadershipToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isInitialized = useRef(false);
  
  // Get leadership type from URL params, default to 'high-school'
  const getLeadershipTypeFromURL = () => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    return type === 'college' ? 'college' : 'high-school';
  };

  const [leadershipType, setLeadershipType] = useState(getLeadershipTypeFromURL());

  // Update URL when leadershipType state changes (but not on initial mount)
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      return;
    }

    const params = new URLSearchParams(location.search);
    const currentUrlType = params.get('type') || 'high-school';
    
    // Only update URL if it's actually different from current state
    if (currentUrlType !== leadershipType) {
      params.set('type', leadershipType);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [leadershipType, navigate, location.pathname]);

  // Update state when URL changes (back/forward navigation)
  useEffect(() => {
    const urlType = getLeadershipTypeFromURL();
    if (urlType !== leadershipType) {
      setLeadershipType(urlType);
    }
  }, [location.search]);

  return [leadershipType, setLeadershipType];
};
