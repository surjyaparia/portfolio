import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDocker, FaJsSquare, FaDatabase, FaTrophy } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiLeetcode, SiNumpy, SiPandas } from 'react-icons/si';

const topSkills = [
  { name: 'Data Structures & Algorithms', color: '#FFA116', icon: <SiLeetcode size={38} color="#FFA116" /> },
  { name: 'Competitive Programming', color: '#FFD700', icon: <FaTrophy size={38} color="#FFD700" /> },
];

const otherSkills = [
  { name: 'C++', color: '#00599C', icon: <SiCplusplus size={38} color="#00599C" /> },
  { name: 'JavaScript', color: '#f7df1e', icon: <FaJsSquare size={38} color="#f7df1e" /> },
  { name: 'React', color: '#61dafb', icon: <FaReact size={38} color="#61dafb" /> },
  { name: 'Node.js', color: '#8cc84b', icon: <FaNodeJs size={38} color="#8cc84b" /> },
  { name: 'Python', color: '#3776ab', icon: <FaPython size={38} color="#3776ab" /> },
  { name: 'NumPy', color: '#013243', icon: <SiNumpy size={38} color="#013243" /> },
  { name: 'Pandas', color: '#150458', icon: <SiPandas size={38} color="#150458" /> },
  { name: 'MongoDB', color: '#47a248', icon: <SiMongodb size={38} color="#47a248" /> },
  { name: 'Express', color: '#000000', icon: <SiExpress size={38} color="#000000" /> },
  { name: 'HTML', color: '#e34c26', icon: <FaHtml5 size={38} color="#e34c26" /> },
  { name: 'CSS', color: '#1572b6', icon: <FaCss3Alt size={38} color="#1572b6" /> },
  { name: 'Git', color: '#f34f29', icon: <FaGitAlt size={38} color="#f34f29" /> },
  { name: 'Docker', color: '#2496ed', icon: <FaDocker size={38} color="#2496ed" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring' },
  }),
};

const Skills = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom color="primary">
        Skills
      </Typography>
      <Typography align="center" color="text.secondary" mb={6}>
        Here are some of the technologies and tools I work with:
      </Typography>
      <Box mb={4}>
        <Typography variant="h6" color="primary" fontWeight={700} mb={2}>
          Top Skills
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {topSkills.map((skill, idx) => (
            <Grid item xs={6} sm={4} md={3} key={skill.name}>
              <motion.div
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Paper
                  elevation={6}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    fontWeight: 600,
                    borderRadius: 3,
                    background: `linear-gradient(135deg, ${skill.color}22 0%, #fff 100%)`,
                    boxShadow: `0 4px 24px 0 ${skill.color}33`,
                    minHeight: 140,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    letterSpacing: 1,
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: `0 8px 32px 0 ${skill.color}66`,
                    },
                    cursor: skill.name === 'Data Structures & Algorithms' || skill.name === 'Competitive Programming' ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (skill.name === 'Data Structures & Algorithms') {
                      window.open('https://leetcode.com/u/surjyaparia_123/', '_blank');
                    } else if (skill.name === 'Competitive Programming') {
                      window.open('https://www.codechef.com/users/surjyaparia', '_blank');
                    }
                  }}
                >
                  <Box mb={1}>{skill.icon}</Box>
                  {skill.name}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {otherSkills.map((skill, idx) => (
          <Grid item xs={6} sm={4} md={3} key={skill.name}>
            <motion.div
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  fontWeight: 600,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${skill.color}22 0%, #fff 100%)`,
                  boxShadow: `0 4px 24px 0 ${skill.color}33`,
                  minHeight: 140,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  letterSpacing: 1,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: `0 8px 32px 0 ${skill.color}66`,
                  },
                }}
              >
                <Box mb={1}>{skill.icon}</Box>
                {skill.name}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills; 