"use client"
import useSelectedTemplateId from "@/hooks/useSelectedTemplateId"
import Paragraph from "./ui/paragraph"

const EmailCustomizationHeader = () => {
    const selectedTemplate = useSelectedTemplateId();
  return (
    <div className="flex items-center gap-2">
      <Paragraph text={`Template id:`} className="text-[1.1em]"/>
      <input value={selectedTemplate.id} onChange={(e)=>selectedTemplate.setSelectedTemplateId(e.target.value)} className="bg-transparent outline-none"/>
    </div>
  )
}

export default EmailCustomizationHeader
