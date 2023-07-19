import { UserProfile } from "@/types";
import user from "@/schemas/User";

export default async function getUser(obj:UserProfile){
    const targetUser = await user.findOne({...obj});
    
    return targetUser;
}