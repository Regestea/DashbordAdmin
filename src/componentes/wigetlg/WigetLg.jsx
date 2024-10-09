import React from 'react';
import { transaction } from './../../Datas';

import './WigetLg.css';



export default function WigetLg() {

    const Button = ({ type }) => {
        return <button className={'wigetLgButton' + type} >{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest TransActions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {transaction.map(trans => (
                    <tr key={trans.id} className="wigetLgTr">
                        <td className="wigetLgUser">
                            <img src="./logo512.png" className='widgetLgImg' />
                            <span className='wigetLgName'>{trans.customer}</span>
                        </td>
                        <td className="wigetLgDate">
                          {trans.data}
                        </td>
                        <td className="wigetLgAmount">
                            {trans.amount}
                        </td>
                        <td className="wigetLgStatus">

                            <Button type={trans.status} />
                        </td>
                    </tr>
                ))}

            </table>
        </div>

    )
}


{/*<div className='wigetLg'>
    <h3 className="wigetLgTitle">Latest TransActions</h3>
    {/* <table className="wigetLgTable">
    <tr className="wigetLgTr">
        <th className="wigetLgTh">Customer</th>
        <th className="wigetLgTh">Date</th>
        <th className="wigetLgTh">Amount</th>
        <th className="wigetLgTh">Status</th>
    </tr> 
    {/*
</table> */}
{/*</div>} */ }