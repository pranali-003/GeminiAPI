import React,{useState} from 'react'
import './sidebar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import HelpIcon from '@mui/icons-material/Help';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { useScrollTrigger } from '@mui/material';



const Sidebar = () => {

    const [extended, setExtended] = useState(false);
  return (
    <div className='sidebar'>
      <div className="top">
            <MenuIcon className='menu icon' onClick = {()=>setExtended(!extended)}/>
            <div className="new-chat">
            <AddIcon className=' icon'/>
           {extended   ?  <p>New Chat</p> : null  }
            </div>
        
            {extended   ?     <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <InsertCommentIcon className='icon'/>
                        <p>What is react ...</p>
                    </div>
                </div> 
            : null  }
        
            
      </div>
      <div className="bottom">
            <div className="bottom-item recent-entry">
            {extended ? <HelpIcon className="icon"/> : null  }
               <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
            {extended ?  <HistoryIcon className="icon"/> : null  }
                <p>History</p>
            </div>
            <div className="bottom-item recent-entry">
            {extended ? <SettingsIcon className="icon"/> : null  }
                <p>Settings</p>
            </div>
      </div>
    </div>
  )
}

export default Sidebar
