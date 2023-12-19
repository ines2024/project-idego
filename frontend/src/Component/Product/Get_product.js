import { Button } from 'bootstrap';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, Get, getcurrent } from '../Redux/Action';
import Update_product from './Update_product';
import './Get_product.css'
import { Link, Route, Routes } from 'react-router-dom';
import Detail_product from './Detail_product';
import Add_product from './Add_product';
import { addToBasket } from '../Redux/ActionBasket';
function Get_product() {
  const [quantity, setQuantity] = useState(0)
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
      {user.isAdmin?<Add_product />:null}
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "space-around"}}>
      {products.map((e) => (
          <CardGroup>
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
        <Link to={`/detail/${e._id}`}>go to detail</Link>
      </Card>
      </CardGroup>
      ))}
    </div>
  </>
    )
        
   
    

  
}

export default Get_product;