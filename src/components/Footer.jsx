import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const iconStyle = { color: '#222', transition: 'color 0.2s' };
const iconHoverStyle = { color: '#1976d2' };

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: 'grey.100', mt: 8 }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <IconButton
            component="a"
            href="https://github.com/surjyaparia"
            target="_blank"
            rel="noopener"
            sx={{ ...iconStyle, '&:hover': iconHoverStyle }}
          >
            <FaGithub />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/surjyashekharparia/"
            target="_blank"
            rel="noopener"
            sx={{ ...iconStyle, '&:hover': iconHoverStyle }}
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener"
            sx={{ ...iconStyle, '&:hover': iconHoverStyle }}
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            component="a"
            href="/portfolio/#/contact"
            sx={{ ...iconStyle, '&:hover': iconHoverStyle }}
          >
            <FaEnvelope />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary" align="center">
          &copy; {new Date().getFullYear()} SURJYA SHEKHAR PARIA. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 