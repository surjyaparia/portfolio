import { useState, useRef, useEffect, useCallback } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { Modal, Box, IconButton } from '@mui/material';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your AI assistant. How can I help you learn more about Surjya?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);
  const chatToggleRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Toggle chat handler
  const toggleChat = useCallback((e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  // Close chat handler
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle click outside to close chat
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target) &&
          chatToggleRef.current && !chatToggleRef.current.contains(event.target)) {
        handleClose();
      }
    };

    // Add event listener with a small delay to avoid immediate trigger
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponses = {
        greeting: ["Hello! I'm here to help you learn more about Surjya.", "Hi there! What would you like to know about Surjya's skills and experience?"],
        skills: ["Surjya is skilled in React, Node.js, and various web technologies.", "He has experience with full-stack development and modern JavaScript frameworks."],
        experience: ["Surjya has worked on multiple projects including web applications and mobile apps.", "He has experience in both freelance and team-based development environments."],
        education: ["Surjya has a strong educational background in Computer Science and Engineering in Artificial Intelligence & Machine Learning."],
        contact: ["You can reach out to Surjya through the contact section of this portfolio.", "Feel free to connect with him on LinkedIn for professional inquiries."],
        default: ["I'm an AI assistant here to help you learn more about Surjya. You can ask me about his skills, experience, or projects.", "I'm not sure about that. Would you like to know about Surjya's skills or experience?"]
      };

      const input = inputValue.toLowerCase();
      let responseType = 'default';

      if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
        responseType = 'greeting';
      } else if (input.includes('skill') || input.includes('technology') || input.includes('tech stack')) {
        responseType = 'skills';
      } else if (input.includes('experience') || input.includes('work') || input.includes('job')) {
        responseType = 'experience';
      } else if (input.includes('education') || input.includes('degree') || input.includes('college')) {
        responseType = 'education';
      } else if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
        responseType = 'contact';
      }

      const possibleResponses = botResponses[responseType] || botResponses.default;
      const randomResponse = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
      
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      <button 
        ref={chatToggleRef}
        className="chatbot-toggle" 
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <FaRobot className="chatbot-icon" />
      </button>

      <div className={`chatbot-window ${isOpen ? 'open' : ''}`} ref={chatWindowRef}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <FaRobot className="chatbot-icon" />
            <span>AI Assistant</span>
          </div>
          <button 
            className="close-btn"
            onClick={handleClose}
            aria-label="Close chat"
          >
            <FaTimes />
          </button>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="chatbot-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me about Surjya..."
            autoFocus
          />
          <button type="submit">
            <FaPaperPlane className="send-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
