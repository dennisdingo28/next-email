import { Schema,model,models } from "mongoose";
import { EmailTemplateSchemaProps } from "@/types";

const EmailTemplateSchema = new Schema<EmailTemplateSchemaProps>({
    clientHtml:{
        type: String,
        required:[true,'You must provide a valid client html schema'],
    },
    properties:{
        type: Object,
        required:[true,'You must provide a valid properties schema'],
    }
});


const emailTemplate = models.EmailTemplate || model("EmailTemplate",EmailTemplateSchema);

export default emailTemplate;