import express from "express";
import memberController from "../controllers/member.controller"
import authorizationMiddelware from "../middleware/auth.middleware";
const memberRouter = express.Router();


memberRouter.get("/member",authorizationMiddelware,memberController.getMemberList);
memberRouter.post("/member",authorizationMiddelware,memberController.createMember);
memberRouter.put("/member/:id",authorizationMiddelware,memberController.updateMember);
memberRouter.delete("/member/:id",authorizationMiddelware,memberController.deleteMember);



export default memberRouter;