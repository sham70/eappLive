import React from 'react'
import { NavLink } from 'react-router-dom'
import '../StyleSheet/ErrorPage.css'
const ErrorPage=() =>{
  return (
    <>
      <div className='main_error'>
        <div className='error1'>
          <h1>404</h1>
          <p>UH OH! You're lost.</p>
        </div>
        <div className='error2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eum alias,
           sunt, eos consectetur aut molestiae exc</p>
        </div>
        <div className='error3'>
          <NavLink to='/'>
            <button>Home</button>
          </NavLink>
        </div>
      </div>
    </>
  )
}
export default ErrorPage