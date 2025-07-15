import { Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './pages/auth/Login'
import Registro from './pages/auth/Registro'

import AdminDashboard from './pages/admin/AdminDashboard'
import AdminProdutos from './pages/admin/AdminProdutos'
import AdminVendas from './pages/admin/AdminVendas'
import AdminUsuarios from './pages/admin/AdminUsuarios'
import AdminPerfil from './pages/admin/AdminPerfil'
import AdminConfiguracao from './pages/admin/AdminConfiguracao'

import ShoppingHome from './pages/shopping/ShoppingHome'
import ShoppingPerfil from './pages/shopping/ShoppingPerfil'
import ShoppingCheckout from './pages/shopping/ShoppingCheckout'
import ShoppingCompras from './pages/shopping/ShoppingCompras'
import ShoppingObrigado from './pages/shopping/ShoppingObrigado'
import ShoppingListagem from './pages/shopping/ShoppingListagem'
import PaginaNaoEncontrada from './pages/shopping/PaginaNaoEncontrada'
import SemAutorizacao from './pages/shopping/SemAutorizacao'
import AdminLayout from './components/admin/AdminLayout'

function App() {
 
  return (
    <>
      <Routes>
        <Route path= 'auth'>
          <Route path='login' element={<Login/>}/>
          <Route path='registro' element={<Registro/>}/>
        </Route>

        <Route path= 'admin' element={<AdminLayout/>}>
          <Route path='dashboard' element={<AdminDashboard/>}/>
          <Route path='produtos' element={<AdminProdutos/>}/>
          <Route path='vendas' element={<AdminVendas/>}/>
          <Route path='usuarios' element={<AdminUsuarios/>}/>
          <Route path='perfil' element={<AdminPerfil/>}/>
          <Route path='configuracao' element={<AdminConfiguracao/>}/>
        </Route>

        <Route path= 'shop'>
          <Route path='perfil' element={<ShoppingPerfil/>}/>
          <Route path='checkout' element={<ShoppingCheckout/>}/>
          <Route path='compras' element={<ShoppingCompras/>}/>
          <Route path='obrigado' element={<ShoppingObrigado/>}/>         
        </Route>

       
        <Route path='/' element={<ShoppingHome/>}/>
        <Route path='listagens' element={<ShoppingListagem/>}/>
        <Route path='*' element={<PaginaNaoEncontrada/>}/>
        <Route path='nao-autorizado' element={<SemAutorizacao/>}/>         
       

      </Routes>
    </>
  )
}

export default App
