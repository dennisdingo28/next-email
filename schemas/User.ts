import { Schema,model,models } from "mongoose";
import { UserSchemaProps, UserJwtPayload, UserRoles } from "@/types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

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
    role:{
        type:String,
        enum:Object.values(UserRoles),
        default:UserRoles.BASIC,
    },
});

UserSchema.methods.generateJWT = function (payload: UserJwtPayload) {
    return jwt.sign(payload,process.env.JWT_ENCRYPTION!,{expiresIn:"30d"});
}
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    try{
        const match = await bcrypt.compare(candidatePassword,this.projectPassword);
        return match;
    }catch(err){
        console.log(err);
        return false;
    }
}

UserSchema.pre('save',async function(){
    try{
        const salt = await bcrypt.genSalt(10);
        if(this.password){
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