import { app } from "./app";
require("dotenv").config()

//server

app.listen(process.env.PORT, ()=> {
    console.log(`Port connected at ${process.env.PORT}`)
})
