import React, { useEffect } from 'react'
import './ListUsers.css'
import { useDispatch, useSelector } from 'react-redux';
import UpdateUser from './UpdateUser';
import { GetProfil, getcurrent } from '../Redux/Action';
  
function Profile() {
    const dispatch = useDispatch()

    useEffect(() => {
      //getcurrent
      dispatch(getcurrent())
    }, [])
    const user = useSelector(state => state.users.user)
 console.log(user)    
   return (
    <>
    <div style={{ display: "flex", gap: "20px", flexWrap: "nowrap" ,justifyContent: "space-around"}}>
       
    
        <div className="container d-flex justify-content-center mt-5">
    <div className="card">
      <div className="top-container">
        <img
          src={user.imageuser}
          className="img-fluid profile-image"
          width={70}
        />
        <div className="ml-3">
          <h5 className="name">{user.name}</h5>
          <p className="mail">{user.email}</p>
        </div>
      </div>
       
      <div className="recent-border mt-4">
        <span className="recent-orders">Recent orders</span>
      </div>
      <div className="wishlist-border pt-2">
        <UpdateUser data={user}/>
      </div>
      
    </div>
  </div>
 
   </div>
  
    </>
  )
}


export default Profile