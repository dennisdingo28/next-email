import mongoose, { Schema,model,models } from "mongoose";
import { EmailSchemaProps } from "@/types";


const EmailSchema = new Schema<EmailSchemaProps>({
    template_id:{
        type: mongoose.Types.ObjectId,
        ref:"EmailTemplate",
    },
});


const email = models.Email|| model("Email",EmailSchema);

export default email;