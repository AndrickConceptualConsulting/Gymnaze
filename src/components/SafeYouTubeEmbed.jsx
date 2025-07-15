import React, { useState, useCallback } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { PlayArrow as PlayIcon } from '@mui/icons-material';

const SafeYouTubeEmbed = ({ videoId, title, thumbnail }) => {
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoadVideo = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    console.warn(`Failed to load YouTube video: ${videoId}`);
  }, [videoId]);

  // Generate thumbnail URL if not provided
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (hasError) {
    return (
      <Box
        sx={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: 2,
          backgroundColor: 'grey.100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center', p: 4 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Video Unavailable
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Unable to load the video. Please try again later.
          </Typography>
        </Box>
      </Box>
    );
  }

  if (!isLoaded) {
    return (
      <Box
        sx={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: theme.shadows[8],
          cursor: 'pointer',
          backgroundImage: `url(${thumbnailUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&:hover .play-button': {
            transform: 'scale(1.1)',
          }
        }}
        onClick={handleLoadVideo}
      >
        {/* Play Button - Centered Absolutely */}
        <Box
          className="play-button"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease-in-out',
            zIndex: 2,
            '&:hover': {
              backgroundColor: 'rgba(255, 0, 0, 1)',
              transform: 'translate(-50%, -50%) scale(1.1)',
            }
          }}
        >
          <PlayIcon sx={{ fontSize: 32, color: 'white', ml: 0.5 }} />
        </Box>
        
        {/* Fallback overlay with title */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
            color: 'white',
            p: 2,
            zIndex: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
        borderRadius: 2,
        boxShadow: theme.shadows[8],
        '& iframe': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: 2,
        }
      }}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1&fs=1&iv_load_policy=3&cc_load_policy=1&enablejsapi=0&origin=${encodeURIComponent(window.location.origin)}`}
        title={title}
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        onError={handleError}
      />
    </Box>
  );
};

export default SafeYouTubeEmbed;
