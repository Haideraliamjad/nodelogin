const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth")
router.get("/",userController.index);
router.post("/",userController.login);
router.post("/regester",userController.createAccount);
router.get("/regester",userController.viewCreateAccount);
router.get("/private",auth,userController.private);
router.get("/logout",userController.logout);
module.exports = router;
