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
}
