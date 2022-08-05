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
      this.total_respostas = resultado.total_respostas
      this.respostas_certas = resultado.respostas_certas
      this.respostas_erradas = resultado.respostas_erradas
      this.pergunta_atual = resultado.pergunta_atual
      return true
    } else {
      return false
    }
  }

  async salvarResposta(id, resultado) {
    const { data } = await api.post('usuario/salvarResposta', {
      id: id,
      resultado: resultado
    })

    this.id = data.id
    this.login = data.login
    this.total_respostas = data.total_respostas
    this.respostas_certas = data.respostas_certas
    this.respostas_erradas = data.respostas_erradas
    this.pergunta_atual = data.pergunta_atual
  }

  async listar() {
    const { data } = await api.get(`usuarios`)

    return data
  }
}
