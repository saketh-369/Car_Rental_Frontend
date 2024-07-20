import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { API } from "../../api";


let userSchema = yup.object({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6),
});

const Signup = () => {
  
    
    const {register, handleSubmit,formState: { errors }} = useForm( {resolver : yupResolver(userSchema)});
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
      try {
        const res = await axios.post(
          `${API}/user/signup`,
          data,
          {
            withCredentials: true,
          }
        );
        const resData = res.data;
        if (resData.token) {
          Cookies.set('token', resData.token, { expires: 1 }); // Store token in cookies
          navigate("/");
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
        <h1 className="text-3xl mb-8">Sign Up</h1>
      <input {...register("firstname")} placeholder="first name" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.firstname && <span className="text-red-600">This field is required</span>}
      <input {...register("lastname")} placeholder="last name" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.lastname && <span className="text-red-600">This field is required</span>}
      <input {...register("email")} placeholder="email" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.email && <span className="text-red-600">Invalid Email address</span>}
      <input {...register("password")} placeholder="password" type="password" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.password && <span className="text-red-600">Invalid Password</span>}
      <p>
        User already exist{" "}
        <Link to="/user/login" className="text-blue-500 underline">
          login
        </Link>
      </p>
    <input type="submit" className="mt-4 border rounded-md border-solid bg-gray-500 hover:bg-gray-800 text-white hover:border-gray-500"/>
    </form>
    </div>
  )
}

export default Signup
