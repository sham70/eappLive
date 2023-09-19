import { Input } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../StyleSheet/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StoreIcon from '@mui/icons-material/Store';
const Footer=()=> {
  return (
    <>
        <div className='main_footer'>
            <div className='first_f'>
            <div className='para_f1'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> 
            </div>
            <div className='btn_f1'>
                <NavLink to='/'>
                    <button>Get Started</button>
                </NavLink>                
            </div>                
            </div>

            <div className='second_f'>
                <div className='info_f2'>
                    <h3>Shami Keeps</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='subs_f2'>
                    <p>Subscribe to gey importat updates</p>
                    <Input type='email' name='email' placeholder='Your Email' />
                    <button>
                        Subscribe Now
                    </button>
                </div>
                <div className='icons_f2'>
                    <p>Follow us</p>
                    <div className='icon_imgs'>
                    <a href='https://www.instagram.com/?hl=en'>     
                    <InstagramIcon  className='icon' />

                        </a>
                        
                            
                        <a href='https://www.youtube.com/'>
                        <YouTubeIcon className='icon'/>
                        </a>
                        
                        <NavLink to='/'>
                        <StoreIcon className='icon'/>
                        </NavLink>
                        
                    </div>

                </div>
                <div className='contct_f2'>
                    <p>Call Us</p>
                    <p>+923006645342</p>
                </div>
            </div>
            <div className='third_f'>
            <div className='hr_line'>
                <hr/>
                
            </div>
                <div className='info_f3'>
                <p>@{new Date().getFullYear()}ShamiKeeps.All Rights Reserved</p> 
                <p>PRIVACY POLICY TERMS & CONDITIONS</p>
                </div>
            </div>
                
        </div>
    </>
  )
}

export default Footer