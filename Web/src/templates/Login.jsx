import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input'
import { CardForm } from '../components/CardForm'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { AuthContext } from '../contexts/auth'

export const Login = () => {
  const { logar } = useContext(AuthContext)

  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [feedback, setFeedback] = useState('')
  let navigate = useNavigate('')

  const handleClickEntrar = async () => {
    if (!login || !senha) {
      setFeedback('Preencha todos os campos')
    } else {
      await logar(login, senha)
      setFeedback('usuario ou senha invalida')
    }
  }

  const handleClickCadastro = () => {
    navigate('/cadastro')
  }

  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-300">
      <div className="flex justify-center container px-2 py-6 md:px-8 md:py-8 2xl:px-[5.5rem] 2xl:py-[5.5rem] mx-auto flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <div className="w-full flex md:flex-col items-center mb-5 md:mb-0 text-4xl md:text-8xl text-orange-600">
            <span>Mark</span>
            <span>Game</span>
          </div>
        </div>
        <CardForm titulo="Login">
          <Input type="text" titulo="Usuario" valor={login} onChange={setLogin} />
          <Input type="password" titulo="Senha" valor={senha} onChange={setSenha} />
          <p className="text-sm mb-4">Esqueceu sua senha?</p>
          <Button text="Entrar" onClick={handleClickEntrar} />
          <p className="text-md text-red-600">{feedback}</p>
          <hr className="mt-4 mb-5 border-orange-600" />
          <div className="flex justify-center">
            <Button text="cadastrar" onClick={handleClickCadastro} />
          </div>
        </CardForm>
      </div>
      <Footer />
    </div>
  )
}
