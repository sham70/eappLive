import React from 'react'
import SubmitForm from './SubmitForm'
import '../StyleSheet/MapForm.css'
const MapForm=()=> {
  return (
    <>
        <div className='main_contact'>
            <div className='map'>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.338830119795!2d73.84359911510761!3d31.59717418134429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918eb53a4c5d79d%3A0x576bb9780a73af26!2sNishat%20Mills%20Ltd%20Unit%2027!5e0!3m2!1sen!2s!4v1679054586865!5m2!1sen!2s" 
                width="100%" 
                height="400" title='Nishat Mill' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
            </div>
            <SubmitForm/>
        </div>
    </>
  )
}

export default MapForm