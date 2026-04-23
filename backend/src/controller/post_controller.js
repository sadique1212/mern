import {Post} from "../models/Post.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/APiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const createproposal=asyncHandler(async(req,res)=>{
    const {content}=req.body;
    if(!content){
        throw new ApiError(400,"all entry are req");
    }
    const proposal=await Post.create({
        content,
    });
    res.status(201).json(201,proposal,"made proposal");
});

const getproposalbyid=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const proposal=await proposal.findbyid(id).populate("ownerId","username");
    if (!proposal) {
        throw new ApiError(404, "Proposal not found");
    }

    res.json(new ApiResponse(200, proposal));
})

export {createproposal,getproposalbyid}