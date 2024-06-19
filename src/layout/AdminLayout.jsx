import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"



const AdminLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  )
}

export default AdminLayout
