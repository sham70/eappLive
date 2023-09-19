import React from 'react'
import { NavLink } from 'react-router-dom'
import PriceFormat from '../helper/PriceFormat'
import '../StyleSheet/ListView.css'
const ListView = ({products}) => {

  return (
    <div className='List_view'>
        {
            products.map((curEle,ind)=>{
                const{id, name, image, price ,description}=curEle
                return(
                    <div className='List_view_img'>

                        <figure>
                            <img src={image} alt={name}></img>
                        </figure>
                    
                        <div className='List_view_data'>
                        
                            <h3>{name}</h3>
                            <p>
                                <PriceFormat price={price}/>
                            </p>
                            <p>
                                {description.slice(0,99)}
                            </p>

                            <NavLink to={`/singleproduct/${id}`}>
                                <button>Read More</button>
                            </NavLink>
                        </div>
                     </div>
                )
            })
        }
    </div>
  )
}

export default ListView