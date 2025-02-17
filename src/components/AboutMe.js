import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about_me.css';

const AboutMe = () => {
  console.log('Rendering AboutMe');  // Debugging log

  return (
    <div className="about-container">
      {/* Back to Home button */}
      <div className="back-to-home">
        <Link to="/" className="back-link">Back to Home</Link>
      </div>

      <section className="about-section">
        <p>
          As the firstborn of three, I've taken pride in supporting my siblings with their education,
          providing them with scholastic materials and food. My determination to never settle for
          less is fueled by my experiences, including being raised by a single mom who was partially
          in my life.
        </p>

        <h2>Academic and Career Achievements</h2>
        <p>
          As a Computer Science student, I’ve had the privilege of building projects like Innerman
          Pre and Primary School and developing a web system for the school to help admins with
          supervision, both on and off campus. I’ve attended impactful events like the Open Source
          Summit, PyLadies Summit, and Africa’s Talking, which have significantly contributed to my
          growth as a programmer.
        </p>

        <h2>Faith and Community Involvement</h2>
        <p>
          I'm deeply involved in Sunday School at United Christian Church Kasubi, where I’ve learned
          about childhood development and healing from the absence of both my parents. These
          experiences have shaped my understanding of faith and community.
        </p>

        <h2>Mentorship and Empowerment through ALS Africa</h2>
        <p>
          As the IT Lead at Arise, Love, and Serve Africa (ALSA), I've had the incredible opportunity
          to mentor young girls, guiding them in their journey towards becoming leaders in the tech
          field. I believe in drawing them closer to Christ and empowering them through technology and
          faith-based teachings. My role has involved sharing the word of hope with vulnerable
          children, helping them see the possibilities for a better future, and showing them that
          technology can open doors to new opportunities.
        </p>
        <p>
          I also had the privilege of moving to the Far East, where I continued my mission of empowering
          children. As a volunteer, I shared the love of Christ with young minds, teaching them about
          perseverance, hope, and the power of education. Through mentorship and the guidance of faith,
          I was able to help them envision a future filled with opportunities in the tech field.
        </p>

        {/* Image below the section */}
        <div className="image-container">
          <img 
            src="/IMG_8476.JPG" 
            alt="Empowering children through technology" 
            className="about-image"
          />
        </div>

        <h2>Future Vision</h2>
        <p>
          I believe my future is not defined by my past. I’m here to inspire other women to bridge the
          gap between parents and children, nurture women of character and value, and demonstrate that
          perseverance makes anything possible. 
        </p>
        <p>
          A key part of my future vision is nurturing and empowering girls in the tech field. I am passionate about
          encouraging young girls to pursue careers in technology, providing mentorship, resources, and opportunities
          to help them thrive in a traditionally male-dominated industry. By fostering a supportive and inclusive
          environment, I believe we can inspire the next generation of women leaders in tech, creating a more
          diverse and innovative future for all.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
