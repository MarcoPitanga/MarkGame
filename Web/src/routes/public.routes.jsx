import { Routes, Route } from 'react-router-dom'
import { Login } from '../templates/Login'
import { Cadastro } from '../templates/Cadastro'
import { Erro } from '../templates/Erro'

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}
