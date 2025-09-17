import React from 'react';
import './About.css';
import skillimg from '../../assets/html.png';
import cssimg from '../../assets/css.png';
import C from '../../assets/C-logo.png';
import javas from '../../assets/javas.png';
import Reactimg from '../../assets/React.png';
import nodejs from '../../assets/nodejs.png';

const About = () => {
  return (
    <div className='about-wrapper'>
      <div className='aboutme'>
        <div className="about-heading">
          <h2>About Me 🦋</h2>
        </div>
        <div className="getmeknow">
          <h4 className='knowme'>Get to Know Me</h4>
          <p className='paragraph'>My name is Pooja Mukati. I'm a Frontend Web Developer building the Front-end of Websites and Web Applications. Check out some of my work in the Projects section.</p>
          <p className='paragraph'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills then don't hesitate to contact me.</p>
        </div>
      </div>

      <div className="skills">
        <div className="myskill">
          <h2>My Skills</h2>
        </div>
        <div className="skillset">
            <div className="skill">
                <img src={skillimg} alt="" />
                <span>HTML</span>
            </div>
            <div className="skill">
                <img src={cssimg} alt="" />
                <span>CSS</span>
            </div>
            <div className="skill">
                <img src={C} alt="" />
                <span>C++</span>
            </div>
            <div className="skill">
                <img src={javas} alt="" />
                <span>Javascript</span>
            </div>
            <div className="skill">
                <img src={Reactimg} alt="" />
                <span>React Js</span>
            </div>
               <div className="skill">
                <img src={nodejs} alt="" />
                <span>Node Js</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
