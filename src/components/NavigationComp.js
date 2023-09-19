import React from 'react'
import { NavLink } from 'react-router-dom'
import '../StyleSheet/SingleProduct.css'
const NavigationComp = ({title}) => {

  return (
    <div className='Navigation_Home'>
    <NavLink to='/'><span>Home</span></NavLink>/{title}</div>
  )
}

export default NavigationComp