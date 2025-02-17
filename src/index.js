import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from 'react-dom/client'
import './styles/index.css';  // Global styles (optional)
import App from './App';  // Import the App component

// Use createRoot for rendering
const root = ReactDOM.createRoot(document.getElementById('root')); // Matches the id in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
