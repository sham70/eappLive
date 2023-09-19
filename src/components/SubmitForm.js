import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const SubmitForm=()=> {

  const { isAuthenticated,user } = useAuth0();
  return (
    <>
        <div className='submit_form'>
            <form action='https://formspree.io/f/xknazlyo' method='POST'>
            <input type='text' name='userName' value={isAuthenticated ? user.name:""} placeholder='UserName' required autoComplete='off'/>
            <input type='email' name='email' value={isAuthenticated ? user.email:""} placeholder='Email' required autoComplete='off'/>
            <textarea name='Message' cols='30' rows='10' placeholder='Enter Your Message' required/>
            <input type='submit' value='submit'/>
            </form>
        </div>
    </>
  )
}

export default SubmitForm