// const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
import dotenv, { config } from "dotenv"

dotenv.config()

async function runGetStarted() {
  
  const uri = process.env.db;
  const client = new MongoClient(uri);

  try {
    console.log(uri);
    const connected=await client.connect();
    console.log("connected",client.db().databaseName);
    
  } catch(error){
    console.log("not connected",error.message);
    process.exit(1);

  };
  
};
export default runGetStarted;
