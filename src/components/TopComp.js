import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../StyleSheet/TopComp.css"
 const TopCompo=(props)=>{
    const[over, setOver]=useState(false);
    
    return(
        <>
            <div className='main_top'>

                <div className='info'>
                    <p>WelCome To</p>
                    <h1>{props.title}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dolores porro debitis fuga similique perferendis repellat ab 
                     maiores blanditiis dolorum libero quisquam, quasi, animi corrupti ratione 
                     inventore labore quia dolore! Ab.</p>
                     <button className='shop_btn'>
                     <NavLink className="link_btn" to="/products">ShopNow</NavLink>
                     </button></div>
                     <div onMouseOver={()=>setOver(true)} onMouseOut={()=>setOver(false)} className='img_top'>
                        <figure>
                            <img src={over?props.imgs1:props.imgs2} alt="random images">

                            </img>
                        </figure>
                     </div>
                     

            </div>
        </>
    )

 }
 export default TopCompo;