import { useContext } from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { AuthContext } from '../contexts/auth'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const { usuario } = useContext(AuthContext)

  const navigate = useNavigate()

  return (
    <Layout titulo="Perfil" className="h-5/6">
      <Card>
        <div className="flex items-center justify-center m-2">
          <span className="text-xl mb-4">Usuario</span>
        </div>
        <div className="flex items-center justify-between p-2 m-3 bg-gray-700 rounded-lg">
          <span>Total de Respostas</span>
          <span>{usuario.total_respostas}</span>
        </div>
        <div className="flex items-center justify-between p-2 m-3 bg-gray-700 rounded-lg">
          <span>Respostas Certas</span>
          <span>{usuario.respostas_certas}</span>
        </div>
        <div className="flex items-center justify-between p-2 m-3 bg-gray-700 rounded-lg">
          <span>Respostas Erradas</span>
          <span>{usuario.respostas_erradas}</span>
        </div>
        <div className="flex items-center justify-center mt-5 ">
          <Button text="Jogar" onClick={() => navigate('/singleplayer')} />
        </div>
      </Card>
    </Layout>
  )
}
