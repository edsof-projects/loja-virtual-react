import { Outlet } from "react-router-dom"
import AdminMenu from "./AdminMenu"
import AdminHeader from "./AdminHeader"
import './styles/adminlayout.css'

function AdminLayout(){
    return ( 
        <div className="adminlayout">
            <AdminMenu/>
            <div className="top">
                <AdminHeader/>
                <main>
                    <Outlet/>
                </main>
            </div>           
            
        </div>
     )
}
 
export default AdminLayout