import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export const Erro = () => {
  let navigate = useNavigate()

  const handleClickVoltar = () => {
    console.log('retornou')
    navigate('/')
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-orange-600 px-2 text-sm rounded rotate-12 absolute">Página não encontrada</div>
      <Button className="mt-5" text={'Voltar'} onClick={handleClickVoltar}></Button>
    </div>
  )
}
