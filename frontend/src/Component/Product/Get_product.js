
import { useEffect } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, Get, getcurrent } from '../Redux/Action';

import './Get_product.css'

import Add_product from './Add_product';

import Slider from '../Carousel';
import ProductCard from './ProductCard';
function Get_product() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Get());
    dispatch(getcurrent())
  }, [])
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <>
    <Slider/>
      {user.isAdmin?<Add_product />:null}
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "space-around"}}>
      {products.map((e) => (
         <ProductCard e={e}/> 
      ))}
    </div>
  </>
    )
        
  
}

export default Get_product;