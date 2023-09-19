import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import CartAmount from './CartAmount';
import { useCartContext } from './CartContext';


const AddToCart = ({product}) => {

  const {addToCart}=useCartContext();
  const{id, colors, stock}=product;
    const[color ,setColor]=useState(colors[0]);
    const[amount ,setAmount]=useState(1);

    const setDecrease=()=>{
      amount >0? setAmount(amount-1):setAmount(1);
    }
    const setIncrease=()=>{
      amount < stock ? setAmount(amount+1):setAmount(stock);
    }

  return (

    <div className='AddToCart_color'>
      <div className='color' >
          <p>
            Colors:
            {
              colors.map((curColor,ind)=>{
                return(
                  <button 
                  className={color===curColor? 'btn_color_AddCart active' : 'btn_color_AddCart'}
                  key={ind} 
                  style={{backgroundColor:curColor}}
                  onClick={()=>{
                    setColor(curColor);
                  }}
                  >
                    {color===curColor? <FaCheck style={{backgroundColor: '#fff', opacity:0.5}}/>:null}
                    
                  </button>
                )
              })
            }
          </p>
      </div>

      <div className='cart_amount'>
        <CartAmount amount={amount} 
        setDecrease={setDecrease} 
        setIncrease={setIncrease}
        />
      </div>

      <NavLink to='/cart' onClick={()=> addToCart(id,color,amount,product)}>
              <button style={{margin:'20px', border:'none',height:'50px' , width:'100px', color:'#fff',backgroundColor:'rgb(142, 11, 142)'}}>AddToCart</button>
      </NavLink>
    </div>
  )
}

export default AddToCart