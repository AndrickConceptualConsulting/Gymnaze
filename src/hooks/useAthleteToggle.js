import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useAthleteToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isInitialized = useRef(false);
  
  // Get athlete type from URL params, default to 'high-school'
  const getAthleteTypeFromURL = () => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    return type === 'college' ? 'college' : 'high-school';
  };

  const [athleteType, setAthleteType] = useState(getAthleteTypeFromURL());

  // Update URL when athleteType state changes (but not on initial mount)
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      return;
    }

    const params = new URLSearchParams(location.search);
    const currentUrlType = params.get('type') || 'high-school';
    
    // Only update URL if it's actually different from current state
    if (currentUrlType !== athleteType) {
      params.set('type', athleteType);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [athleteType, navigate, location.pathname]);

  // Update state when URL changes (back/forward navigation)
  useEffect(() => {
    const urlType = getAthleteTypeFromURL();
    if (urlType !== athleteType) {
      setAthleteType(urlType);
    }
  }, [location.search]);

  return [athleteType, setAthleteType];
};
