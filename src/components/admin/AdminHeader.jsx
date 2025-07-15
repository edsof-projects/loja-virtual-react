import { Logs, Search } from "lucide-react"
import FotoPerfil from '../img/Lino.jpg'
import './styles/adminHeader.css'

function AdminHeader(){
    return ( 
        <header className="adminheader">
            <div className="toggle">
               <Logs size={30}/>
            </div>     
            <div className="pesquisar">
                <label htmlFor="pesquisar">
                    <input id="pesquisar" type="text" placeholder="Pesquise por aqui"  />
                    <Search className="lupa"/>
                </label>
            </div>  
            <div className="usuario">
                <img src={FotoPerfil} alt="Foto de perfil" />
            </div>
        </header>
     )
}
 
export default AdminHeader