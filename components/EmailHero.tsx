import { Suspense } from "react"
import ApiKey from "./ApiKey"
import LargeHeading from "./ui/LargeHeading"

const EmailHero = () => {
  return (
    <div className="">
      <div className="heroHeading flex items-center justify-between">
          <div className="flex items-center gap-2">
              <LargeHeading text="Start sending emails within seconds"/>
              <i className="bi bi-envelope-at-fill text-[1.2em]"></i>
          </div>
          <Suspense fallback={<p>loading...</p>}>
            <ApiKey/>
          </Suspense>
      </div>
        
    </div>
  )
}

export default EmailHero