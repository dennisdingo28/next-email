import { SignUpRequest } from "@/validators";
import axios from "axios"

export default async function createAccount(payload: SignUpRequest){
    const req = await axios.post("/api/user",{payload});
    console.log(req);
    return req.data;
}