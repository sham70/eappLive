import React from 'react'
import {BsFillGridFill, BsList} from 'react-icons/bs'
import { useFilterCustomContext } from './FilterContext'
import '../StyleSheet/ListSort.css'
const ListSort = () => {
    //gride_view use for css when you change the color of icons
        const {filterProduct,setGridView,setListView,sorting}=useFilterCustomContext();
  return (
    <div className='ListSort_main'>
        <div className='icons'>
            <BsFillGridFill 
            onClick={setGridView}
             />
            <BsList 
                onClick={setListView}
            />
        </div>
        <div className='List_Total'>
            <p>
                {`${filterProduct.length} Product Available`}
            </p>
        </div>
        <div className='scroll_down' onClick={sorting}>
            <form action='#'>
                <label htmlFor='sort'>
                    <select name='sort' id='sort' >
                        <option value='lowest'>Price(lowest)</option>
                        <option value='#' disabled/>
                        <option value='highest'>Price(highest)</option>
                        <option value='#' disabled/>
                        <option value='a-z'>Name(a-z)</option>
                        <option value='#' disabled/>
                        <option value='z-a'>Name(z-a)</option>
                    </select>
                </label>
            </form>
        </div>
    </div>
  )
}

export default ListSort