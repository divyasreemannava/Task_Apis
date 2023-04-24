const mongoose = require("mongoose");
const inputSchema = mongoose.Schema({
    _id:Number,
    title:{type:String,required:true},
    is_completed:{type:Boolean,required:true}
})

const UserTasks = mongoose.model("InputTasks",inputSchema)

module.exports = UserTasks