import { api } from '../services/api'

export class Usuario {
  cadastrar(login, senha) {
    api.post('usuario/cadastrar', {
      login,
      senha
    })
  }

  async buscar(login) {
    const { data } = await api.get(`usuario/${login}`)
    const [resultado] = data

    if (resultado) {
      return true
    } else {
      return false
    }
  }

  async verificarLogin(login, senha) {
    const { data } = await api.post(`usuario/logar`, {
      login,
      senha
    })
    const [resultado] = data

    if (resultado) {
      this.id = resultado.id
      this.login = resultado.login
      return true
    } else {
      return false
    }
  }
}
