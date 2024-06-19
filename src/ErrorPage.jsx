import { Link } from "react-router-dom"


const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl  mb-4">404 Not Found</h1>
      <Link to="/" className="text-blue-500 underline">go to Home</Link>
    </div>
  )
}

export default ErrorPage
