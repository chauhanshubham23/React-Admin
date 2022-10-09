const {Router} = require("express");

const {userAdmin} = require("../controller.js/TableController")

const router = Router();

router.get("/admin",userAdmin);


module.exports=router;