import React, { useEffect, useState } from 'react';
import './Home.css';
import image from '../../assets/image.png';

const roles = ['Software Developer', 'Computer Science Engineer'];

const Home = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => { }, 1000); 
        } else {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className='profileSection'>
      <div className='profile'>
        <h4 className='hello'>Hello,<span className='wave-hand'> 👋</span></h4>
        <h3 className='name'>
          I'm <span style={{ color: 'rgba(3, 255, 255, 1)' }}>Pooja Mukati</span>
        </h3>
        <div className='developer' style={{ color: 'rgba(3, 255, 255, 1)' }} >
          <span className="animated-role">{text}</span>
          <span className="cursor">|</span>
        </div>
      </div>
      <div className="profileimage">
        <img src={image} alt="developer" />
      </div>
    </div>
  );
};

export default Home;





