import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';  // Ensure correct file name and path
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="App">
      {/* Render Header only on the Home page */}
      {location.pathname === '/' && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>

      {/* Footer section remains on all pages */}
      <Footer />
    </div>
  );
};

export default App;
