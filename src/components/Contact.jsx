import { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Stack, Alert, Paper, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_svsf7zj';
const TEMPLATE_ID = 'template_45l7cph';
const PUBLIC_KEY = 'PiOmGUfAZFFOz7-WL';  

const LoadingDots = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <span>Sending{dots}</span>;
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      document.querySelector(`[name="${firstErrorField}"]`).focus();
      return;
    }
    
    setFormErrors({});
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: form.name,
        email: form.email,
        message: form.message,
        title: "Contact Form Submission"
      }, PUBLIC_KEY);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom color="primary">
          Contact Me
        </Typography>
        <Typography align="center" color="text.secondary" mb={4}>
          Feel free to reach out for collaborations, project inquiries, or just to say hello!
        </Typography>
        {submitted && <Alert severity="success" sx={{ mb: 2 }}>Thank you for reaching out! I'll get back to you soon.</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={!!formErrors.name}
              helperText={formErrors.name}
              fullWidth
              sx={{ '& .MuiFormHelperText-root': { position: 'absolute', bottom: -22 } }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
              fullWidth
              sx={{ '& .MuiFormHelperText-root': { position: 'absolute', bottom: -22 } }}
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={!!formErrors.message}
              helperText={formErrors.message}
              fullWidth
              multiline
              minRows={4}
              sx={{ '& .MuiFormHelperText-root': { position: 'absolute', bottom: -22 } }}
            />
            <Button type="submit" variant="contained" color="primary" size="large" disabled={loading}>
              {loading ? <LoadingDots /> : 'Send Message'}
            </Button>
          </Stack>
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <IconButton component="a" href="https://github.com/surjyaparia" target="_blank" rel="noopener" color="inherit">
            <FaGithub />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/surjyashekharparia" target="_blank" rel="noopener" color="inherit">
            <FaLinkedin />
          </IconButton>
          <IconButton component="a" href="https://twitter.com/yourusername" target="_blank" rel="noopener" color="inherit">
            <FaTwitter />
          </IconButton>
          <IconButton component="a" href="/contact#/contact" color="inherit">
            <FaEnvelope />
          </IconButton>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Contact; 