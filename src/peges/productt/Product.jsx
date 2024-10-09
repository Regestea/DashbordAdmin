import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chartes from '../../componentes/chartes/Chartes'
import { productsData, products } from '../../Datas'
import { useParams } from 'react-router-dom'
import PublishIcon from '@mui/icons-material/Publish';

import './Product.css'

export default function Product() {
  let params = useParams()

  const [datas, setDatas] = useState(products)


  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          < Chartes title="Sale In Month" data={productsData} dataKey='sales' />
        </div>
        <div className="productTopRight">


          <div className="productInfoTop">
            <img src={datas.find(data => data.id == params.productID).avatar} className='productInfoImg' />
            <span className='productName'>{datas.find(data => data.id == params.productID).title}</span>
          </div>


          <div className="productInfoBottom">


            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">{datas.find(data => data.id == params.productID).id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">name</div>
              <div className="productInfoValue">{datas.find(data => data.id == params.productID).title}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales</div>
              <div className="productInfoValue">{datas.find(data => data.id == params.productID).price}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active</div>
              <div className="productInfoValue">Yes</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">No</div>
            </div>

          </div>
        </div>
      </div>

      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormleft">
            <label>Product Name</label>
            <input type="text" placeholder='' />
            <label>In Stock</label>
            <select id='inStock'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select id='inStock'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUploader">
              <img src={datas.find(data => data.id == params.productID).avatar} alt="" className='productUploaderImg' />
              <label>
             <PublishIcon />
              </label>
              <input type="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Upload (Edit) </button>
          </div>
        </form>
      </div>
    </div>
  )
}
