import React from 'react'
import './Contact.css';
import back from '../../assets/back.avif';
import Self from '../../assets/Self.jpeg';
import Insta from '../../assets/insta.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const Contact = () => {
    return (
        <div className="mainbox">
            <h1 className='nice'>Nice to meet you!😊</h1>
            <div className="uperbox">
                <div className="summarybox">
                     <h2>Summary</h2>
                     <p>Hii there,</p>
                     <p>I am a passionate and detail-oriented Frontend Developer with hands-on experience in building responsive and user-friendly web applications using React.js, JavaScript, HTML, and CSS.Currently exploring full-stack development with Node.js and MongoDB.</p>
                </div>
                <div className="imagebox">
                    <img src={Self} alt="" />
                </div>

            </div>
            <div className="lowerbox">
              <span className='find'>FIND ME ON</span>
              <span className='feel'>Feel Free to contact with me</span>
              <div className='touchme'>
                <a href="https://github.com/PoojaMukati12"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/pooja-mukati-37a16924a/"><LinkedInIcon/></a>
                <a href="https://www.instagram.com/pooja_mukku"><InstagramIcon/></a>
                <a href="mailto:poojamukku424@gmail.com"><MailOutlineOutlinedIcon/></a>
              </div>
            </div>
        </div>
    )
}

export default Contact