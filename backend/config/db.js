import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://adityamaneanm:Adi6783@cluster0.bggw6sw.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}