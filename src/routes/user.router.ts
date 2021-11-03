import express from "express";
import userController from "../controllers/user.controller"

const userRouter = express.Router();

userRouter.post("/login",userController.login);



export default userRouter;