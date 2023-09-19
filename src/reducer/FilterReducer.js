

const FilterReducer = (state,action) => {


    

    switch(action.type){
        case 'SET_FILTER_PRODUCTS':

        let priceArr=action.payload.map((curEle)=>{return curEle.price})
       
        let maxPrice=Math.max(...priceArr);

            return{
                ...state,
                filterProduct:[...action.payload],
                allProduct:[...action.payload],
                filters:{...state.filters ,maxPrice, price:maxPrice}
            }

        case 'SET_GRID_VIEW':
            return{
                ...state,
                grid_view:true,
            }
        case 'SET_LIST_VIEW':
                return{
                    ...state,
                    grid_view:false
                }
        
        case 'Get_SORT_VALUE':
            return{
                ...state,
                sorting_value:action.payload,
            }
        

        case 'SORTING_PRODUCT':
            let newSortData;
            
            const{filterProduct,sorting_value}= state;
            let tempSortProduct=[...filterProduct];
            
            const sortingProducts=(a,b)=>{
                if(sorting_value === "lowest"){
                    return a.price - b.price
                }
                else if(sorting_value === "highest"){
                    return b.price - a.price
                }
                else if(sorting_value === "a-z"){
                    return a.name.localeCompare(b.name);
                }
                else if(sorting_value === "z-a"){
                    return b.name.localeCompare(a.name);
                }
            }
                // is code of line ko globely use kr lya hai nh tu oper har if and esle if condition me use bar bar krna pardna tha. 
            newSortData= tempSortProduct.sort(sortingProducts);

            return{
                ...state,
                filterProduct:newSortData,
            };
            case 'UPDATE_FILTERS_VALUE':
                const {name,value}=action.payload;

                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]:value,
                    }
                }


            case 'FILTERS_PRODUCT':
                let {allProduct}=state;
                let tempFilterProduct=[...allProduct];
                
                const{text,category,company,color,price}=state.filters;
                
                if(text){
                    tempFilterProduct=tempFilterProduct.filter((curEle)=>{
                        return curEle.name.toLowerCase().includes(text);
                    })
                }
                if(category !== 'all'){
                    tempFilterProduct=tempFilterProduct.filter((curEle)=>{
                        return curEle.category===category;
                    })
                }
                if(company !== 'all'){
                    tempFilterProduct=tempFilterProduct.filter((curEle)=>{
                        return curEle.company.toLowerCase()===company.toLowerCase();
                    })
                }
                if(color !=='all'){
                    tempFilterProduct=tempFilterProduct.filter((curEle)=>{
                        return curEle.colors.includes(color);
                    })
                }

                if(price){
                    tempFilterProduct=tempFilterProduct.filter((curEle)=>{
                        return  curEle.price <= price
                    })
                }
                return{
                    ...state,
                    filterProduct:tempFilterProduct,
                }

                case 'CLEAR_FILTER':
                    return{
                        ...state,
                        filters:{
                            text:"",
                            category:"all",
                            company:"all",
                            color:"all",
                            maxPrice:0,
                            minPrice:state.filters.maxPrice,
                            price:state.filters.maxPrice
                          }
                    }
        default:
             return state;     
    }
    
}


export default FilterReducer