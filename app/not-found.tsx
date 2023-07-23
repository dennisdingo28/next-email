import Heading from "@/components/ui/heading"

const NotFound = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center gap-2">
        <Heading text="Cannot find what you are looking for" className="text-center font-bold"/>
        <i className="bi bi-bug-fill text-[1.2em]"></i>
    </div>
  )
}

export default NotFound