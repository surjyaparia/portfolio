import { Box, Typography, Grid, Paper } from '@mui/material';

const achievements = [
  { 
    icon: '💡', 
    title: 'DSA & CP Achiever', 
    description: 'Solved 400+ DSA problems on LeetCode and actively participate in coding contests.',
    badges: [
      {
        name: '50 Days',
        imageUrl: 'https://assets.leetcode.com/static_assets/others/2550.gif',
        alt: '50 Days Badge'
      },
      {
        name: '100 Days',
        imageUrl: 'https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif',
        alt: '100 Days Badge'
      },
      {
        name: '200 Days',
        imageUrl: 'https://assets.leetcode.com/static_assets/others/200.gif',
        alt: '200 Days Badge'
      },
      
    ]
  },
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
            <Paper 
              elevation={4} 
              sx={{ 
                p: 4, 
                textAlign: 'center', 
                borderRadius: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  '& .MuiTypography-h2': {
                    transform: 'scale(1.1)',
                    display: 'inline-block'
                  }
                },
                '& .MuiTypography-h2': {
                  transition: 'transform 0.3s ease-in-out',
                  display: 'inline-block'
                }
              }}
            >
              <Typography variant="h2" component="div" gutterBottom>
                {ach.icon}
              </Typography>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {ach.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: ach.badges ? 1 : 0 }}>
                {ach.description}
              </Typography>
              {ach.badges && (
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2, flexWrap: 'wrap' }}>
                  {ach.badges.map((badge, idx) => (
                    <Box 
                      key={idx}
                      component="img"
                      src={badge.imageUrl}
                      alt={badge.alt}
                      title={badge.name}
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: 'contain',
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                          filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.2))'
                        }
                      }}
                    />
                  ))}
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Achievements; 