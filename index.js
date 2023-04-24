const express = require("express");
const createTask = require("./routes/createTask")
const app = express();
const Connection = require("./connection/connection")
const getAllTasks = require("./routes/getallTasks")
const getSpecifiedTask = require("./routes/getSpecifiedTask")
const deleteTask = require("./routes/deleteTask")
const editTask = require("./routes/editTask")
app.use(express.json())
app.use("/v1",createTask)
app.use("/v1",getAllTasks)
app.use("/v1",getSpecifiedTask)
app.use("/v1",deleteTask)
app.use("/v1",editTask)
app.listen(5000,()=>{
    console.log("server is up at 5000....")
})