import React from 'react'
import './main.css'
import PersonIcon from '@mui/icons-material/Person';
import ExploreIcon from '@mui/icons-material/Explore';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import CodeIcon from '@mui/icons-material/Code';
import MessageIcon from '@mui/icons-material/Message';
import AttachmentIcon from '@mui/icons-material/Attachment';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <PersonIcon/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Pranali</span></p>
                <p>How can I help you Today ?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quas.</p>
                    <ExploreIcon className="card-icon"/>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quas.</p>
                    <TipsAndUpdatesIcon className="card-icon"/>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quas.</p>
                    <CodeIcon className="card-icon"/>
                </div>
                <div className="card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quas.</p>
                    <MessageIcon className="card-icon"/>
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter your prompt here' />
                    <div>
                   
                        <AttachmentIcon className="bottom-icon"/>
                        <SendIcon className="bottom-icon"/>
                        <MicIcon className="bottom-icon"/>
                    </div>
                </div>
                <p className="bottom-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deleniti.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
