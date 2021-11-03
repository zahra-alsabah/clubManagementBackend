import express from "express";
import memberController from "../controllers/member.controller"

const memberRouter = express.Router();


memberRouter.get("/member",memberController.getMemberList);
memberRouter.post("/member",memberController.createMember);
memberRouter.put("/member/:id",memberController.updateMember);
memberRouter.delete("/member/:id",memberController.deleteMember);



export default memberRouter;