import React from 'react'
import Product from './Product';
import { useProductContext } from './ProductContext'
import '../StyleSheet/Product.css'
import { NavLink } from 'react-router-dom';


const FeatureComp=()=> {

  const {isLoading, featureProducts}=useProductContext();

    if(isLoading){
       <div className='loading'>.....Loading</div>
      
    }else{

      return (

        
        <div className='feature'>

        <div className='feature_title' >
          <div className='title_p'>
            <NavLink to='/products'>
            <p>Check Now</p>
            </NavLink>
          <h1>Our Feature Services</h1>
          </div>
        </div>

          <div className='feature_map'>
          {featureProducts.map((curEle)=>{
            return(
              <Product key={curEle.id} {...curEle}/>
            )
              
          })}
          </div>

          </div>
        
        
      )
      
    }

      

      
    
  
}

export default FeatureComp