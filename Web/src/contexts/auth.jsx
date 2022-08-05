import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usuario } from '../model/Usuario'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState()

  const apiUsuario = new Usuario()

  useEffect(() => {
    if (localStorage.getItem('usuario')) {
      setUsuario({
        id: localStorage.getItem('id'),
        login: localStorage.getItem('usuario'),
        total_respostas: localStorage.getItem('total_respostas'),
        respostas_certas: localStorage.getItem('respostas_certas'),
        respostas_erradas: localStorage.getItem('respostas_erradas'),
        pergunta_atual: localStorage.getItem('pergunta_atual')
      })
    }
  }, [])

  const cadastrar = async (login, senha) => {
    if (!(await apiUsuario.buscar(login))) {
      apiUsuario.cadastrar(login, senha)
      return true
    }
    return false
  }

  const listar = async () => {
    return await apiUsuario.listar()
  }

  const resultadoResposta = async (resultado) => {
    await apiUsuario.salvarResposta(usuario.id, resultado)
    setUsuario({
      id: apiUsuario.id,
      login: apiUsuario.login,
      total_respostas: apiUsuario.total_respostas,
      respostas_certas: apiUsuario.respostas_certas,
      respostas_erradas: apiUsuario.respostas_erradas,
      pergunta_atual: apiUsuario.pergunta_atual
    })
    localStorage.setItem('id', apiUsuario.id)
    localStorage.setItem('usuario', apiUsuario.login)
    localStorage.setItem('total_respostas', apiUsuario.total_respostas)
    localStorage.setItem('respostas_certas', apiUsuario.respostas_certas)
    localStorage.setItem('respostas_erradas', apiUsuario.respostas_erradas)
    localStorage.setItem('pergunta_atual', apiUsuario.pergunta_atual)
  }

  const logar = async (login, senha) => {
    if (await apiUsuario.verificarLogin(login, senha)) {
      setUsuario({
        id: apiUsuario.id,
        login: apiUsuario.login,
        total_respostas: apiUsuario.total_respostas,
        respostas_certas: apiUsuario.respostas_certas,
        respostas_erradas: apiUsuario.respostas_erradas,
        pergunta_atual: apiUsuario.pergunta_atual
      })
      localStorage.setItem('id', apiUsuario.id)
      localStorage.setItem('usuario', apiUsuario.login)
      localStorage.setItem('total_respostas', apiUsuario.total_respostas)
      localStorage.setItem('respostas_certas', apiUsuario.respostas_certas)
      localStorage.setItem('respostas_erradas', apiUsuario.respostas_erradas)
      localStorage.setItem('pergunta_atual', apiUsuario.pergunta_atual)
      navigate('/')
    }
  }

  const deslogar = () => {
    setUsuario(null)
    localStorage.clear()
    navigate('/')
  }

  return (
    <AuthContext.Provider
      value={{
        autenticado: Boolean(usuario),
        usuario,
        cadastrar,
        listar,
        resultadoResposta,
        logar,
        deslogar
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
