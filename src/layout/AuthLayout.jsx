import { Outlet } from "react-router-dom"
// import AuthNavbar from "../components/navbar/AuthNavbar"

const AuthLayout = () => {
  return (
    <div>
      {/* <nav>
        <AuthNavbar />
      </nav> */}
      <Outlet />
    </div>
  )
}

export default AuthLayout
