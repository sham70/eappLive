import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import '../StyleSheet/Services.css'
const Services=()=>{

    return(
        <>
            <div className='main_serv'>
                <div className='first_serv'>
                    <LocalShippingOutlinedIcon className='icon_one'/>
                    <h3>Super Fast and free Delivery </h3>
                </div>
                <div className='second_serv'>
                    <div className='one_row'>
                        <SecurityOutlinedIcon className='icon_two'/>
                        <h3>Non-contact Shipping</h3>
                    </div>
                    <div className='two_row'>
                        <AddCardOutlinedIcon className='icon_three'/>
                        <h3>Money-Back Guaranteed</h3>
                    </div>
                </div>
                <div className='third_serv'>
                    <AssuredWorkloadOutlinedIcon className='icon_four'/>
                    <h3>Super Secure Payment System</h3>
                </div>
            </div>
        </>
    )
}
export default Services;