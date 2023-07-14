import {useForm} from "react-hook-form";

const LoginForm: React.FC= () => {
    const {register,handleSubmit} = useForm();
    async function loginUser(data:any){
        console.log(data);
        
    }
  return(
    <form onSubmit={handleSubmit(loginUser)}>
        <input {...register("username")}/>
    </form>
  )
}

export default LoginForm