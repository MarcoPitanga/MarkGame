import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usuario } from '../model/Usuario'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState()

  const apiUsuario = new Usuario()

  const logar = async (login, senha) => {
    if (await apiUsuario.verificarLogin(login, senha)) {
      setUsuario({ id: apiUsuario.id, login: apiUsuario.login })
      navigate('/')
    }
  }

  const deslogar = () => {
    setUsuario(null)
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{
        autenticado: Boolean(usuario),
        usuario,
        logar,
        deslogar
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
