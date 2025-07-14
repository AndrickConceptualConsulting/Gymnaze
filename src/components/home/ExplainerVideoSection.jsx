import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SafeYouTubeEmbed from '../SafeYouTubeEmbed';

// ===== ANIMATION CONSTANTS =====
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const zoomIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, delay: 0.2 },
  viewport: { once: true },
};

const fadeInUpDelayed = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.4 },
  viewport: { once: true },
};

// ===== YOUTUBE EMBED COMPONENT =====
export const YouTubeEmbed = ({ videoId, title }) => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        position: 'relative',
        paddingBottom: '56.25%', // 16:9 aspect ratio
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
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1&fs=1&iv_load_policy=3&cc_load_policy=1&start=0&end=0&loop=0&enablejsapi=0&origin=${window.location.origin}&widgetid=1`}
        title={title}
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </Box>
  );
};

// ===== EXPLAINER VIDEO SECTION COMPONENT =====
const ExplainerVideoSection = () => {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'rgba(248, 249, 250, 0.6)',
        background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}08 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <motion.div {...fadeInUp}>
          {/* Section Header */}
          <Box textAlign="center" mb={6}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                fontFamily: 'Montserrat',
                color: theme.palette.primary.main,
                mb: 3,
              }}
            >
              See GYMNAZE in Action
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Watch how GYMNAZE transforms athlete assessment and development through our comprehensive mindset evaluation platform.
            </Typography>
          </Box>

          {/* Video Embed */}
          <motion.div {...zoomIn}>
            <Box maxWidth="900px" mx="auto">
              <SafeYouTubeEmbed 
                videoId="sauB97KlLxs" 
                title="GYMNAZE Platform Explainer Video"
              />
            </Box>
          </motion.div>

          {/* Additional Context */}
          <motion.div {...fadeInUpDelayed}>
            <Box textAlign="center" mt={6}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '700px',
                  mx: 'auto',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                }}
              >
                Discover how coaches and athletic directors are using GYMNAZE to make 
                data-driven decisions about athlete development, recruitment, and team building.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ExplainerVideoSection;