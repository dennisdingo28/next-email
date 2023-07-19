import EmailDiscoverBody from "./EmailDiscoverBody"

const EmailDiscover = () => {
  return (
    <div className="">
        <div className="emailDiscoverHeader flex items-center justify-center gap-2">
            <h2 className="text-[1.5em] font-medium">Discover <span className="text-purple-600">Email</span> Templates</h2>
            <i className="bi bi-binoculars-fill text-[1.2em] text-purple-500"></i>
        </div>
        <div className="emailDiscoverBody mt-10">
            <EmailDiscoverBody/>
        </div>
    </div>
  )
}

export default EmailDiscover