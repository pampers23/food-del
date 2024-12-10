import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://dexterpimss23:hYwXAOCDfq61AVhN@fooddel.yvjjf.mongodb.net/?retryWrites=true&w=majority&appName=Fooddel')
    .then(() => console.log("Databse is connected")
    )
}