import crypto from "crypto";

export default function generateApiKey(){
    const apiKeyLength = 15;

    const buffer = crypto.randomBytes(apiKeyLength);
    const apiKey = buffer.toString('hex');
    console.log(apiKey);
    
    return apiKey;
}