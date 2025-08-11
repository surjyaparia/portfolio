import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';

const projectDetails = {
  1: {
    title: 'J.A.R.V.I.S',
    description: 'An AI-powered personal voice assistant built with Python, capable of executing commands, fetching information, and automating daily tasks.',
    image: 'https://i.gifer.com/Mr3W.gif',
    github: 'https://github.com/surjyaparia/J.A.R.V.I.S',
    demo: 'https://jarvis-it6z.onrender.com/',
    technologies: [
      'Python',
      'Flask for backend API',
      'SpeechRecognition for voice commands',
      'Pyttsx3 for text-to-speech',
      'APIs for fetching data (e.g., weather, news, YouTube)',
    ],
    features: [
      'Voice command recognition',
      'Text-to-speech responses',
      'Play YouTube videos or music',
      'Send WhatsApp messages',
      'Others'
    ],
  },

  2: {
    title: 'Wanderlust',
    description: 'Wanderlust is a web app for discovering and sharing travel destinations with user reviews.',
    image: 'https://i.pinimg.com/originals/50/03/fe/5003fef95b56794f052de80332eda3b2.gif',
    github: 'https://github.com/surjyaparia/Wanderlust',
    demo: 'https://wanderlust-onoc.onrender.com/',
    technologies: [
      'Frontend: HTML, CSS, JavaScript, EJS',
      'Backend: Node.js, Express.js',
      'Database: MongoDB',
      'Architecture: MVC Pattern',
    ],
    features: [
      'Add new travel spots with descriptions and images',
      'Share reviews and rate destinations',
      'User authentication (register/login/logout)',
      'Responsive design for all devices',
    ],
  },

  3: {
    title: 'GetMeAChai',
    description: 'GetMeAChai – a Next.js-based app for seamlessly collecting online support and donations.',
    image: 'https://media.tenor.com/fK_mqBr8xGIAAAAj/coffee-lover.gif',
    github: 'https://github.com/surjyaparia/Get-Me-A-Chai',
    demo: 'https://get-me-a-chai-vzju.onrender.com/',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'NextAuth for authentication',
      'Razorpay API for payments',
      'MongoDB for database management',
    ],
    features: [
      'User authentication (login/register)',
      'Accept payments via Razorpay',
      'Responsive and mobile-friendly UI',
      'Profile and dashboard management'
    ],
  },

  4: {
    title: 'Instagram Clone',
    description: 'A clone of Instagram with a focus on user authentication, image upload, and social features.',
    image: 'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyMTMydWFneTBoaWUzaXVpdjNlYjNyNzY1NWt4dDkwanhnenlvcHo5ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uo6rcjwHSAFsQ/source.gif',
    github: 'https://github.com/surjyaparia/InstagramClone',
    demo: 'https://instagram-x3e1.onrender.com',
    technologies: [
      'MERN Stack',
      'Socket.io for real-time messaging and notifications',
      'JWT for authentication',
    ],
    features: [
      'User authentication (register/login/logout)',
      'Image upload and sharing',
      'Real-time messaging',
      'Notifications',
      'Like and comment on posts',
      'Follow/unfollow users',
      'Profile management',
    ],
  },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) return <Typography variant="h5">Project not found.</Typography>;

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={4}>
        <Box flex={1}>
          <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} />
        </Box>
        <Box flex={2}>
          <Typography variant="h4" fontWeight={700} gutterBottom color="primary">
            {project.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {project.description}
          </Typography>
          <Button
            component="a"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            sx={{
              fontWeight: 600,
              transition: 'all 0.3s ease',
              marginRight: 2,
              '&:hover': {
                backgroundColor: '#115293',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px 0 rgba(25, 118, 210, 0.25)',
              },
            }}
          >
            Live Demo
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
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#1976d2',
                color: '#fff',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 20px 0 rgba(25, 118, 210, 0.25)',
              },
            }}
          >
            GitHub
          </Button>
        </Box>
        <Box flex={1} sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: 2,
          minHeight: 250,
          background: 'linear-gradient(135deg, #e3f0ff 40%, #f3e7fa 100%)',
          color: '#222',
          backdropFilter: 'blur(12px)',
          border: '2.5px solid',
          borderImage: 'linear-gradient(135deg, #b6d0f7 40%, #e0c8f7 100%) 1',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.18)',
          },
        }}>
          <Typography variant="h6" fontWeight={700} gutterBottom align="center" color="primary" sx={{ mb: 2 }}>
            Technologies Used
          </Typography>
          <ul style={{ listStyleType: 'disc', paddingLeft: 24, margin: 0, color: '#222', fontSize: 16, fontWeight: 500 }}>
            {project.technologies && project.technologies.map((tech, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>{tech}</li>
            ))}
          </ul>
        </Box>
        <Box flex={1} sx={{
          p: 3,
          borderRadius: 3,
          boxShadow: 2,
          minHeight: 250,
          background: 'linear-gradient(135deg, #f3e7fa 40%, #e3f0ff 100%)',
          color: '#222',
          backdropFilter: 'blur(12px)',
          border: '2.5px solid',
          borderImage: 'linear-gradient(135deg, #e0c8f7 40%, #b6d0f7 100%) 1',
          ml: { md: 2, xs: 0 },
          mt: { xs: 3, md: 0 },
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 8px 32px 0 rgba(156, 39, 176, 0.18)',
          },
        }}>
          <Typography variant="h6" fontWeight={700} gutterBottom align="center" color="primary" sx={{ mb: 2 }}>
            Features
          </Typography>
          <ul style={{ listStyleType: 'disc', paddingLeft: 24, margin: 0, color: '#222', fontSize: 16, fontWeight: 500 }}>
            {project.features && project.features.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: 8 }}>{feature}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectDetail; 