import React from 'react'
import {useDispatch} from 'react-redux'
import { add } from '../Store/productSlice'
function Product({item}) {
    const dispatch = useDispatch()

    const handleAddToCart = (e)=>{
        dispatch(add(item))
    }
  return (
    <div>
         <p><span>{item.name}</span> &nbsp; <span>{item.price}</span> <button onClick={()=>{handleAddToCart()}}>+</button></p>
    </div>
  )
}

export default Product
