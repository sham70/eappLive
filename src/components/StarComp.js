import React from 'react'

import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
const StarComp = ({stars,reviews}) => {

    const ratingStar=Array.from({length:5} ,(dlem,ind)=>{

        let number=ind+0.5;

        return(
            <span  key={ind}>
            {
                stars >= ind+1
                ?<FaStar />
                :stars >= number
                ? <FaStarHalfAlt />
                :<AiOutlineStar/>
            }

            </span>
        )

    })



  return (
    <div>
            <div style={{marginTop:'20px'}}>
            {ratingStar } {reviews} <span>(Customer reviews) </span> 
            </div>
       </div>
  )
}

export default StarComp