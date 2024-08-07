import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description:{type:String, required: true},
    price:{type:Number, required: true},
    image:{type:String, required: true},
    category:{type:String, required: true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

//the || statement is given so that it does not create a new model if one named food
//already exists

export default foodModel;