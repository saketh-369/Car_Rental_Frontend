import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




let userSchema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6),
});

const Signup = () => {
  
    
    const {register, handleSubmit,formState: { errors }} = useForm( {resolver : yupResolver(userSchema)});
    const navigate = useNavigate();

    const onSubmit = async(data) => {
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        data,
      );
      const resData = await res.data;
        if (resData === "Logged in") {
          navigate("/user/dashboard");
        }
    }


  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3 p-8 shadow-md">
      <h1 className="text-3xl mb-8">Login..</h1>
      <input {...register("email")} placeholder="email" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.FirstName && <span className="text-red-600">Invalid Email address</span>}
      <input {...register("password")} placeholder="password" type="password" className="px-1.5 py-1 border rounded-md text-black-100"/>
      {errors.FirstName && <span className="text-red-600">Invalid Password</span>}
      <p>
        User not created yet{" "}
        <Link to="/user/signup" className="text-blue-500 underline">
          Signup
        </Link>
      </p>
      <input type="submit" className="mt-4 border rounded-md border-solid bg-gray-500 hover:bg-gray-800 text-white hover:border-gray-500"/>
    </form>
    </div>
  )
}

export default Signup
