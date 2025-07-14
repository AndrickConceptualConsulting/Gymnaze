// ===== SPACING CONSTANTS =====
export const SECTION_SPACING = { xs: 6, md: 10 };
export const HERO_SPACING = { xs: 4, md: 8 };
export const CTA_SPACING = { xs: 8, md: 12 };

// ===== GRID SPACING =====
export const GRID_SPACING = {
  '& .MuiGrid-item': { 
    paddingLeft: { xs: '0px !important', md: '32px !important' },
    paddingTop: { xs: '8px !important', md: '32px !important' }
  }
};

export const HERO_GRID_SPACING = {
  '& .MuiGrid-item': { 
    paddingLeft: { xs: '0px !important', md: '32px !important' },
    paddingTop: { xs: '16px !important', md: '32px !important' }
  }
};

// ===== TYPOGRAPHY STYLES =====
export const paragraphStyle = {
  color: 'text.secondary',
  fontSize: '1.1rem',
  lineHeight: 1.7,
  textAlign: { xs: 'left', md: 'left' },
  px: { xs: 2, md: 0 },
};

export const centerParagraphStyle = {
  ...paragraphStyle,
  textAlign: 'center',
  px: 0,
  maxWidth: '800px',
  mx: 'auto',
};

export const sectionHeadingStyle = {
  color: 'text.primary',
  mb: 3,
  fontWeight: 600,
  textAlign: { xs: 'center', md: 'left' },
};

export const centerSectionHeadingStyle = {
  ...sectionHeadingStyle,
  textAlign: 'center',
};

// ===== BACKGROUND COLORS =====
export const BACKGROUNDS = {
  default: 'background.default',
  lightGrey: 'rgba(248, 249, 250, 0.6)',
};

// ===== BUTTON STYLES =====
export const primaryButtonStyle = {
  backgroundColor: 'warning.main',
  color: 'background.default',
  px: 4,
  py: 1.5,
  fontSize: '1.1rem',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'warning.dark',
    transform: 'translateY(-1px)',
    '&::before': {
      transform: 'translateX(100%)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    transition: 'transform 0.6s ease',
  }
};

export const secondaryButtonStyle = {
  borderColor: 'primary.main',
  color: 'primary.main',
  px: 4,
  py: 1.5,
  fontSize: '1.1rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'primary.dark',
    backgroundColor: 'rgba(44, 60, 136, 0.08)',
    transform: 'translateY(-1px)',
  },
};

export const ctaPrimaryButtonStyle = {
  backgroundColor: 'transparent',
  color: 'background.default',
  px: 6,
  py: 2,
  fontSize: '1.2rem',
  fontWeight: 600,
  border: 'none',
  position: 'relative',
  zIndex: 1,
};

export const ctaSecondaryButtonStyle = {
  borderColor: 'transparent',
  color: 'secondary.main',
  backgroundColor: 'transparent',
  px: 6,
  py: 2,
  fontSize: '1.2rem',
  fontWeight: 600,
  position: 'relative',
  zIndex: 1,
};
