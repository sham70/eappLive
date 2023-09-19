import { fontSize } from '@mui/system'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
const CartAmount = ({amount, setDecrease, setIncrease}) => {

  return (
    <div className='Cart_Amount_comp' style={{display:'flex'}}>
        <FaPlus onClick={()=>setIncrease()} />

        <div className='cart_value' style={{marginLeft:'10px', marginRight:'10px',fontWeight:'bold', fontSize:'large'}}>{amount}</div>
        <FaMinus onClick={()=>setDecrease()}/>
    </div>
  )
}

export default CartAmount