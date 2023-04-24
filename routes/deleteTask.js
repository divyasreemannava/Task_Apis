const express = require("express");
const route = express.Router();
const UserTasks = require("../schemas/input")

route.delete("/tasks/:id",async (req,res)=>{
    try{
        console.log(req.params.id)
        const data = await UserTasks.deleteOne({_id:req.params.id})
        // console.log(data)
        // res.json({
        //     message:"ok"
        // })
        res.status(204).json({
            status:204,
            message:"Deleted Successfully"
        })
    }catch(err){
        console.log(err)
    }
})

module.exports = route