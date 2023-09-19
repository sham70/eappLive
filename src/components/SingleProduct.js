import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import PriceFormat from '../helper/PriceFormat';
import NavigationComp from './NavigationComp';
import { useProductContext } from './ProductContext';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import ImageSingle from './ImageSingle';
import StarComp from './StarComp';
import AddToCart from './AddToCart';

import '../StyleSheet/SingleProduct.css'
import { Delete } from '@mui/icons-material';

const SingleProduct = () => {

    const {id}= useParams();
    
     
    const API="https://api.pujakaitem.com/api/products";

    const{getSingleProduct, isSingleLoading,singleProduct}=useProductContext();

    const {id:alias, name, company, price ,description, category, stock, stars, reviews, image} = singleProduct;

    useEffect(()=>{
        
        getSingleProduct(`${API}?id=${id}`);

    },[]);

    if(isSingleLoading){
        return <div className='page_loading'>Loading........</div>
    }
    else{
        return(
            <>
                <div className='main_single'>
                    <div className='head_single'>
                        <NavigationComp  title={name}/>
                    </div>

                    <div className='body_single'>
                        <div className='products_imgs_single'>
                            <ImageSingle imgsr={image}/>
                        </div>
                        <div className='products_info_single'>
                            <h2>{name}</h2>
                            <p>
                            <StarComp stars={stars} reviews={reviews} />
                            </p>
                            
                            <p className='product_price_single'>
                                MRP:
                                <del >
                                    <PriceFormat price={price + 250000}/>
                                </del>
                            </p>
                            <p className='single_deal'> Deal of the Day <PriceFormat price={price}/></p>
                            <p>{description}</p>

                            <div className='icons_single'>
                            <LocalShippingOutlinedIcon id='icon_s'/>
                            <SecurityOutlinedIcon id='icon_s'/>
                            <AddCardOutlinedIcon id='icon_s'/>
                            <AssuredWorkloadOutlinedIcon id='icon_s'/>
                            </div>
                            <div className='product_avail'>
                                <p> Available: 
                                <span>
                                {stock>0?"In Stock":"Not Available"}
                                </span>
                                </p>

                                <p>
                                    ID: <span>{id}</span>
                                </p>
                                <p>
                                    Brand: <span>{company}</span>
                                </p>
                                <hr/>
                                <div className='color_single'>

                                {stock >0 && 
                                    <AddToCart product={singleProduct} />
                                }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }


  
}

export default SingleProduct