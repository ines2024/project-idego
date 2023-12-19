var express = require("express")
const { getProduct, AddProduct, DeletProduct, UpdateProduct, findProduct, deletProducts } = require("../Controllers/Controller")
const { getCustomers } = require("../Controllers/userController")
var router = express.Router()
router.get("/get/",getProduct)
router.post("/post/",AddProduct)
router.delete("/delete/:id",DeletProduct)
router.put("/update/:id",UpdateProduct)
router.get("/profil",getCustomers)
router.delete("/delete/",deletProducts)

module.exports = router