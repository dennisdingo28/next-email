import Link from "next/link"
import Paragraph from "./ui/paragraph"

const Footer = () => {
  return (
    <div className="flex items-center justify-center py-4">
        <Link target="_blank" href={"https://github.com/dennisdingo28?tab=repositories"} className="flex gap-2 items-center">
            <i className="bi bi-github text-[1.2em]"></i>
            <Paragraph text="dennisdingo28"/>
        </Link>
    </div>
  )
}

export default Footer