import React from 'react'
import FilterSection from './FilterSection'
import ListSort from './ListSort'
import ProductList from './ProductList'

import '../StyleSheet/Products.css'

const Products=()=> {
  
 
  return (
    <>
    <div className='main_products'>
          <div className='products_head'>
              <ListSort/>
          </div> 

          <div className='products_body'>
            <div className='filter_section'>
            <FilterSection/>
          </div>   
          <div className='product_list'>
            <ProductList/>
          </div>
          </div>     
          
          
     </div>
    </>
    
  )
}

export default Products