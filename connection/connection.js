const mongoose = require("mongoose");
async function Connection(){
    try{
        await mongoose.connect("mongodb://localhost/tasksApi")
        console.log("Connected to db successfully")
    }
    catch(err){
        console.log(err.message)
    }
}
module.exports = Connection()