import React, { useState } from 'react'
import '../StyleSheet/ImageSingle.css'
const ImageSingle = ({imgsr=[{url:""}]}) => {
    
    const[mainImg, setMainImg]=useState(imgsr[0]);
  return (
    <>
        <div className='product_img_single'>
            {
                imgsr.map((curEle,ind)=>{

                    return(
                        <figure>
                        <img src={curEle.url}
                         alt={curEle.filename}
                         key={ind} 
                         className='url_img_single'
                         onClick={()=>{
                                setMainImg(curEle)
                            }}
                        />
                    </figure>
                    )

                })
                
            }
        </div>
        <div className='producttwo_img_single'>
            <img src={mainImg.url} alt={mainImg.filename}/>

        </div>
    </>
  )
}

export default ImageSingle