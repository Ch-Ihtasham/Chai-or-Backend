import mongoose from "mongoose";
import { DB_Name } from "../constant.js";
const ConnectDB = async () => {
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`connected to mongodb !! DB Host is ${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.log('DB Connection Failed!!!!', error)
        process.exit(1)
    }
}
export default ConnectDB;
