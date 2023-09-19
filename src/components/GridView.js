import React from 'react'
import Product from './Product'
import '../StyleSheet/GridView.css'
const GridView=({products})=> {
    
  return (
    <div className='Grid_View'>
        {
            products.map((curEle,id)=>{
               return <Product key={curEle.id} {...curEle}></Product>
            })
        }
    </div>
  )
}

export default GridView