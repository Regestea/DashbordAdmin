import React from 'react'
import './TopBar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function TopBar() {
    return (
        <div>
            <div className="topbar">
                <div className="topbarWrapper">

                <div className="topLeft">
                        <span className='logo'>AlirezaBeyg</span>
                        
                    </div>

                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsIcon />
                            <span className='topIconBadege'>2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <LanguageIcon />
                            <span className='topIconBadege'>2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <SettingsIcon />
                           
                        </div>
                        <img src='logo512.png' className='topAvatart'/>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}
