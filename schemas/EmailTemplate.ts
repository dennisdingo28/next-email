import { Schema,model,models } from "mongoose";
import { EmailTemplateSchemaProps } from "@/types";
import { EmailColor } from "@/types";

const EmailTemplateSchema = new Schema<EmailTemplateSchemaProps>({
    html:{
        type:String,
        required:[true,'You must provide a valid template html schema'],
    },
    clientHtml:{
        type: String,
        required:[true,'You must provide a valid client html schema'],
    },
    colors:{
        type: Object,
        required:[true,'You must provide a valid color schema'],
    }
});


const emailTemplate = models.EmailTemplate || model("EmailTemplate",EmailTemplateSchema);

export default emailTemplate;