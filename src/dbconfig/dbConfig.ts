import mongoose, { connection } from "mongoose"

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('Mongodb connected sucesfully');
            
        })

        connection.on('error', (err) =>{
            console.log("MongoDB connection error, Please make sure MONGODB is running" + err);
            process.exit();
        })
    } catch (error) {
        console.log(error,"Something Went Wrong");
        
    }
}