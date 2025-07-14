// React & external libs
import React from 'react';

// Local components
import { SplitSection, ImagePlaceholder } from '../ui';

// Assets
import DiverseCoachesAndTeamImage from '../../assets/DiverseCoachesAndTeam.webp';

const CoachesSection = () => {
  return (
    <SplitSection
      image={
        <ImagePlaceholder 
          src={DiverseCoachesAndTeamImage}
          alt="Diverse group of coaches and team members working together"
          height={{ xs: '250px', md: '350px' }}
        />
      }
      title="From Recruiting Gamble to Guaranteed Fit"
      text="Coaches using Gymnaze build championship cultures by identifying athletes who match talent with character. Stop guessing, reduce recruiting risks, and build stronger, smarter teams."
      imageLeft={true}
    />
  );
};

CoachesSection.displayName = 'CoachesSection';

export default CoachesSection;
