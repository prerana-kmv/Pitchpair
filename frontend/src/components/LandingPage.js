import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css'; // Updated the path to the correct location

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const taglines = document.querySelectorAll('.tagline');
    let currentIndex = 0;

    function rotateTaglines() {
      taglines[currentIndex].classList.remove('active');
      taglines[currentIndex].classList.add('exit');

      currentIndex = (currentIndex + 1) % taglines.length;

      taglines[currentIndex].classList.add('active');

      setTimeout(() => {
        document.querySelectorAll('.tagline.exit').forEach(tag => {
          tag.classList.remove('exit');
        });
      }, 500);
    }

    const interval = setInterval(rotateTaglines, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-page">
      <div className="gradient-circle"></div>

      <div className="navbar">
        <div className="navbar-links">
          <a href="#">Features</a>
          <a href="#">Resources</a>
          <a href="#">About Us</a>
          <a href="#">Login</a>
          <button onClick={() => navigate('/signup')}>Sign up</button>
        </div>
      </div>

      <div className="content">
        <div className="frame-tag">
          <span className="diamond"></span> Frame 4
        </div>

        <h1>
          Welcome to the<br />
          platform where<br />
          you can <span className="tagline-container">
            <span className="tagline active" data-index="0">Create</span>
            <span className="tagline" data-index="1">Connect</span>
            <span className="tagline" data-index="2">Collaborate</span>
          </span>
        </h1>

        <div className="mini-text">
          <span className="mini-diamond"></span> Desktop - 1
        </div>
      </div>
    </div>
  );
};

export default LandingPage;