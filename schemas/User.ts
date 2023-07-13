import { Schema,model,models } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'You must provide a name'],
    },
    email:{
        type:String,
        required:[true,'You must provide an email'],
    },
    password:{
        type:String,
        required:false
    },
    image:{
        type:String,
        default:"/defaultProfile.png"
    },
});

const user = models.User || model("User",UserSchema);

export default user;