import { Outlet } from "react-router-dom"
import AdminMenu from "../AdminMenu"
import AdminHeader from "../AdminHeader"

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
