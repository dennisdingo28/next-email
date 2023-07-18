import { Schema,model,models } from "mongoose";
import { EmailTemplateSchemaProps } from "@/types";


const EmailTemplateSchema = new Schema<EmailTemplateSchemaProps>({
    headerColor:{
        type: String,
        required:[true,'You must provide a header color'],
    },
    bodyColor:{
        type: String,
        required:[true,'You must provide a body color'],
    }
});


const emailTemplate = models.EmailTemplate || model("EmailTemplate",EmailTemplateSchema);

export default emailTemplate;