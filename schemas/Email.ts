import mongoose, { Schema,model,models } from "mongoose";
import { EmailSchemaProps } from "@/types";


const EmailSchema = new Schema<EmailSchemaProps>({
    to:{
        type: String,
        required:[true,'You must provide a receiver email.'],
    },
    title:{
        type: String,
        required:[true,'You must provide an email title'],
    },
    description:{
        type: String,
        required:[true,'You must provide an email description'],
    },
    template_id:{
        type: mongoose.Types.ObjectId,
        ref:"EmailTemplate",
    },
});


const email = models.Email|| model("Email",EmailSchema);

export default email;