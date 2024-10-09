import { React, useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Wigetes.css';



export default function Wigetes() {
  
  const [datas, setDatas] = useState([]);
  

  useEffect(async() => {
    await fetch('https://alirezabeyg-62842-default-rtdb.firebaseio.com/users.json')
      .then(response => response.json())
      .then(data => setDatas(Object.entries(data)))
  }, [])


  return (
    <>
      <div className='widgtSm'>
        <span className='widgtSmTitle'>New Join Member</span>
        <ul className="widgetSmList">
        {datas.map(data => (
            <li className="widgetListItem">
              <img src="./20240501_175315.jpg" className='widgetSmImg' />
              <div className="widgetSmUser">
                <span className="widgetSmUserName">{data[1].name}</span>
                <span className="widgetSmUserTitle">{data[1].title}</span>
              </div>
              <button className="widgetSmButton">
                <VisibilityIcon className='widgetSmIcon' />
              </button>
            </li>
        ))}
        </ul>
      </div>
    </>

  )
}
