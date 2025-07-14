// React & external libs
import React from 'react';

// Local components
import { SplitSection, ImagePlaceholder } from '../ui';

// Assets
import AuthenticAthleteImage from '../../assets/AuthenticAthlete.webp';

const ProblemSection = () => {
  return (
    <SplitSection
      image={
        <ImagePlaceholder 
          src={AuthenticAthleteImage}
          alt="Authentic athlete demonstrating mental toughness and focus"
        />
      }
      title="Tired of Being Invisible Despite Your Talent?"
      text="Highlight reels and stats are everywhere, but they don't tell coaches who you really are. Gymnaze reveals the leadership, coachability, and sports IQ coaches actually care about, helping you stand out from thousands of talented athletes."
      imageLeft={false}
    />
  );
};

ProblemSection.displayName = 'ProblemSection';

export default ProblemSection;
