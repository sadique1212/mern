import { Comment, Comment } from "../models/Comment.js";
import { ApiError } from "../utils/APiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createComment=asyncHandler(async(req,res)=>{
    try{
        const {post_id,content}=req.body;
        if(!post_id||!content){
            return res.status(400).ApiResponse(400,"entre req feils");
        }

        const comment=await Comment.create({
            user_id:req.user_id,
            post_id,
            content
        });
        res.status(201).ApiResponse(201,"comment created");


    } catch(err){
        res.status(400).ApiError(400,err.message);

    }
});

const getCommentByPost=asyncHandler(async(req,res)=>{
    try{
        const {posId}=req.prams;
        const comment =await comment.find({
            pos_id:posId,
            is_deleted:false
        }).populate("user_id","name").sort({createdAt:-1});
        res.status(200).ApiResponse(200,comment);
    }catch (err){
        res.status(500).ApiError(500,err.message);
    }
})

const deleteComment=asyncHandler(async(req,res)=>{
    try{
        const {id}=req.prams;
        const comment=await Comment.findBy(id);
        if(!comment){
            return res.status(404).ApiResponse(404,"no comment");
        }
        if(comment.user_id.toString() !==req.user_id){
            return res.status(403).ApiResponse(403,"un");
        }
        comment.is_deleted=true;
        await comment.save();
        res.status(200).ApiResponse(200,"comment successfully removed");

    }catch(err){
        res.status(500).ApiError(500,err.message);
    }
});

export {createComment,deleteComment,getCommentByPost};


