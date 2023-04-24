const express = require("express");
const route = express.Router();
const UserTasks = require("../schemas/input")

route.post("/tasks",async (req,res)=>{
    const details = await UserTasks.find()
    // req.body._id=details.length+1
    const len = details.length
    console.log(len)
    console.log(details[len-1]._id)
    const data = {
        _id:details[len-1]._id+1,
        title:req.body.title,
        is_completed:req.body.is_completed
    }
    console.log(data)
    try{
        const taskDetails = await UserTasks.create(data)
        res.status(201).json({
            status:201,
            TaskId:{id:taskDetails._id}
        })
    }catch(err){
        console.log(err.message)
    }
})


module.exports = route