import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Chip,
  useTheme,
} from '@mui/material';
import { 
  Security as SecurityIcon, 
  Schedule as ScheduleIcon, 
  Group as GroupIcon, 
  Storage as StorageIcon, 
  Email as EmailIcon, 
  Visibility as VisibilityIcon 
} from '@mui/icons-material';

const Privacy = () => {
  const theme = useTheme();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <SecurityIcon />,
      content: 'Our Privacy Policy'
    },
    {
      id: 'beta-collection',
      title: 'Beta Program Data Collection',
      icon: <StorageIcon />,
      content: 'Information we collect during beta testing'
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Data',
      icon: <GroupIcon />,
      content: 'How your information helps improve our platform'
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Protection',
      icon: <VisibilityIcon />,
      content: 'Who we share data with and how we protect it'
    },
    {
      id: 'contact',
      title: 'Contact & Updates',
      icon: <EmailIcon />,
      content: 'How to reach us and policy updates'
    }
  ];

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="BETA PRIVACY POLICY"
            sx={{
              backgroundColor: 'warning.main',
              color: 'white',
              fontWeight: 600,
              mb: 3,
              px: 2,
              py: 1,
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Your privacy is important to us. This policy explains how GYMNAZE collects, 
            uses, and protects your information during our beta program.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <ScheduleIcon fontSize="small" />
            Last updated: {currentDate}
          </Typography>
        </Box>

        {/* Main Content */}
        <Paper 
          elevation={1}
          sx={{ 
            p: { xs: 4, md: 6 }, 
            borderRadius: '16px',
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          {/* Overview Section */}
          <Box id="overview" sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <SecurityIcon sx={{ color: theme.palette.primary.main }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                Overview
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              GYMNAZE is committed to protecting your privacy and being transparent about our data practices. 
              As we&apos;re currently in beta, this policy specifically addresses how we handle data during our 
              testing phase and what you can expect as we develop our platform.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              This privacy policy applies to all interactions with GYMNAZE, including our website, 
              beta assessment tools, communications, and any future applications or services.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Beta Data Collection Section */}
          <Box id="beta-collection" sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <StorageIcon sx={{ color: theme.palette.secondary.main }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                Beta Program Data Collection
              </Typography>
            </Box>
            
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Information We Collect During Beta Testing:
            </Typography>
            
            <List sx={{ mb: 3 }}>
              <ListItem>
                <ListItemText
                  primary="Beta Access Form Data"
                  secondary="Name, email address, role (athlete/coach/parent), sport, organization, and interest level in our platform"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Assessment Responses"
                  secondary="Your answers to mental performance and leadership assessment questions (used to improve our algorithms and provide insights)"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Usage Analytics"
                  secondary="How you interact with our beta platform, which features you use, time spent, and navigation patterns"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Feedback & Communications"
                  secondary="Beta feedback, support requests, and any communications you send us"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Technical Data"
                  secondary="IP address, browser type, device information, and basic technical metrics for platform optimization"
                />
              </ListItem>
            </List>

            <Box sx={{ 
              backgroundColor: 'warning.light', 
              p: 3, 
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'warning.main',
              mb: 3
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Beta Testing Notice
              </Typography>
              <Typography variant="body2">
                During our beta phase, we may collect additional diagnostic data to improve platform performance. 
                All beta participants will be notified of any significant changes to data collection practices.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Data Usage Section */}
          <Box id="data-usage" sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <GroupIcon sx={{ color: theme.palette.primary.main }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                How We Use Your Data
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              We use the information we collect to improve our platform and provide you with better insights:
            </Typography>

            <List sx={{ mb: 3 }}>
              <ListItem>
                <ListItemText
                  primary="Platform Development"
                  secondary="Improving our assessment algorithms, user interface, and overall platform experience"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Personalized Insights"
                  secondary="Providing you with relevant mental performance and leadership assessments and recommendations"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Research & Analytics"
                  secondary="Understanding trends in sports psychology and mental performance (all research uses aggregated, anonymized data)"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Communication"
                  secondary="Sending you beta updates, platform improvements, and relevant sports psychology insights"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Support"
                  secondary="Providing customer support and responding to your questions or feedback"
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Data Sharing & Protection */}
          <Box id="data-sharing" sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <VisibilityIcon sx={{ color: theme.palette.secondary.main }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                Data Sharing & Protection
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              We Do NOT Share Your Personal Data With Third Parties, Except:
            </Typography>

            <List sx={{ mb: 3 }}>
              <ListItem>
                <ListItemText
                  primary="Service Providers"
                  secondary="Trusted partners who help us operate our platform (email services, analytics tools, hosting providers) - all bound by strict confidentiality agreements"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Legal Requirements"
                  secondary="When required by law or to protect the rights, property, or safety of GYMNAZE, our users, or others"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="With Your Consent"
                  secondary="Any other sharing will only occur with your explicit permission"
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Data Protection Measures:
            </Typography>

            <List sx={{ mb: 3 }}>
              <ListItem>
                <ListItemText
                  primary="Encryption"
                  secondary="All data is encrypted in transit and at rest using industry-standard protocols"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Access Controls"
                  secondary="Strict internal access controls ensure only authorized team members can access your data"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Regular Security Reviews"
                  secondary="We conduct regular security assessments and updates to protect your information"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Data Minimization"
                  secondary="We only collect and retain data that's necessary for our platform's operation and improvement"
                />
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Your Rights:
            </Typography>

            <List sx={{ mb: 3 }}>
              <ListItem>
                <ListItemText
                  primary="Access Your Data"
                  secondary="Request a copy of the personal data we have about you"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Correct Inaccuracies"
                  secondary="Update or correct any incorrect personal information"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Delete Your Data"
                  secondary="Request deletion of your personal data (note: some data may be retained for legitimate business purposes)"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Opt-Out"
                  secondary="Unsubscribe from marketing communications at any time"
                />
              </ListItem>
            </List>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Contact & Updates */}
          <Box id="contact" sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <EmailIcon sx={{ color: theme.palette.primary.main }} />
              <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                Contact & Updates
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              If you have any questions about this privacy policy, want to exercise your data rights, 
              or need to contact us about privacy concerns, please reach out:
            </Typography>

            <Box sx={{ 
              backgroundColor: 'primary.light', 
              p: 3, 
              borderRadius: '8px',
              mb: 3 
            }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                Privacy Contact Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, color: 'white' }}>
                <strong>Email:</strong>{' '}
                <Link href="mailto:web@gymnaze.com" sx={{ color: 'warning.main', fontWeight: 600 }}>
                  web@gymnaze.com
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, color: 'white' }}>
                <strong>General Contact:</strong>{' '}
                <Link href="mailto:hello@gymnaze.com" sx={{ color: 'warning.main', fontWeight: 600 }}>
                  hello@gymnaze.com
                </Link>
              </Typography>
            </Box>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Policy Updates
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              We may update this privacy policy as our platform evolves and exits beta. 
              We&apos;ll notify beta participants of any significant changes via email and update 
              the &quot;Last updated&quot; date at the top of this policy. Continued use of our platform 
              after policy updates constitutes acceptance of the revised terms.
            </Typography>
          </Box>
        </Paper>

        {/* Footer CTA */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Questions about our privacy practices? We&apos;re here to help.
          </Typography>
          <Link 
            href="mailto:web@gymnaze.com"
            sx={{
              display: 'inline-block',
              px: 4,
              py: 2,
              backgroundColor: 'secondary.main',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'secondary.dark',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Contact Us About Privacy
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Privacy;