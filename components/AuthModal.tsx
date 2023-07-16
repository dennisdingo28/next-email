import AuthTab from "./AuthTab"
import LoginProviders from "./LoginProviders"
import Modal from "./ui/modal"

const AuthModal: React.FC = () => {
  return(
    <Modal modalTitle="Sign in with your account" modalDescription="Authenticate and unleash the power of NextEmail">
        <LoginProviders/>
        <div className="flex items-center justify-center my-3">
            <span className="text-center text-slate-400">or</span>
        </div>
        <div className="">
            <h5 className="text-[1.05em] font-semibold text-center text-white">Sign in with your NextEmail account</h5>
            <div className="mt-3">
              <AuthTab/>
            </div>
        </div>
    </Modal>
  )
}

export default AuthModal