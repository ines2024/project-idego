import axios from "axios";
import { ALLPRODUCT, ALLUSERS, GETCURRENT, LOGIN, LOGOUT, ONEPRODUCT, POSTPRODUCT } from "./ActionType";
export const Get = () => async (dispatch) => {
    try {
      const res = await axios
        .get("/product/get/")
        .then((res) => dispatch({ type: ALLPRODUCT, payload: res.data.AllProducts }));
    } catch (error) {
      console.log(error);
    }
  
  };
export const AddProduct = (data) => async (dispatch) => {
    try {
      const res = await axios
        .post("/product/post/",data)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const DeleteProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .delete("/product/delete/"+id)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const UpdateProduct = (id,data) => async (dispatch) => {
    try {
      const res = await axios
        .put("/product/update/"+id,data)
        .then((res) => dispatch(Get()));
    } catch (error) {
      console.log(error);
    }
  
  };
  export const FindProduct = (id) => async (dispatch) => {
    try {
      const res = await axios
        .get("/product/get/"+id)
        .then((res) => dispatch({ type: ONEPRODUCT, payload: res.data.product }));
    } catch (error) {
      console.log(error);
    }
  
  };
/////////// User//////////////
export const GetUsers = ()=> async(dispatch)=>{
  try {
    const res= await axios
      .get("/users/get/")
      .then((res)=>dispatch({type:ALLUSERS, payload:res.data.AllUsers}))
      console.log(res)
  } catch (error) {
    console.log(error);
  }
}
export const AddUser = (data,navigate)=> async(dispatch)=>{
  try {
    const res = await axios
      .post("/users/post/",data)
      .then((res)=>dispatch(GetUsers()))
      navigate('/products')
  } catch (error) {
    console.log(error);
  }
}
export const findUser = (data,navigate)=> async(dispatch)=>{
  try {
    const res= await axios
      .post("/users/login",data)
      .then((res)=>{
      dispatch({type:LOGIN,payload:res.data})
      navigate('/products')
    })
      
  } catch (error) {
    console.log(error);
  }
}
export const updateUser = (id,data)=> async(dispatch)=>{
  try {
    const res = await axios
      .put("/users/update/"+id,data)
      .then((res)=>dispatch(GetUsers()))
  } catch (error) {
    console.log(error)
    
  }
}
export const updateUser2 = (id,data)=> async(dispatch)=>{
  try {
    const res = await axios
      .put("/users/update2/"+id,data)
      .then((res)=>dispatch(GetUsers()))
  } catch (error) {
    console.log(error)
    
  }
}
export const deletUser = (id)=> async(dispatch)=>{
  try {
    const res= await axios
      .delete("/users/delete/"+id)
      .then((res)=>dispatch(GetUsers()))
  } catch (error) {
    console.log(error)
  }
} 
export const getcurrent=()=>async(dispatch)=>{
  const config={
      headers:{token:localStorage.getItem("token")}
  }
  try {
     const res=await axios.get("/users/getcurrent",config) 
.then(res=>dispatch({type:GETCURRENT,payload:res.data}))
console.log(res)
  } catch (error) {
      console.log(error)
  }
}
export const logout = (navigate)=>{
  localStorage.removeItem('tokenuser')
  navigate('/login')
  return{
    type:LOGOUT
  }
}