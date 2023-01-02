import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import Product from './Product';
import {  useSelector } from 'react-redux'

const Products = () => {

  const cate= useSelector(state => state.cate)
  const [products, setProducts] = useState([])
  useEffect(() => {
    const url = "https://pwa-final-backend-production.up.railway.app/products"
    axios.get(url)
      .then(res => setProducts(res.data.data))
      .catch(e => console.log(e, "entro"))
  }, [])
  console.log(products);

  return (
    <section className='Products'>
      <Navbar />
      <MDBContainer className='d-flex'>
        <MDBRow className='d-flex justify-content-center'>
          {
            products.map(product => {
                if(product.category_id==cate)
              return <Product props={product} key={product.id} />
            })
          }
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

export default Products