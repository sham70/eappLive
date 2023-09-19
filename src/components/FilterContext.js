import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/FilterReducer';
import { useProductContext } from './ProductContext';

const initialState={
  filterProduct:[],
  allProduct:[],
  grid_view:true,
  sorting_value:"lowest",
  filters:{
    text:"",
    category:"all",
    company:"all",
    color:"all",
    maxPrice:0,
    minPrice:0,
    price:0
  },
 }
const filterProductContext=createContext();
const FilterContext = ({children}) => {

  const {products}=useProductContext();

  const[state,dispatch]=useReducer(reducer,initialState);


 useEffect(()=>{
  dispatch({type:'SET_FILTER_PRODUCTS', payload:products})
 },[products])

 useEffect(()=>{
  dispatch({type:'FILTERS_PRODUCT'})
  dispatch({type:'SORTING_PRODUCT'});
 },[products, state.sorting_value, state.filters])




const clearFilter=()=>{
  dispatch({type:'CLEAR_FILTER'})
}

 const setGridView=()=>{
  return(
    dispatch({type:'SET_GRID_VIEW'})
  )
 }
 const setListView=()=>{
  return dispatch({type:'SET_LIST_VIEW'})
 }
 
const sorting=(event)=>{

  let userValue= event.target.value;
    return dispatch({type:"Get_SORT_VALUE", payload:userValue})
}

const updateFilterValue=(event)=>{
  let name=event.target.name;
  let value=event.target.value;

  return dispatch({type:'UPDATE_FILTERS_VALUE', payload:{name,value}});
}

  return (
    <filterProductContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilter}}>
            {children}
    </filterProductContext.Provider>
  )
}

const useFilterCustomContext=()=>{
  return useContext(filterProductContext);
}

export  {FilterContext, useFilterCustomContext}