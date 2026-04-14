import runGetStarted from "./src/db/mongo.js"
import express from "express";
import cors from "cors";

// runGetStarted().catch(console.dir);
const app=express();
const PORT=4000;

app.use(
    cors({
        origin:PORT,
        credentials:true,
    }) 
);

const server=async()=>{
    try{
        runGetStarted().catch(console.dir);
        app.listen(PORT,()=>{
            console.log("server on",PORT);
            console.log(`http://localhost:${PORT}`);
            
        });
        
    } catch (error){
        console.error("error",error.message);
        process.exit(1);
    }
}
server();