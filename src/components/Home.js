import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // Import styles

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Asaaba Shallot's Website</h1>
        <p>Computer Science Student | Developer | Empowering Women in Tech</p>
        <img
          src="/a4ad072a7f91a6ae589b4cdfc3f9bda4.jpg" // This points to the image in the public folder
          alt="Asaaba Shallot"
          className="profile-image"
        />
      </header>

      <section>
        <h2>About Me</h2>
        <p>Learn more about my journey and the projects I am passionate about.</p>
        <Link to="/about">Read More</Link>
      </section>

      <section>
        <h2>My Projects</h2>
        <ul>
          <li>Sentiment Analysis of Social Media Posts</li>
          <li>Website for Arise, Love, and Serve Africa (ALSA)</li>
          <li>Innerman Pre and Primary School Web System</li>
        </ul>
      </section>

      <section>
        <h2>Languages & Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Python, JavaScript, SQL, HTML, CSS</li>
          <li><strong>Frameworks & Libraries:</strong> Flask, React.js, Bootstrap</li>
          <li><strong>Database Management:</strong> MySQL</li>
          <li><strong>Development Tools:</strong> Git, VS Code, Postman</li>
          <li><strong>Other Skills:</strong> API Development, Problem-Solving, Debugging</li>
        </ul>
      </section>

      <footer>
        <p>Connect with me on my <a href="https://www.linkedin.com">LinkedIn</a> and <a href="https://github.com/asaabaC">GitHub</a>.</p>
      </footer>
    </div>
  );
};

export default Home;
