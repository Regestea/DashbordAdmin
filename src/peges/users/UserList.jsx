import React from 'react';
import { useState } from 'react';
import { userRow } from '../../Datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './UserLIst.css';





export default function UserList() {

  const [userDatas, setUserDatas] = useState(userRow)

  const userDelete = userId => {
    return setUserDatas(userDatas.filter(user => user.id != userId))
  }
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return <Link to="/" className='link'>
          <div className="userListUser">
            <img src={params.row.avatar} className='userListImg' />
            {params.row.username}
          </div>
        </Link>
      }
    },
    {
      filed: 'email',
      headerName: 'Email',
      width: 200,
      renderCell: (params) => {
        return <div className="userListemail">
          {params.row.email}

        </div>
      }
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
          <div className='userListP'>

            <Link to={`/users/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userListDelete'
              onClick={() => userDelete(params.row.id)}
            />
          </div>
          </>
        )
      }
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
        rows={userDatas}
        columns={columns}
        pageSize={2}
      />
    </div>
  )
}
