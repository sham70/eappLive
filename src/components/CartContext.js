import { createContext, useContext,useEffect,useReducer } from "react"
import reducer from '../reducer/CartReducer'

const cartProductContext=createContext();

const getLocalCart=()=>{
    let newLocalCData=localStorage.getItem('localCartStore')
    if(newLocalCData===[]){
        return[];
    }
    else{
        return JSON.parse(newLocalCData);
    }
}

const initialState={
    //cart:[],
    cart:getLocalCart(),
    total_item:"",
    total_price:"",
    shipping_fee:50000,

}

const CartContext=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
        dispatch({type:'TOTAL_ITEM'})
        dispatch({type:'TOTAL_PRICE_ORDER'})
        localStorage.setItem('localCartStore',JSON.stringify(state.cart));
    }, [state.cart])


    


   const addToCart=(id,color,amount,product)=>{
    return dispatch({type:'ADD_TO_CART', payload:{id,color,amount,product}})
   }
   const removeIcon=(id)=>{
    return dispatch({type:'REMOVE_CART' ,payload:id})
   }

   const clearCart=()=>{
    return dispatch({type:'CLEAR_CART'})
   }

   const setDecrease=(id)=>{
    dispatch({type:'SET_DECREASE', payload:id})
   }
   const setIncrease=(id)=>{
    dispatch({type:'SET_INCREASE', payload:id})
   }


    return(
        <cartProductContext.Provider value={{...state,addToCart,removeIcon,clearCart,setIncrease,setDecrease}}>{children}</cartProductContext.Provider>
    )


   
}

const useCartContext=()=>{
    return useContext(cartProductContext);
}


export {CartContext,useCartContext}