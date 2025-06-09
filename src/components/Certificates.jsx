import { Box, Typography, Grid, Paper, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const certificates = [
  { name: 'Getting Started with Artificial Intelligence', issuer: 'IBM', image: 'https://res.cloudinary.com/ddwglz4bx/image/upload/v1748591053/vlt2ou75cr0jh8kylbis.jpg' },
  { name: ' Artificial Intelligence Fundamentals', issuer: 'IBM', image: 'https://res.cloudinary.com/ddwglz4bx/image/upload/v1748591576/vuki56qroxwplobewdxj.jpg' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, type: 'spring' },
  }),
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom color="primary">
        Certificates
      </Typography>
      <Typography align="center" color="text.secondary" mb={6}>
        My professional certifications and training programs.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, idx) => (
          <Grid item xs={12} sm={6} md={4} key={cert.name}>
            <motion.div
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.18)' }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ borderRadius: 18 }}
            >
              <Paper
                elevation={6}
                onClick={() => handleOpenModal(cert)}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(10px)',
                  border: '2.5px solid',
                  borderImage: 'linear-gradient(135deg, #1976d2 40%, #9c27b0 100%) 1',
                  boxShadow: '0 4px 24px 0 rgba(33, 150, 243, 0.10)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.25)'
                  }
                }}
              >
                {cert.image && (
                  <Box mb={2} display="flex" justifyContent="center">
                    <img src={cert.image} alt={cert.name} style={{ width: '100%', maxHeight: 120, objectFit: 'contain', borderRadius: 8, boxShadow: '0 2px 12px 0 rgba(33, 150, 243, 0.10)' }} />
                  </Box>
                )}
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {cert.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {cert.issuer}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal for enlarged certificate view */}
      <AnimatePresence>
        {isModalOpen && selectedCert && (
          <Modal
            open={isModalOpen}
            onClose={handleCloseModal}
            aria-labelledby="certificate-modal"
            aria-describedby="enlarged-certificate-view"
            disableScrollLock={false}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              overflowY: 'auto',
              '& .MuiBackdrop-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(4px)'
              },
              '&:focus': {
                outline: 'none'
              }
            }}
            BackdropProps={{
              sx: {
                backdropFilter: 'blur(4px)',
                backgroundColor: 'rgba(0, 0, 0, 0.9)'
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                type: 'tween',
                duration: 0.15,
                ease: 'easeInOut'
              }}
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '90vh',
                outline: 'none',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  },
                  zIndex: 1
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box sx={{ p: 4, textAlign: 'center', color: 'white' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {selectedCert.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" mb={3}>
                  {selectedCert.issuer} • {selectedCert.year}
                </Typography>
                <Box
                  sx={{
                    maxHeight: '70vh',
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                      width: '8px',
                      height: '8px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '4px'
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    }
                  }}
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Certificates;