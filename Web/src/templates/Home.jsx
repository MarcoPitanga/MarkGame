import { useContext } from 'react'
import { Layout } from '../components/Layout'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { AuthContext } from '../contexts/auth'

export const Home = () => {
  const { usuario } = useContext(AuthContext)

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h2 className="text-orange-600 text-2xl m-3">Perfil</h2>
        <Card>
          <div className="flex items-center justify-center m-2">
            <span className="text-xl mb-4">Usuario</span>
          </div>
          <div className="flex items-center justify-between p-2 m-1 bg-gray-700 rounded-lg">
            <span>Total de Respostas</span>
            <span>{usuario.total_respostas}</span>
          </div>
          <div className="flex items-center justify-between p-2 m-1 bg-gray-700 rounded-lg">
            <span>Respostas Certas</span>
            <span>{usuario.respostas_certas}</span>
          </div>
          <div className="flex items-center justify-between p-2 m-1 bg-gray-700 rounded-lg">
            <span>Respostas Erradas</span>
            <span>{usuario.respostas_erradas}</span>
          </div>
          <div className="flex items-center justify-center mt-5 ">
            <Button text="Jogar" />
          </div>
        </Card>
      </div>
    </Layout>
  )
}
