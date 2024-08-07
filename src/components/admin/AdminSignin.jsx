import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { API } from "../../api";


let userSchema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6),
});

const Signup = () => {
  
    
    const {register, handleSubmit,formState: { errors }} = useForm( {resolver : yupResolver(userSchema)});
    const navigate = useNavigate();

    const onSubmit = async (data) => {
      try {
        const res = await axios.post(
          `${API}/admin/login`,
          data,
          {
            withCredentials: true,
          }
        );
        const resData = res.data;
        if (resData.token) {
          Cookies.set('token', resData.token, { expires: 1 }); // Store token in cookies
          navigate("/admin/dashboard");
        } else {
          console.error("Signup failed: No token received");
        }
      } catch (error) {
        console.error("Signup error:", error);
      }
    }


  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3 p-8 shadow-md">
      <h1 className="text-3xl mb-8">Admin Login</h1>
      <input {...register("email")} placeholder="email" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.FirstName && <span className="text-red-600">Invalid Email address</span>}
      <input {...register("password")} placeholder="password" type="password" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.FirstName && <span className="text-red-600">Invalid Password</span>}
      <input type="submit" className="mt-4 border rounded-md border-solid bg-gray-500 hover:bg-gray-800 text-white hover:border-gray-500"/>
    </form>
    </div>
  )
}

export default Signup
