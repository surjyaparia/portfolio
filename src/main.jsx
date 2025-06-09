import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';

// Error Fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Something went wrong</h2>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// Security utility functions
const preventDefault = (e) => {
  e.preventDefault();
  return false;
};

// Block keyboard shortcuts
const blockShortcuts = (e) => {
  // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') ||
    (e.ctrlKey && e.shiftKey && e.key === 'J') ||
    (e.ctrlKey && e.key === 'U') ||
    (e.ctrlKey && e.key === 'S') ||
    (e.ctrlKey && e.key === 'P')
  ) {
    return preventDefault(e);
  }
};

// Initialize security measures
const initSecurity = () => {
  // Disable right-click
  document.addEventListener('contextmenu', preventDefault);
  
  // Block keyboard shortcuts
  document.addEventListener('keydown', blockShortcuts);
  
  // Disable text selection and copy/paste
  document.addEventListener('selectstart', preventDefault);
  document.addEventListener('copy', preventDefault);
  document.addEventListener('cut', preventDefault);
  document.addEventListener('paste', preventDefault);
  
  // Cleanup function
  return () => {
    document.removeEventListener('contextmenu', preventDefault);
    document.removeEventListener('keydown', blockShortcuts);
    document.removeEventListener('selectstart', preventDefault);
    document.removeEventListener('copy', preventDefault);
    document.removeEventListener('cut', preventDefault);
    document.removeEventListener('paste', preventDefault);
  };
};

// Initialize security when the app loads
if (typeof window !== 'undefined') {
  initSecurity();
}

// Create root element
const container = document.getElementById('root');
const root = createRoot(container);

// Wrap the app with ErrorBoundary
root.render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);

// Log any unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
