import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import GymnazeLogo from '../assets/GymnazeLogo.webp';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { title: 'Athletes', path: '/athletes' },
    { title: 'Coaches & Leaders', path: '/coaches' },
    { title: 'Parents', path: '/parents' },
    { title: 'About Us', path: '/about' },
  ];

  const betaLinks = [
    { title: 'Join Beta Program', path: '/early-access' },
    { title: 'Beta Documentation', path: '/about' },
  ];

  const supportLinks = [
    { title: 'Contact Us', path: 'mailto:hello@gymnaze.com' },
    { title: 'LinkedIn', path: 'https://linkedin.com/company/gymnaze' },
  ];

  const legalLinks = [
    { title: 'Privacy Policy', path: '/privacy' },
  ];

  const LinkGroup = ({ title, links }) => (
    <Box>
      <Typography
        variant="h6"
        component="h3"
        sx={{
          color: 'text.primary',
          fontWeight: 600,
          mb: { xs: 2, md: 3 },
          fontSize: { xs: '1rem', md: '1.1rem' },
        }}
      >
        {title}
      </Typography>
      <Stack spacing={{ xs: 1, md: 1.5 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            component={link.path.startsWith('http') || link.path.startsWith('mailto') ? 'a' : RouterLink}
            to={link.path.startsWith('http') || link.path.startsWith('mailto') ? undefined : link.path}
            href={link.path.startsWith('http') || link.path.startsWith('mailto') ? link.path : undefined}
            target={link.path.startsWith('http') ? '_blank' : undefined}
            rel={link.path.startsWith('http') ? 'noopener noreferrer' : undefined}
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                color: 'secondary.main',
                transform: 'translateX(4px)',
              },
            }}
          >
            {link.title}
          </Link>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box>
                {/* Logo */}
                <Box
                  component={RouterLink}
                  to="/"
                  sx={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    mb: 3,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <img
                    src={GymnazeLogo}
                    alt="GYMNAZE"
                    style={{
                      height: isSmallMobile ? '80px' : '100px',
                      width: 'auto',
                    }}
                  />
                </Box>

                {/* Brand Description */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    mb: 3,
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    maxWidth: '300px',
                  }}
                >
                  Helping athletes and coaches unlock mental toughness and leadership potential 
                  through data-driven assessments and insights.
                </Typography>

                {/* Contact Info */}
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon sx={{ color: 'secondary.main', fontSize: '1.2rem' }} />
                    <Link
                      href="mailto:hello@gymnaze.com"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        '&:hover': { color: 'secondary.main' },
                      }}
                    >
                      hello@gymnaze.com
                    </Link>
                  </Box>
                </Stack>

                {/* Social Media */}
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      mb: 1.5,
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                    }}
                  >
                    Follow Us
                  </Typography>
                  <IconButton
                    component={Link}
                    href="https://linkedin.com/company/gymnaze"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      backgroundColor: 'transparent',
                      border: '1px solid',
                      borderColor: 'divider',
                      p: 1.5,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        color: '#0077B5', // LinkedIn blue
                        borderColor: '#0077B5',
                        backgroundColor: 'rgba(0, 119, 181, 0.08)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* Navigation Links */}
            <Grid item xs={12} sm={6} md={2}>
              <LinkGroup title="Platform" links={navigationLinks} />
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <LinkGroup title="Beta Access" links={betaLinks} />
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <LinkGroup title="Connect" links={supportLinks} />
            </Grid>

            {/* Newsletter Signup */}
            <Grid item xs={12} sm={6} md={2}>
              <Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  Stay Updated
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                    lineHeight: 1.5,
                  }}
                >
                  Get the latest insights on sports psychology and mental performance.
                </Typography>
                <Box
                  component={RouterLink}
                  to="/early-access"
                  sx={{
                    display: 'inline-block',
                    px: 3,
                    py: 1.5,
                    backgroundColor: 'secondary.main',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                    fontWeight: 600,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  Join Beta
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            borderColor: 'divider',
            opacity: 0.5,
          }}
        />

        {/* Bottom Footer */}
        <Box
          sx={{
            py: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 3, md: 2 },
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.8rem', md: '0.85rem' },
              order: { xs: 2, md: 1 },
            }}
          >
            © {currentYear} GYMNAZE. All rights reserved.
          </Typography>

          {/* Legal Links */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 3 }}
            sx={{
              order: { xs: 1, md: 2 },
            }}
          >
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                component={RouterLink}
                to={link.path}
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: { xs: '0.8rem', md: '0.85rem' },
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                {link.title}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Call to Action Bar */}
        <Box
          sx={{
            backgroundColor: 'primary.main',
            borderRadius: '12px',
            p: { xs: 3, md: 4 },
            mb: { xs: 2, md: 3 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
              animation: 'shine 3s infinite',
            },
            '@keyframes shine': {
              '0%': { left: '-100%' },
              '100%': { left: '100%' },
            },
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: 'white',
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Ready to Unlock Your Mental Edge?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 3,
              fontSize: { xs: '0.9rem', md: '1rem' },
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Take our assessment and discover the mental attributes that set champion athletes apart.
          </Typography>
          <Box
            component={RouterLink}
            to="/early-access"
            sx={{
              display: 'inline-block',
              px: 4,
              py: 2,
              backgroundColor: 'warning.main',
              color: 'background.default',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: { xs: '1rem', md: '1.1rem' },
              fontWeight: 600,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'warning.dark',
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[8],
              },
            }}
          >
            Join Beta
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;