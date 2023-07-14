import { Schema,model,models } from "mongoose";
import { UserSchemaProps, UserJwtPayload } from "@/types";
import jwt from "jsonwebtoken";

const UserSchema = new Schema<UserSchemaProps>({
    name:{
        type:String,
        required:[true,'You must provide a name'],
    },
    email:{
        type:String,
        unique:true,
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

UserSchema.methods.generateJWT= (payload: UserJwtPayload) => {
    return jwt.sign(payload,process.env.JWT_ENCRYPTION!,{expiresIn:"30d"});
}

const user = models.User || model("User",UserSchema);

export default user;