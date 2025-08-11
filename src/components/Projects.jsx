import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'J.A.R.V.I.S',
    description: 'AI-powered personal voice assistant built with Python for smart automation.',
    image: 'https://res.cloudinary.com/ddwglz4bx/image/upload/v1754895387/Screenshot_2025-08-11_122525_naxlj6.png',
    link: '/project/1',
    github: 'https://github.com/surjyaparia/J.A.R.V.I.S',
  },
  {
    title: 'Wanderlust',
    description: 'Wanderlust is a web app for discovering and sharing travel destinations with user reviews.',
    image: 'https://res.cloudinary.com/ddwglz4bx/image/upload/v1748595991/knncexww5ryv4anfs75a.jpg',
    link: '/project/2',
    github: 'https://github.com/surjyaparia/Wanderlust',
  },
  {
    title: 'GetMeAChai',
    description: 'GetMeAChai – a Next.js-based app for seamlessly collecting online support and donations.',
    image: 'https://res.cloudinary.com/ddwglz4bx/image/upload/v1754893925/Screenshot_2025-08-11_120136_hbz1kf.png',
    link: '/project/3',
    github: 'https://github.com/surjyaparia/Get-Me-A-Chai',
  },
  {
    title: 'Instagram Clone',
    description: 'A clone of Instagram with a focus on user authentication, image upload, and social features.',
    image: 'https://res.cloudinary.com/ddwglz4bx/image/upload/v1748592084/fu41eqeppl6qd4shxfjn.jpg',
    link: '/project/4',
    github: 'https://github.com/surjyaparia/InstagramClone',
  },
];

const isLogo = (img) => img.endsWith('.svg') || img.includes('logo');

const Projects = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom color="primary">
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, borderRadius: 4 }}>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.18)',
                  border: 'none',
                  borderImage: 'none',
                }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{ borderRadius: 18 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    minHeight: 220,
                    maxHeight: 320,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderRadius: 3,
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(10px)',
                    // border: '2.5px solid',
                    borderImage: 'linear-gradient(135deg, #1976d2 40%, #9c27b0 100%) 1',
                    boxShadow: '0 4px 24px 0 rgba(33, 150, 243, 0.10)',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      width: isLogo(project.image) ? '70%' : '100%',
                      height: isLogo(project.image) ? '70%' : '100%',
                      objectFit: isLogo(project.image) ? 'contain' : 'cover',
                      maxHeight: 320,
                      maxWidth: '100%',
                      transition: 'all 0.3s',
                    }}
                  />
                </Box>
              </motion.div>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  component={Link}
                  to={`/project/${idx + 1}`}
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#115293',
                      transform: 'scale(1.05)',
                      boxShadow: '0 6px 20px 0 rgba(25, 118, 210, 0.25)',
                    },
                  }}
                >
                  Details
                </Button>
                <Button
                  component="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    '&:hover': {
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 16px 0 rgba(25, 118, 210, 0.18)',
                    },
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects; 