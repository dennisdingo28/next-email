import { Schema,model,models } from "mongoose";
import { UserSchemaProps, UserJwtPayload, UserRoles } from "@/types";
import jwt from "jsonwebtoken";


const UserSchema = new Schema<UserSchemaProps>({
    name:{
        type:String,
        required:[true,'You must provide a name'],
        unique:true,
    },
    email:{
        type:String,
        unique:true,
        required:[true,'You must provide an email'],
    },
    password:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        default:"/defaultProfile.png",
    },
    role:{
        type:String,
        enum:Object.values(UserRoles),
        default:UserRoles.BASIC,
    },
});

UserSchema.methods.generateJWT= (payload: UserJwtPayload) => {
    return jwt.sign(payload,process.env.JWT_ENCRYPTION!,{expiresIn:"30d"});
}

const user = models.User || model("User",UserSchema);

export default user;