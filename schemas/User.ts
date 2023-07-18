import { Schema,model,models } from "mongoose";
import { UserSchemaProps, UserJwtPayload, UserRoles } from "@/types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import generateApiKey from "@/lib/generateApiKey";

const UserSchema = new Schema<UserSchemaProps>({
    name:{
        type:String,
        unique:true,
        required:[true,'You must provide a name'],
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
    apiKey:{
        type:String,
        required:[true,'The api key was not provided. Please try again later.'],
    },
    role:{
        type:String,
        enum:Object.values(UserRoles),
        default:UserRoles.BASIC,
    },
});

UserSchema.methods.generateJWT = function (payload: UserJwtPayload) {
    return jwt.sign(payload,process.env.JWT_ENCRYPTION!,{expiresIn:"30d"});
}

UserSchema.pre('save',async function(){
    try{
        const salt = await bcrypt.genSalt(10);
        if(this.password && this.password!==''){
            const hashedPassword = await bcrypt.hash(this.password,salt);
            this.password = hashedPassword;
        }else{
            throw new Error("Password is empty");
        }
    
    }catch(err){
        console.log(err);
    }
})

const user = models.User || model("User",UserSchema);

export default user;