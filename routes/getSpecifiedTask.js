const express = require("express");
const route = express.Router();
const UserTasks = require("../schemas/input")

route.get("/tasks/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        const data = await UserTasks.find({_id:req.params.id})
        console.log(data)
        if(data.length!=0){
            res.status(200).json({
                status:200,
                tasks:data
            })
        }else{
            res.status(404).json({
                status:404,
                error: "There is no task at that id"

            })
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = route