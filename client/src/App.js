import React from 'react';
import './App.css';
import TopNav from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-light">
     <TopNav />
     <HomePage />
     <AboutPage />
     <ContactPage />
     <ProjectsPage />
     <Footer />
    </div>
  );
}

export default App;
