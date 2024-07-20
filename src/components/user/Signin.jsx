import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
// import { API } from "../../api";

// Define validation schema using Yup
let userSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema)
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://carrental-5592.onrender.com/api/v1/user/login",
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
        <h1 className="text-3xl mb-8">Login</h1>
        <input 
          {...register("email")} 
          placeholder="Email" 
          className="px-1.5 py-1 border rounded-md text-black-100" 
        />
        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
        
        <input 
          {...register("password")} 
          placeholder="Password" 
          type="password" 
          className="px-1.5 py-1 border rounded-md text-black-100" 
        />
        {errors.password && <span className="text-red-600">{errors.password.message}</span>}
        
        <p>
           new user?{" "}
          <Link to="/user/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
        <input 
          type="submit" 
          className="mt-4 border rounded-md border-solid bg-gray-500 hover:bg-gray-800 text-white hover:border-gray-500" 
        />
      </form>
    </div>
  );
}

export default Signup;
