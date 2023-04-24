const express = require("express");
const route = express.Router();
const UserTasks = require("../schemas/input")

route.put("/tasks/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        console.log(req.body)
        const data = await UserTasks.updateOne({_id:req.params.id},req.body)
        console.log(data)
        if(data.acknowledged==true){
            res.status(204).json({
                status:204,
                message:"successfully updated"
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