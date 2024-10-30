import React,{useState, useContext} from 'react'
import './sidebar.css'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import HelpIcon from '@mui/icons-material/Help';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { useScrollTrigger } from '@mui/material';
import {Context} from '../../context/Context'



const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const {onSent, previousPrompt, setRecentPrompt,newChat} = useContext(Context);

    const loadPrompt = async(prompt)=>{
      setRecentPrompt(prompt);
      await onSent(prompt);
    }
  return (
    <div className='sidebar'>
      <div className="top">
            <MenuIcon className='menu icon' onClick = {()=>setExtended(!extended)}/>
            <div onClick ={()=> newChat()} className="new-chat">
            <AddIcon className=' icon'/>
           {extended   ?  <p>New Chat</p> : null  }
            </div>
        
            {extended   ?     <div className="recent">
                    <p className="recent-title">Recent</p>
                    {previousPrompt.map((item,index)=>{
                      return (
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                        <InsertCommentIcon className='icon'/>
                        <p>{item.slice(0,18)}...</p>
                         {/* slice() is used to display atmost 18 characters only */}
                        </div>
                      )
                    })}
                    
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
