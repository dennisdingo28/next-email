import { getAuthSession } from "@/lib/auth";
import EmailCustomization from "./EmailCustomization"
import Paragraph from "./ui/paragraph"
import getUser from "@/actions/getUser";

const EmailTool = async () => {

  const session = await getAuthSession();
  const user= await getUser({_id:session?.user?._id});

  console.log(session);
  
  return (
    <div>
        <div className="emailToolHeader bg-[#141313] p-2 rounded-t-md">
            <Paragraph text="Customize the email template. Make it match your usage." className="text-[1.1em] font-medium"/>
        </div>
        <div className="bg-[#212020] p-2">
            <EmailCustomization user={user}/>  
        </div>
    </div>
  )
}

export default EmailTool