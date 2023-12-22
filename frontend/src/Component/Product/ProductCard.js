import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Detail_product from './Detail_product';
import Card from 'react-bootstrap/Card';
import { addToBasket } from '../Redux/ActionBasket';
import Update_product from './Update_product';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, getcurrent } from '../Redux/Action';
function ProductCard({e}) {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
    
        dispatch(getcurrent())
      }, [])
      const user = useSelector((state) => state.users.user);
  console.log(user);
  return (
    <div>
        
        <Card style={{ width: "18rem" }}>
        
        <Card.Img variant="top" src={e.image}  style={{width:"50%"}}/>
        <Card.Body>
          <Card.Title>{e.name}</Card.Title>
          <Card.Text>
           {e.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{e.price} €</small>
        </Card.Footer>
        <Card.Footer>
          <button className="text-muted" onClick={()=>setQuantity (quantity+1)}>+</button>
          <small className="text-muted">{quantity}</small>
          <button className="text-muted" onClick={()=>quantity>0?setQuantity (quantity-1):quantity}>-</button>
        </Card.Footer>
        <button class="CartBtn" onClick={()=>dispatch(addToBasket({pro:e, quantity}))}><p class="text">Add to Cart</p></button>
        {user.isAdmin?<button onClick={()=>dispatch(DeleteProduct(e._id))}>Delete</button>:null}
       {user.isAdmin? <Update_product data={e}/>:null}
       
      </Card>
      
    </div>
  )
}

export default ProductCard