import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider, AuthContext } from '../contexts/auth'
import { AuthRoutes } from './auth.routes'
import { PublicRoutes } from './public.routes'

export const Rotas = () => {
  const ControleDeRotas = () => {
    const { autenticado } = useContext(AuthContext)
    return autenticado ? <AuthRoutes /> : <PublicRoutes />
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <ControleDeRotas />
      </AuthProvider>
    </BrowserRouter>
  )
}
