import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usuario } from '../model/Usuario'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState()

  const apiUsuario = new Usuario()

  const cadastrar = async (login, senha) => {
    if (!(await apiUsuario.buscar(login))) {
      apiUsuario.cadastrar(login, senha)
      return true
    }
    return false
  }
  const logar = async (login, senha) => {
    if (await apiUsuario.verificarLogin(login, senha)) {
      setUsuario({
        id: apiUsuario.id,
        login: apiUsuario.login,
        total_respostas: apiUsuario.total_respostas,
        respostas_certas: apiUsuario.respostas_certas,
        respostas_erradas: apiUsuario.respostas_erradas
      })
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
        cadastrar,
        logar,
        deslogar
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
