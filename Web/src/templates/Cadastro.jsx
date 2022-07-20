import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { Usuario } from '../model/Usuario'

export const Cadastro = () => {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [feedback, setFeedback] = useState('')
  let navigate = useNavigate('')

  const usuario = new Usuario()

  const handleClickEntrar = async () => {
    if (!login || !senha || !confirmarSenha) {
      setFeedback('Preencha todos os campos')
    } else if (senha !== confirmarSenha) {
      setFeedback('Digite as Senhas iguais')
    } else {
      if (await usuario.buscar(login)) {
        setFeedback('Usuario já existe')
      } else {
        setFeedback('')
        try {
          usuario.cadastrar(login, senha)
          navigate('/')
        } catch (error) {
          setFeedback('Erro desconhecido')
        }
      }
    }
  }

  const handleClickVoltar = () => {
    navigate(-1)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-300">
      <div className="flex justify-center container px-2 py-3 md:px-8 md:py-8 2xl:px-[5.5rem] 2xl:py-[3.5rem] mx-auto flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <div className="w-full flex md:flex-col items-center mb-5 md:mb-0 text-4xl md:text-8xl text-orange-600">
            <span>Mark</span>
            <span>Game</span>
          </div>
        </div>
        <Card titulo="Cadastro">
          <Input type="text" titulo="Usuario" valor={login} onChange={setLogin} />
          <Input type="password" titulo="Senha" valor={senha} onChange={setSenha} />
          <Input type="password" titulo="Confirmar Senha" valor={confirmarSenha} onChange={setConfirmarSenha} />
          <Button className={'mt-5'} text="Entrar" onClick={handleClickEntrar} />
          <p className="text-md text-red-600">{feedback}</p>
          <hr className="mt-4 mb-5 border-orange-600" />
          <div className="flex justify-center">
            <Button text="Voltar" onClick={handleClickVoltar} />
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
