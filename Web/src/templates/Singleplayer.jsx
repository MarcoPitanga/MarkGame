import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import { useContext, useState } from 'react'
import { api } from '../services/api'
import { AuthContext } from '../contexts/auth'

export const Singleplayer = () => {
  const { usuario, resultadoResposta } = useContext(AuthContext)

  const [resultado, setResultado] = useState()
  const [pergunta, setPergunta] = useState()

  const handleClickBuscar = async () => {
    const { data } = await api.get(`pergunta/${usuario.pergunta_atual}`)
    setPergunta(data)
  }

  const handleClickOpcao = async (op) => {
    if (pergunta?.opcao_certa === op) {
      setResultado('Resposta Certa')
      await resultadoResposta('certa')
    } else {
      setResultado('Resposta Errada')
      await resultadoResposta('errada')
    }
    setPergunta()
  }

  return (
    <Layout titulo="Singleplayer">
      {pergunta ? (
        <>
          <h2 className="text-xl m-2 text-gray-300 ">{pergunta?.questao}</h2>
          <Button text={pergunta?.opcao_1} className="w-2/3 m-3" onClick={() => handleClickOpcao(pergunta?.opcao_1)} />
          <Button text={pergunta?.opcao_2} className="w-2/3 m-3" onClick={() => handleClickOpcao(pergunta?.opcao_2)} />
          <Button text={pergunta?.opcao_3} className="w-2/3 m-3" onClick={() => handleClickOpcao(pergunta?.opcao_3)} />
          <Button text={pergunta?.opcao_4} className="w-2/3 m-3" onClick={() => handleClickOpcao(pergunta?.opcao_4)} />
        </>
      ) : (
        <>
          <h2 className="text-xl m-2 text-gray-300">{resultado}</h2>
          <Button text="Buscar pergunta" className="w-3/3" onClick={handleClickBuscar} />
        </>
      )}
    </Layout>
  )
}
