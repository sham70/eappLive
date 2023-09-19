import React from 'react'
import { FaTrash } from 'react-icons/fa'
import PriceFormat from '../helper/PriceFormat'
import CartAmount from './CartAmount'
import { useCartContext } from './CartContext'
import '../StyleSheet/Cart.css'
const CartItem = ({id,name,image,color,amount,price}) => {

    const {removeIcon,setIncrease,setDecrease}=useCartContext();

  return (
    <div className='Cart_Item'>

        <div className='Cart_col' >
        <div className='Cart_img_nc'>
        <div className='Cart_Item_img'>
            <figure>
                <img src={image} alt={id} style={{width:'150px'}}/>

            </figure></div>

             <div className='Cart_Item_NC' >
            <div className='Cart_Item_name'>
                <p>{name}</p></div>
                <div className='Cart_Item_color'>
                    <p>Color:</p>
                    <div className='btn_color_AddCart' style={{backgroundColor:color ,color:color}}></div>
                </div>
        </div>
        </div>

        </div>
        
       
            <div className='Cart_col' >
                <PriceFormat price={price * amount}/>
            </div>

            <div className='Cart_col'>
            <CartAmount amount={amount}
            setDecrease={()=>setDecrease(id)}
            setIncrease={()=>setIncrease(id)}/>
            </div>

            <div className='Cart_col'>
                <FaTrash onClick={()=>removeIcon(id)}/>
            </div>
           
            
    </div>
  )
}

export default CartItem