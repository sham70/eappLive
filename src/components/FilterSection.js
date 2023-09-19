import React from 'react'
import { FaCheck } from 'react-icons/fa';
import PriceFormat from '../helper/PriceFormat';
import { useFilterCustomContext } from './FilterContext'
import '../StyleSheet/FilterSection.css'
const FilterSection = () => {

    const {filters:{text,color,price,maxPrice,minPrice},updateFilterValue,allProduct,clearFilter}=useFilterCustomContext();

//to get unique data of each fields
const getUniqueData=(data,attr)=>{

    let newVal=data.map((curEle)=>{
        return curEle[attr]
    })

    if(attr==="colors"){
        //return (nelVal=["All", ...newSet([].concat(...newVal))]); ye use kr sakty thy agr flat nh use krna tha q k id arrays
        // l anad arrays thi.

        newVal=newVal.flat();
    }

    return newVal=['all',...new Set(newVal)];
}
    


    //we need unique data
    const categoryData=getUniqueData(allProduct,"category");
    const CompanyData=getUniqueData(allProduct,"company");
    const ColorData=getUniqueData(allProduct,"colors");
    
    
  return (
    <div className='filter_section_body'>
        <div className='input_sec'>
           <form onSubmit={(e)=>e.defaultPrevented()}>
            <input type='text' name='text' value={text} onChange={updateFilterValue} placeholder="search" />
           </form> 
        </div>

        <div className='category_sec'>
        <h3>Category</h3>
            {
                categoryData.map((curEle,index)=>{
                  return  (
                    
                    <button 
                    key={index}
                    type='button'
                    name='category'
                    value={curEle}
                    onClick={updateFilterValue}
                    style={{textTransform:'capitalize'}}
                    >  
                        {curEle}
                   
                    </button>
                    
                );
                })
            }
        </div>

        <div className='Company_sec'>
                <h3>Company</h3>
                <form action='#'>
                    <select name='company'
                    id='company'
                    onClick={updateFilterValue}>
                {
                CompanyData.map((curEle,index)=>{
                    
                    return (<option key={index} value={curEle} name='company'>
                        {curEle}
                    </option>)
                })
             }
                    </select>
                </form>

        </div>


        <div className='color_sec'>
            <h3>Colors</h3>
             <div className='color_sec_btn'>
                {
                    ColorData.map((curColor, ind)=>{

                        if(curColor==='all'){
                            return(
                                <button
                            key={ind}
                            type='button'
                            value={curColor}
                            name='color'
                            onClick={updateFilterValue}
                            className='color_btn_all'
                            >
                                All
                            </button>
                            )
                        };
                        return(
                            <button
                            key={ind}
                            type='button'
                            value={curColor}
                            name='color'
                            style={{backgroundColor:curColor}}
                            onClick={updateFilterValue}
                            className={color === curColor? 'btn_color_AddCart active' : 'btn_color_AddCart'}
                            >
                            {color === curColor? <FaCheck style={{backgroundColor: '#fff', opacity:0.5}} />:null}
                            
                            </button>
                        )
                    })   
                }
                
             </div>
        </div>


        <div className='scroll_filter'>
                <h3>Price</h3>
                <p>
                <PriceFormat price={price}/>
                </p>
                
                    <input type='range' min={minPrice} max={maxPrice} value={price} name='price' onChange={updateFilterValue}/>
               
                    

                </div>



                <div className='clear_filter'>
                    <button onClick={clearFilter}>Clear Filter</button>
                </div>

    </div>
  )
}

export default FilterSection