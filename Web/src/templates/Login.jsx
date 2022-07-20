import { useState } from 'react'
import { Input } from '../components/Input'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export const Login = () => {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [feedback, setFeedback] = useState('')

  const handleClickEntrar = () => {
    if (!usuario || !senha) {
      setFeedback('Preencha todos os campos')
    } else {
      setFeedback('')
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-400 body-font flex justify-center">
      <div className="container px-8 py-8 2xl:px-24 2xl:py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <div className="w-full flex justify-center text-4xl md:text-6xl">MarkGame</div>
        </div>
        <Card titulo="Login">
          <Input type="text" titulo="Usuario" valor={usuario} onChange={setUsuario} />
          <Input type="password" titulo="Senha" valor={senha} onChange={setSenha} />
          <p className="text-sm mb-4">Esqueceu sua senha?</p>
          <Button text="Entrar" onClick={handleClickEntrar} />
          <p className="text-md text-red-600">{feedback}</p>
          <hr className="mt-5 mb-5" />
          <div className="flex justify-center">
            <Button text="cadastrar" onClick={handleClickEntrar} />
          </div>
        </Card>
      </div>
    </div>
  )
}
