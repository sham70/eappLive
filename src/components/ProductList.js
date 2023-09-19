import React from 'react'
import { useFilterCustomContext } from './FilterContext'
import GridView from './GridView';
import ListView from './ListView';


const ProductList = () => {

    const{filterProduct,grid_view}=useFilterCustomContext();


  
    if(grid_view=== true){
        return <GridView products={filterProduct}/>
    }
    
    else if(grid_view=== false)
    {
        return <ListView  products={filterProduct}/>
    }

  
}

export default ProductList  