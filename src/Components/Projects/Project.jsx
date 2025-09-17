import React from 'react'
import './Project.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import notessaver from '../../assets/notes.png';
import language from '../../assets/language.png';
import Sorting from '../../assets/Sorting.png';
import Amazone from '../../assets/Amazone.png';
import Tic from '../../assets/Tic.png';
import AveryCare from '../../assets/AveryCare.png'
import BlurCircularIcon from '@mui/icons-material/BlurCircular';

const Project = () => {
  return (
    <div className="projectsec">
        <h2 className='projecthead'>My Projects📖</h2>
        <div className="projectcon">
            <div className="projectcard">
                <img src={AveryCare} alt="Notes Saver" />
                <h3 className='Projecttitle'>AveryCare - Your AI Powered Health Assistant</h3>
                <p>Developed AveryCare, an AI-powered health assistant platform using MERN stack with secure authentication and role-based access.Integrated Twilio Programmable Voice and Google Gemini AI to provide real-time interactive voice conversations with speech recognition.</p>
                <div className='buttons'>
                <a href="https://github.com/PoojaMukati12/avery_care_frontend"><GitHubIcon/>Github</a>
                <a href="https://averycare.vercel.app/"><BlurCircularIcon/>Demo</a>
                </div>
            </div>  

            <div className="projectcard">
                <img src={Sorting} alt="Notes Saver" />
                <h3 className='Projecttitle'>Sorting Visualizer</h3>
                <p>Developed the Sorting Visualizer, a web application to visualize classic sorting algorithms such as Bubble Sort, Selection Sort, and Insertion Sort.I combine web development with DSA to showcase algorithmic concepts through interactive visualizations.</p>
                <div className='buttons'>
                <a href="https://github.com/PoojaMukati12/Sorting-Visualizer?tab=readme-ov-file"><GitHubIcon/>Github</a>
                <a href="https://poojamukati12.github.io/Sorting-Visualizer/"><BlurCircularIcon/>Demo</a>
                </div>
            </div>   

            <div className="projectcard">
                <img src={notessaver} alt="Notes Saver" />
                <h3 className='Projecttitle'>Notes Saver Application</h3>
                <p>Notes Saver Application is a simple and intuitive web app that allows users to create, edit, and delete notes for better productivity. It features a clean UI, real-time updates, and uses local storage or a backend to save user data efficiently.</p>
                <div className='buttons'>
                <a href="https://github.com/PoojaMukati12/Notes-Saver-App"><GitHubIcon/>Github</a>
                <a href="https://notes-saver-app-gamma.vercel.app/"><BlurCircularIcon/>Demo</a>
                </div>
            </div>   
            <div className="projectcard">
                <img src={language} alt="Notes Saver" />
                <h3 className='Projecttitle'>Language Translator</h3>
                <p>Developed a Language Translator web application using React and external translation APIs. The app supports real-time text translation across multiple languages with a clean and user-friendly interface.</p>
                <div className='buttons'>
                    <a href="https://github.com/PoojaMukati12/Language-Translator?tab=readme-ov-file"><GitHubIcon/>Github</a>
                    <a href="https://language-translator-lake.vercel.app/"><BlurCircularIcon/>Demo</a>
                </div>
            </div>    
            <div className="projectcard">
                <img src={Amazone} alt="Notes Saver" />
                <h3 className='Projecttitle'>Amazone Clone</h3>
                <p>Developed a fully responsive Amazon Clone using React.js, replicating core features like homepage layout, product listings, and search functionality.</p>
                <div className='buttons'>
                <a href="https://github.com/PoojaMukati12/Amazone-Clone?tab=readme-ov-file"><GitHubIcon/>Github</a>
                <a href="https://amazone-clone-ldxv.vercel.app/"><BlurCircularIcon/>Demo</a>
                </div>
            </div>    
               
            <div className="projectcard">
                <img src={Tic} alt="Notes Saver" />
                <h3 className='Projecttitle'>Tic-Tac-Toe</h3>
                <p>Developed Tic-Tac-Toe,a game where two players take turns making spaces in a 3x3 grid.The game is typically played with X and O symbols, where one player uses X, and the other uses O.</p>
                <div className='buttons'>
                <a href="https://github.com/PoojaMukati12/Tic-Tac-Toe?tab=readme-ov-file"><GitHubIcon/>Github</a>
                <a href="https://tic-tac-toe-blond-eta.vercel.app/"><BlurCircularIcon/>Demo</a>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Project