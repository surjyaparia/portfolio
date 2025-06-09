import { Box, Typography, Grid, Paper } from '@mui/material';

const achievements = [
  { icon: '💡', title: 'DSA & CP Achiever', description: 'Solved 400+ DSA problems on LeetCode and actively participate in coding contests.' },
  { icon: '🏆', title: 'Hackathon Winner', description: 'First place in the annual coding competition.' },
  { icon: '🌟', title: 'Open Source Contributor', description: 'Contributed to multiple open-source projects.' },
  { icon: '🎯', title: 'Best Project Award', description: 'Received recognition for innovative project implementation.' },
  { icon: '🎤', title: 'Technical Speaker', description: 'Presented at multiple tech conferences.' },
  
];

const Achievements = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom color="primary">
        My Achievements
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Here are some of my notable achievements and milestones in my professional journey.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {achievements.map((ach, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Paper elevation={4} sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
              <Typography variant="h2" component="div" gutterBottom>
                {ach.icon}
              </Typography>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {ach.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ach.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements; 