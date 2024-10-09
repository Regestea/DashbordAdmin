import { useState } from 'react';
import { products } from '../../Datas';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import './Products.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';





export default function UserList() {

  const [productsData, setProductsData] = useState(products)
  const productsDelete = productsId => {
    return setProductsData(productsData.filter(products => products.id !== productsId))
  }

  

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'title',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => {
        return <Link to={`/users/${params.row.id}`} className='link'>
          <div className="userListUser">
            <img src={params.row.avatar}  alt={params.row.title} className='userListImg' />
            {params.row.title}
          </div>
        </Link>
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
      renderCell: (params) => {
        return <div className="userListemail">
          {params.row.price}

        </div>
      }
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
          
           <div className='userListP'>

            <Link to={`/products/${params.row.id}`}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon className='userListDelete'
              onClick={() => productsDelete(params.row.id)}
            />
           </div>
         
        )
      }
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
      
        rows={productsData}
        columns={columns}
        disableSelectionOnClick
        pageSizeOptions={[3]}
        checkboxSelection
      />
    </div>
  )
}
