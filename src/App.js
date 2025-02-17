import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  // Make sure file name is "Home.js" (capital 'H')
import AboutMe from './components/AboutMe';  // Correct case "AboutMe.js"
import Header from './components/Header';  // Correct case "Header.js"
import Footer from './components/Footer';  // Correct case "Footer.js"
import './App.css';  // Import from the src folder


const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header section */}
        <Header />

        <main>
          {/* Define routes for Home and AboutMe pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>

        {/* Footer section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
