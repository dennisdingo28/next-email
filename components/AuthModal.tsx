import AuthTab from "./AuthTab"
import CardIcon from "./ui/card-icon"
import Modal from "./ui/modal"


const AuthModal: React.FC = () => {
  return(
    <Modal modalTitle="Sign in with your account" modalDescription="Authenticate and unleash the power of NextEmail">
        <div className="flex items-center justify-center gap-8">
            <CardIcon icon={<i className="bi bi-google"></i>}/>
            <CardIcon icon={<i className="bi bi-github"></i>}/>
        </div>
        <div className="flex items-center justify-center my-3">
            <span className="text-center">or</span>
        </div>
        <div className="">
            <h5 className="text-[1.05em] font-semibold">Sign in with your NextEmail account</h5>
            <AuthTab/>
        </div>
    </Modal>
  )
}

export default AuthModal