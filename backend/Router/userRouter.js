var express = require("express")
const { RegisterUser, getUser, LoginUser, UpdateUser, DeleteUser, UpdateUser2, getCustomers} = require("../Controllers/userController")
const { registervalidation, validation, loginvalidation } = require("../middleware/Validation")
const { sendEmail } = require("../Controllers/Nodemailer")
const { sendEmailAdmin } = require("../Controllers/Nodemaileradmin")
const { Isauth } = require("../middleware/Isauth")
 
var userRouter = express.Router()

userRouter.get("/get",getUser)
userRouter.post("/post/",registervalidation,validation,RegisterUser) 
userRouter.post("/login",loginvalidation,validation,LoginUser)
userRouter.put("/update/:id",UpdateUser)
//userRouter.put("/update2/:id",UpdateUser2 )
userRouter.delete("/delete/:id",DeleteUser)
userRouter.post("/sendemail",sendEmail)
userRouter.post('/sendEmailAdmin',sendEmailAdmin)
userRouter.get("/getcurrent",Isauth,(req,res)=>{
    res.send(req.user)
})
userRouter.get("/customer",getCustomers)
module.exports = userRouter
