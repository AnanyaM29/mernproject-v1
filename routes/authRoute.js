import express from 'express'
import {registerController,loginController,getAllOrdersController,orderStatusController,getOrdersController,testController,forgotPasswordController,updateProfileController} from '../controllers/authController.js'
import { requireSignIn,isAdmin} from '../middlewares/authMiddleware.js';

//router object
const router = express.Router();//making the router

//routing
//Register || Method: Post

router.post('/register',registerController)//defining the router

//Login || Method: POST

router.post('/login',loginController)


//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


//test route
router.get('/test',requireSignIn,testController);

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});
//protected User route auth

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});  

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;

