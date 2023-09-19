import React from 'react'
import { NavLink } from 'react-router-dom';
import PriceFormat from '../helper/PriceFormat';
import { useCartContext } from './CartContext'
import CartItem from './CartItem';
import { useAuth0 } from "@auth0/auth0-react";
import '../StyleSheet/Cart.css'

const Cart = () => {

    const {isAuthenticated,user } = useAuth0();
    const {cart,clearCart,total_price,shipping_fee}=useCartContext();
   // console.log(cart)


   if(cart.length===0){
    return(
        <div className='EmptyCart'>No Cart Item</div>
    )
   }else{

   
  return (



    <div className='Cart_main'>

    <div className='Cart_profile'>
    {isAuthenticated && (
        <div className='authen_User'>
        <img src={user.profile} alt={user.name}/>
        <h2 >{user.name} Cart Items</h2>
        </div>

    )
    
    }
    </div>

    <div className='cart_main2'>

        
    <div className='Cart_body' style={{margin:'30px'}}>

        <header>
        <div className='Cart_col'>  <p>Item</p> </div>
        <div className='Cart_col'><p>Price</p> </div>
        <div className='Cart_col'><p>Quantity </p></div>
        <div className='Cart_col'><p>Remove</p> </div>   
        </header>
        <div className='Cart_line1' style={{marginBottom:'30px'}}><hr/></div>
            {
                cart.map((curEle)=>{

                    return(
                        <div className='cart_body_loop'style={{marginBottom:'30px'}}>
                    <CartItem key={curEle.id} {...curEle}/>
                    </div>
                    )
                    
                    
                })
            }
        </div>
        <div className='Cart_line2' style={{marginBottom:'30px'}}><hr/></div>
        <div className='cart_btn'>
        <NavLink to='/products'>
                <button>Continue Shopping</button>
            </NavLink>

            <button onClick={clearCart}>ClearCart</button>
        </div>

        <div className='cart_total'>
            <div className='cart_total1' style={{margin:'20px'}}>
                <p>SubTotal:</p>
                <p style={{fontWeight:'bold'}}><PriceFormat price={total_price}/></p>
            </div>


            <div className='cart_total2' style={{margin:'20px'}} >
                <p>Shipping Fee:</p>
                <p style={{fontWeight:'bold'}}><PriceFormat price={shipping_fee}/></p>
            </div>

            <div className='cart_total3' style={{margin:'20px'}}>
                <p>Order Total:</p>
                <p style={{fontWeight:'bold'}}><PriceFormat price={shipping_fee+total_price}/></p>
            </div>
        </div>
        </div>
    </div>
  )
        }
}

export default Cart