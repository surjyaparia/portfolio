import { Typography, Button, Box, Container, Stack, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaReact, FaNodeJs, FaPython, FaJsSquare } from 'react-icons/fa';
import { SiMongodb, SiCplusplus } from 'react-icons/si';
import { motion } from 'framer-motion';

const techStack = [
  { name: 'C++', icon: <SiCplusplus size={32} color="#00599C" /> },
  { name: 'Python', icon: <FaPython size={32} color="#3776ab" /> },
  { name: 'React', icon: <FaReact size={32} color="#61dafb" /> },
  { name: 'Node.js', icon: <FaNodeJs size={32} color="#8cc84b" /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} color="#47a248" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={32} color="#f7df1e" /> },
];

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="center" justifyContent="center">
        {/* Left Column - Text Content */}
        <Box flex={1} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            <span style={{ color: '#222', fontWeight: 700 }}>Hi, I&apos;m </span>
            <span style={{ color: '#1976d2', fontWeight: 700 }}>SURJYA SHEKHAR PARIA</span>
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            A passionate Full Stack Developer crafting beautiful and functional web experiences.<br/>
            <span style={{color:'#1976d2', fontWeight:600}}>DSA & CP Enthusiast:</span> Solved 400+ DSA problems on LeetCode. I love tackling algorithmic challenges and preparing for coding interviews at top tech companies.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                fontWeight: 600,
                transition: 'all 0.2s',
                boxShadow: 2,
                '&:hover': {
                  backgroundColor: '#115293',
                  color: '#fff',
                  boxShadow: '0 6px 24px 0 rgba(25, 118, 210, 0.18)',
                  transform: 'scale(1.04)',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                fontWeight: 600,
                transition: 'all 0.2s',
                borderColor: '#1976d2',
                color: '#1976d2',
                backgroundColor: 'transparent',
                '&:hover': {
                  borderColor: '#1976d2',
                  color: '#fff',
                  backgroundColor: '#1976d2',
                  transform: 'scale(1.04)',
                  boxShadow: '0 4px 16px 0 rgba(25, 118, 210, 0.10)',
                },
              }}
            >
              Contact Me
            </Button>
            <Button
              component="a"
              href="https://surjyaparia.github.io/portfolio/Surjya_Shekhar_Paria_Resume.pdf"
              download
              variant="outlined"
              color="secondary"
              size="large"
              sx={{
                fontWeight: 600,
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  borderColor: '#1976d2',
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 16px 0 rgba(33, 150, 243, 0.10)',
                },
              }}
            >
              Download Resume
            </Button>
          </Stack>
          <Stack direction="row" spacing={3} mt={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <a href="https://github.com/surjyaparia" target="_blank" rel="noopener noreferrer">
              <FaGithub size={28} color="#333" />
            </a>
            <a href="https://www.linkedin.com/in/surjyashekharparia/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} color="#1976d2" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={28} color="#1da1f2" />
            </a>
          </Stack>
        </Box>
        {/* Right Column - Image/Animation */}
        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.18)' }}
            style={{ borderRadius: 32 }}
          >
            <Box
              sx={{
                width: 320,
                height: 320,
                borderRadius: '32px',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(16px)',
                border: '2.5px solid',
                borderImage: 'linear-gradient(135deg, #1976d2 40%, #9c27b0 100%) 1',
                boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                style={{ width: '100%' }}
              >
                <Typography variant="h4" color="#222" align="center" fontWeight={700}>
                  Full Stack Developer & AI/ML Enthusiast
                  <br />
                  <span style={{ fontSize: 18, opacity: 0.8, color: '#555' }}>
                    Specializing in Data Science, Machine Learning, React, and Node.js
                  </span>
                </Typography>
              </motion.div>
              {/* Decorative gradient blobs */}
              <Box sx={{ position: 'absolute', top: -30, left: -30, width: 80, height: 80, bgcolor: '#1976d2', opacity: 0.18, borderRadius: '50%', filter: 'blur(16px)' }} />
              <Box sx={{ position: 'absolute', bottom: -30, right: -30, width: 80, height: 80, bgcolor: '#9c27b0', opacity: 0.18, borderRadius: '50%', filter: 'blur(16px)' }} />
            </Box>
          </motion.div>
        </Box>
      </Stack>
      {/* Skills Preview / Tech Stack */}
      <Box mt={10}>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom color="primary">
          Tech Stack
        </Typography>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {techStack.map((tech) => (
            <Grid item xs={6} sm={4} md={2} key={tech.name}>
              <motion.div
                whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.18)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ borderRadius: 12 }}
              >
                <Paper elevation={5} sx={{ p: 3, textAlign: 'center', borderRadius: 3, minHeight: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  {tech.icon}
                  <Typography variant="subtitle1" fontWeight={600} mt={1}>{tech.name}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 