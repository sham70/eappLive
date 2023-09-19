import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "../StyleSheet/MenuBar.css"


const MenuBar=({menuIcon,setMenuIcon})=>{
    
    return(
        <>
            <div className={menuIcon? 'menu_nav active':'menu_nav'}>
                <div onClick={()=>setMenuIcon(true)} className='menu_btn'>
                <MenuIcon className='menuicon'/>
                </div>
                <div onClick={()=>setMenuIcon(false)} className='close_btn'>
                <CloseIcon className='closeicon'/>
                </div>

                
            </div>
        </>
    )

}
export default MenuBar;