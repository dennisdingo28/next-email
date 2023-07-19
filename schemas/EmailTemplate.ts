import { Schema,model,models } from "mongoose";
import { EmailTemplateSchemaProps } from "@/types";


const EmailTemplateSchema = new Schema<EmailTemplateSchemaProps>({
    html:{
        type:String,
        required:[true,'You must provide a valid template html schema'],
    },
    clientHtml:{
        type: String,
        required:[true,'You must provide a valid client html schema'],
    }
});


const emailTemplate = models.EmailTemplate || model("EmailTemplate",EmailTemplateSchema);

export default emailTemplate;