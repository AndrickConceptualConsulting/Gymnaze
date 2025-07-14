import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useThemeMode } from '../contexts/ThemeContext';
import { useScrollToTop } from '../utils/ScrollToTop';
import GymnazeLogo from '../assets/GymnazeLogo.webp';

// Try to import framer-motion, fallback to regular React if not available
let motion, AnimatePresence;
try {
  const framerMotion = require('framer-motion');
  motion = framerMotion.motion;
  AnimatePresence = framerMotion.AnimatePresence;
} catch (error) {
  // Fallback to regular div components
  motion = {
    div: React.forwardRef(({ children, initial, animate, transition, variants, whileHover, whileTap, viewport, ...props }, ref) => (
      <div ref={ref} {...props}>{children}</div>
    )),
    img: React.forwardRef(({ children, whileHover, transition, ...props }, ref) => (
      <img ref={ref} {...props} />
    ))
  };
  AnimatePresence = ({ children }) => children;
}

// ===== EXTRACTED COMPONENTS =====

// 1. ThemeToggleButton Component
const ThemeToggleButton = ({ onClick, isDarkMode }) => (
  <IconButton
    onClick={onClick}
    sx={{
      color: 'text.primary',
      transition: 'all 0.3s ease',
      '&:hover': { 
        backgroundColor: 'rgba(0, 172, 205, 0.1)',
        transform: 'scale(1.05)',
      },
    }}
  >
    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
  </IconButton>
);

// 2. NavLinkList Component for Drawer Items
const NavLinkList = ({ items, onClick, activePath, nested = false }) => (
  <>
    {items.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ delay: index * 0.05, duration: 0.2 }}
      >
        <ListItem
          component={Link}
          to={item.path}
          onClick={onClick}
          sx={{
            pl: nested ? 4 : 2,
            borderRadius: 1,
            color: activePath === item.path ? 'secondary.main' : 'text.primary',
            backgroundColor: activePath === item.path ? 'rgba(0, 172, 205, 0.08)' : 'transparent',
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(0, 172, 205, 0.08)',
              transform: 'translateX(4px)',
            },
            mb: 0.5,
          }}
        >
          <ListItemText primary={item.title} />
        </ListItem>
      </motion.div>
    ))}
  </>
);

// 3. MenuButton Component for Mobile Navigation
const MenuButton = ({ onClick, isOpen }) => (
  <IconButton
    onClick={onClick}
    sx={{ 
      color: 'text.primary',
      transition: 'all 0.3s ease',
      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
      '&:hover': { 
        backgroundColor: 'rgba(0, 172, 205, 0.1)',
        transform: isOpen ? 'rotate(90deg) scale(1.05)' : 'rotate(0deg) scale(1.05)',
      },
    }}
  >
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </IconButton>
);

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesMenuAnchor, setResourcesMenuAnchor] = useState(null);
  const [contactMenuAnchor, setContactMenuAnchor] = useState(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isUnder1200 = useMediaQuery('(max-width:1199px)');
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const scrollToTop = useScrollToTop();
  
  // 4. Use useRef for logo instead of querySelector
  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      // Update logo size using ref
      if (logoRef.current) {
        const scale = Math.max(0.85, 1 - (currentScrollY / 1000));
        logoRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileResourcesOpen(false);
      setMobileContactOpen(false);
    }
  };

  const navItems = [
    { title: 'Athletes', path: '/athletes' },
    { title: 'Coaches & Leaders', path: '/coaches' },
    { title: 'Parents', path: '/parents' },
    // { title: 'Pricing', path: '/pricing' }, // Commented out for testing phase
    { title: 'About', path: '/about' },
    // { title: 'Newsletter', path: '/newsletter' }, // Temporarily removed from navigation
    { title: 'Early Access', path: '/inquiry' }, // New tab for testing phase
  ];

  // Commented out for testing phase
  // const resourcesItems = [
  //   { title: 'Blog', path: '/blog' },
  //   { title: 'Free Tools', path: '/tools' },
  //   { title: 'Webinars & Events', path: '/events' },
  // ];

  // Commented out for testing phase - keeping only inquiry page accessible
  // const contactItems = [
  //   { title: 'Get Demo', path: '/demo' },
  //   { title: 'Support Center', path: '/support' },
  //   { title: 'Schedule Consultation', path: '/consultation' },
  // ];

  const resourcesItems = []; // Empty for testing phase
  const contactItems = []; // Empty for testing phase

  const isActivePath = (path) => location.pathname === path;

  const handleNavClick = () => {
    scrollToTop();
    setMobileMenuOpen(false);
    setResourcesMenuAnchor(null);
    setContactMenuAnchor(null);
  };

  // ===== RENDER FUNCTIONS =====

  const renderToolbar = () => (
    <Toolbar 
      sx={{ 
        justifyContent: 'space-between', 
        py: { xs: 0.5, sm: 0.75 },
        minHeight: { xs: '56px !important', md: '64px !important' },
      }}
    >
      {/* Logo */}
      <Box 
        component={Link} 
        to="/" 
        onClick={handleNavClick}
        sx={{ textDecoration: 'none' }}
      >
        <motion.img
          ref={logoRef}
          src={GymnazeLogo}
          alt="GYMNAZE"
          className="gymnaze-logo"
          style={{
            height: isSmallMobile ? '60px' : '75px',
            width: 'auto',
            transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          onMouseEnter={(e) => e.target.style.transform += ' scale(1.02)'}
          onMouseLeave={(e) => {
            const currentScale = Math.max(0.85, 1 - (window.scrollY / 1000));
            e.target.style.transform = `scale(${currentScale})`;
          }}
        />
      </Box>

      {/* Actions Based on Screen Size */}
      {!isUnder1200 ? renderDesktopActions() : renderMobileActions()}
    </Toolbar>
  );

  const renderDesktopActions = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <ThemeToggleButton onClick={toggleTheme} isDarkMode={isDarkMode} />
      <Button
        variant="contained"
        component={Link}
        to="/test"
        size="medium"
        className="backlit-button"
        sx={{
          backgroundColor: 'transparent',
          color: 'background.default',
          border: 'none',
          px: 2.5,
          py: 1,
          fontSize: '0.95rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Take the Test
      </Button>
    </Box>
  );

  const renderMobileActions = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <ThemeToggleButton onClick={toggleTheme} isDarkMode={isDarkMode} />
      <MenuButton onClick={handleMobileMenuToggle} isOpen={mobileMenuOpen} />
    </Box>
  );

  const renderDesktopTabs = () => (
    <Box sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
      <Tabs
        value={false} // Disable tab selection for link-based navigation
        centered
        sx={{
          minHeight: '48px',
          '& .MuiTab-root': {
            color: 'text.primary',
            textTransform: 'none',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '48px',
            py: 1,
            fontSize: '0.95rem',
            transition: 'all 0.3s ease',
            '&:hover': { 
              color: 'secondary.main',
              '&::before': {
                transform: 'translateX(100%)',
              }
            },
            '&.Mui-selected': { color: 'secondary.main' },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(0, 172, 205, 0.1), transparent)',
              transition: 'transform 0.6s ease',
            }
          },
        }}
      >
        {navItems.map((item) => (
          <Tab
            key={item.title}
            label={item.title}
            component={Link}
            to={item.path}
            onClick={handleNavClick}
          />
        ))}
        {/* Commented out for testing phase */}
        {/* <Tab
          label="Resources"
          onClick={(e) => setResourcesMenuAnchor(e.currentTarget)}
        />
        <Tab
          label="Contact"
          onClick={(e) => setContactMenuAnchor(e.currentTarget)}
        /> */}
      </Tabs>
    </Box>
  );

  const renderDropdownMenus = () => (
    <>
      {/* Resources Menu */}
      {resourcesMenuAnchor && (
        <Menu
          anchorEl={resourcesMenuAnchor}
          open={Boolean(resourcesMenuAnchor)}
          onClose={() => setResourcesMenuAnchor(null)}
          sx={{
            '& .MuiPaper-root': {
              animation: 'menuFadeIn 0.2s ease-out',
            }
          }}
        >
          {resourcesItems.map((item) => (
            <MenuItem
              key={item.title}
              component={Link}
              to={item.path}
              onClick={() => {
                setResourcesMenuAnchor(null);
                scrollToTop();
              }}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': { backgroundColor: 'rgba(0, 172, 205, 0.08)' }
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      )}

      {/* Contact Menu */}
      {contactMenuAnchor && (
        <Menu
          anchorEl={contactMenuAnchor}
          open={Boolean(contactMenuAnchor)}
          onClose={() => setContactMenuAnchor(null)}
          sx={{
            '& .MuiPaper-root': {
              animation: 'menuFadeIn 0.2s ease-out',
            }
          }}
        >
          {contactItems.map((item) => (
            <MenuItem
              key={item.title}
              component={Link}
              to={item.path}
              onClick={() => {
                setContactMenuAnchor(null);
                scrollToTop();
              }}
              sx={{
                transition: 'all 0.2s ease',
                '&:hover': { backgroundColor: 'rgba(0, 172, 205, 0.08)' }
              }}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );

  const renderMobileDrawer = () => (
    <AnimatePresence>
      {mobileMenuOpen && (
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={handleMobileMenuToggle}
          PaperProps={{
            sx: {
              width: { xs: '100%', sm: '350px' },
              backgroundColor: 'background.default',
            },
          }}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Box sx={{ p: 2 }}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">Menu</Typography>
                  <IconButton onClick={handleMobileMenuToggle}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </motion.div>

              <List>
                <NavLinkList 
                  items={navItems} 
                  onClick={handleNavClick} 
                  activePath={location.pathname} 
                />

                <Divider sx={{ my: 1 }} />

                {/* Resources Section - Commented out for testing phase */}
                {/* <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <ListItem 
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    sx={{
                      borderRadius: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': { backgroundColor: 'rgba(0, 172, 205, 0.08)' },
                    }}
                  >
                    <ListItemText primary="Resources" />
                    <motion.div
                      animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {mobileResourcesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </motion.div>
                  </ListItem>
                </motion.div>
                
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <Collapse in={mobileResourcesOpen}>
                      <NavLinkList 
                        items={resourcesItems} 
                        onClick={handleNavClick} 
                        activePath={location.pathname} 
                        nested 
                      />
                    </Collapse>
                  )}
                </AnimatePresence> */}

                {/* Contact Section - Commented out for testing phase */}
                {/* <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <ListItem 
                    onClick={() => setMobileContactOpen(!mobileContactOpen)}
                    sx={{
                      borderRadius: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': { backgroundColor: 'rgba(0, 172, 205, 0.08)' },
                    }}
                  >
                    <ListItemText primary="Contact & Support" />
                    <motion.div
                      animate={{ rotate: mobileContactOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {mobileContactOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </motion.div>
                  </ListItem>
                </motion.div>
                
                <AnimatePresence>
                  {mobileContactOpen && (
                    <Collapse in={mobileContactOpen}>
                      <NavLinkList 
                        items={contactItems} 
                        onClick={handleNavClick} 
                        activePath={location.pathname} 
                        nested 
                      />
                    </Collapse>
                  )}
                </AnimatePresence> */}

                <Divider sx={{ my: 2 }} />

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Box sx={{ px: 2 }}>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="contained"
                        component={Link}
                        to="/test"
                        onClick={handleNavClick}
                        fullWidth
                        className="backlit-button"
                        sx={{
                          backgroundColor: 'transparent',
                          color: 'background.default',
                          border: 'none',
                          py: 2,
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        Take the Test
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </List>
            </Box>
          </motion.div>
        </Drawer>
      )}
    </AnimatePresence>
  );

  // ===== MAIN RENDER =====
  return (
    <AppBar 
      position="sticky" 
      elevation={scrolled ? 4 : 0}
      sx={{
        transition: 'all 0.3s ease',
        backgroundColor: scrolled 
          ? isDarkMode ? 'rgba(10, 15, 27, 0.95)' : 'rgba(248, 249, 250, 0.95)'
          : 'background.default',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
        {renderToolbar()}
        {!isMobile && renderDesktopTabs()}
        {renderDropdownMenus()}
      </Container>
      {renderMobileDrawer()}
    </AppBar>
  );
};

export default NavigationBar;