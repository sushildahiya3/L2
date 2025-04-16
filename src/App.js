import './App.css';
import { DEFAULT_TAX, productList } from './Data/ProductData';
import {  useSelector } from 'react-redux';
import Product from './Component/Product';
import {  useMemo}from 'react';
function App() {
  const product = useSelector((state)=>state.product.product)
  /**
   * Calculating the total price with tax and useMemo used to optimize the the computation task
   */
  const price = useMemo(()=>{
    const totalPrice = parseFloat(product.reduce((acc,item)=> item.price+acc,0))
    return  (totalPrice* (DEFAULT_TAX/100)+totalPrice).toFixed(2)
  },[product])
  return (
   <div>
      {productList.map((item,index)=>(
  
        <Product item={item} key={index}/>
      ))}
      <p>Total Price (With Tax): {price}</p>
      <p>Tax : {DEFAULT_TAX}%</p>
   </div>
  );
}

export default App;
