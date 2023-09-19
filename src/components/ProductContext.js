import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ProductReducer'

const AppContext= createContext();
const API="https://api.pujakaitem.com/api/products";

const initialState ={
    isLoading: false,   
    isError: false,
    products: [],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
}

// ye childeren as app component hai hai.
const AppProvider=({children})=>{

    const[state, dispatch]=useReducer(reducer, initialState)
 
    const getData= async (url)=>{
        dispatch({type:"SET_LOADING"})
        try {
            const res= await axios.get(url);
        const products=await res.data;
        dispatch({type: "SET_API_DATA", payload: products});
            
        } catch (error) {
            dispatch({type:"API_Error"})
        } 
    };

    const getSingleProduct= async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try {
            const res=await axios.get(url);
            const singleProduct=await res.data;
            dispatch({type: "SET_SINGLE_DATA", payload: singleProduct});

        } catch (error) {
            dispatch({type:"SINGLE_Error"})
        }
    }

    useEffect(()=>{
        getData(API);
    },[])

    return(
            <AppContext.Provider value={{...state, getSingleProduct}}>
                {children}
            </AppContext.Provider>
    )
    

};
//custom hooks
const useProductContext =()=>{

    return useContext(AppContext);
};
export {AppProvider, AppContext, useProductContext}