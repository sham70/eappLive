import React, { useState }  from 'react'
import { NavLink } from 'react-router-dom'
import '../StyleSheet/Header.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuBar from './MenuBar';
import { useCartContext } from './CartContext';
import { useAuth0 } from "@auth0/auth0-react";

const Header=()=> {
    const[menuIcon ,setMenuIcon]=useState(false);
    const {total_item}=useCartContext();
    const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();
    
  return (
    <>
    <div className={menuIcon? 'activemaindiv':'main_header'}>
        <div className={menuIcon? 'activenologo':'logo'}>
            <img src='Images/shamilogo.png'alt='logo'></img>
         </div>
        <div className= {menuIcon? 'activenavbar':'navbar'} >
            <NavLink onClick={()=>setMenuIcon(false)} id='navlink'  to="/">Home</NavLink>
            <NavLink onClick={()=>setMenuIcon(false)} id='navlink' to="/about">About</NavLink>
            <NavLink onClick={()=>setMenuIcon(false)} id='navlink' to="/products">Products</NavLink>
            <NavLink onClick={()=>setMenuIcon(false)} id='navlink' to="/contact">Contact</NavLink>
         </div>

         <div className= {menuIcon? 'activenavbar':'extra_btn'}>
          {isAuthenticated && <h2>{user.name}</h2>}
         {isAuthenticated? 
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Log Out</button>:  <button onClick={() => loginWithRedirect()}>Login</button>
         }
         
          
            <div className='cart'>
                <AddShoppingCartIcon className='icon'/>
                <span>{total_item}</span>
            </div>
         </div>
         
         <MenuBar menuIcon={menuIcon} setMenuIcon={setMenuIcon} />

    </div>
    </>
  )
}

export default Header;