const express = require("express");
const route = express.Router();
const UserTasks = require("../schemas/input")

route.get("/tasks",async (req,res)=>{
    try{
        const data = await UserTasks.find()
        console.log(data)
        res.status(200).json({
            status:200,
            tasks:data
        })
    }catch(err){
        console.log(err)
    }
})

module.exports = route