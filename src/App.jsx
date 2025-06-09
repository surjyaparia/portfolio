import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router basename='/'>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot/>
      </div>
    </Router>
  );
}

export default App;
