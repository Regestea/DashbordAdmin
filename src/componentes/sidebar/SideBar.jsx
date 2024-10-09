import React from 'react';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import { Link } from 'react-router-dom';


import './SideBar.css';

export default function SideBar() {
    return (
        <div>
            <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashbord</h3>
                    <ul className="sidebarList">
                        < Link to="/"  className="link">
                            <li className="sidebarListItem active">
                                <LineStyleIcon className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem ">
                            <TimelineIcon className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem ">
                            <TrendingUpIcon className='sidebarIcon' />
                            sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        < Link to="/users"  className="link">
                            <li className="sidebarListItem active">
                                <PermIdentityIcon className='sidebarIcon' />
                                Users
                            </li>
                        </Link>
                        < Link to="/newusers" className="link">
                            <li className="sidebarListItem ">
                                <StorefrontIcon className='sidebarIcon' />
                                New Users
                            </li>
                        </Link>
                        < Link to="/products" className="link">
                            <li className="sidebarListItem ">
                                <AttachMoneyIcon className='sidebarIcon' />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem ">
                            <BarChartIcon className='sidebarIcon' />
                            Transaction
                        </li>
                        <li className="sidebarListItem ">
                            <MailOutlineIcon className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MessageOutlinedIcon className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem ">
                            <DynamicFeedIcon className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem ">
                            <ChatBubbleOutlineIcon className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem ">
                            <BarChartIcon className='sidebarIcon' />
                            Transaction
                        </li>
                        <li className="sidebarListItem ">
                            <MessageOutlinedIcon className='sidebarIcon' />
                            Messgae
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        
    )
}
