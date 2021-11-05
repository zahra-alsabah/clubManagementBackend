import MemberSchema  from '../models/member.model';
import Member from '../interfaces/member.interface';
import { NextFunction,Response,Request } from "express";


export const getMemberList = async ( req : Request,res : Response, next :NextFunction) => {

    try {
        const memberList: Member[] = await MemberSchema.find({});

       return res.status(200).json(
            memberList);
      } catch (e) {
       return res.status(500).json({
           message: e.message,
           e
       });
      }
  };

 export const createMember = async  ( req : Request,res : Response, next :NextFunction) => {
    try {
    const member = new MemberSchema(req.body);
    member.save()
       return res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: member
        });
      } catch (e) {
        return res.status(500).json({
          message: e.message,
          e
      });
      }
  };

export const updateMember = async ( req : Request,res : Response, next :NextFunction) => {
    try {
      const member: Member = req.body;

      await MemberSchema.findOneAndUpdate({_id: req.params.id},member);
       await res.status(200).send({
            message: "Successfully updated",
             IsSuccess: true,
             result: member
        });
      } catch (e) {
        return res.status(500).json({
          message: e.message,
          e
      });
      }
  };

  export const deleteMember = async ( req : Request,res : Response, next :NextFunction) => {
    try {
    const memberID: string = req.params.id;

    await MemberSchema.deleteOne({_id:memberID});

        res.status(200).send({
            message: "Successfully deleted",
             IsSuccess: true,
        });
      } catch (e) {
        return res.status(500).json({
          message: e.message,
          e
      });
      }
  };

  export default {getMemberList,createMember,updateMember,deleteMember};