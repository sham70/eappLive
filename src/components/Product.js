import React from 'react'
import { NavLink } from 'react-router-dom'
import PriceFormat from '../helper/PriceFormat'
import '../StyleSheet/Product.css'
const Product = (curEle) => {
    const{id, name, image, price ,category}=curEle
  return (
    <>
        <div className='product_card'>
            <div className='figure'>
            <figure>
            <NavLink to={`/singleproduct/${id}`}>
            <img src={image} alt={name}/>
            </NavLink>
                
                <figcaption><span>{category}</span></figcaption>
             </figure>
            </div>

            <div className='card_data'>
                <div className='product_info1'>
                    <h3>{name}</h3>
                    </div>
                    <div className='product_info1'>
                    <p><PriceFormat price={price} /></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product