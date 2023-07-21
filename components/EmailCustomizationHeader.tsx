"use client"
import useSelectedTemplateId from "@/hooks/useSelectedTemplateId"
import Paragraph from "./ui/paragraph"

const EmailCustomizationHeader = () => {
    const selectedTemplate = useSelectedTemplateId();
  return (
    <div className="flex items-center gap-2">
      <Paragraph text={`Template id:`} className="text-[1.1em]"/>
      <input value={selectedTemplate.id} onChange={(e)=>selectedTemplate.setSelectedTemplateId(e.target.value)} className="bg-transparent outline-none text-slate-200 dark:text-slate-500"/>
    </div>
  )
}

export default EmailCustomizationHeader
