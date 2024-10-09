import React from 'react';
import Features from '../../componentes/features/Features';
import Chartes from '../../componentes/chartes/Chartes';
import WigetLg from '../../componentes/wigetlg/WigetLg';
import Wigetes from '../../componentes/wigetes/Wigetes';
import { xAxisData } from '../../Datas';
import './Home.css'
export default function Home() {
  return (
    <div className='home' >
      < Features />
      <Chartes grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className='homeWigetes'>
        < Wigetes />
        < WigetLg />
      </div>

    </div>
  )
}
