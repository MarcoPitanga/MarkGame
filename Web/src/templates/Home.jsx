import { Layout } from '../components/Layout'

export const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <h2 className="text-orange-600 text-2xl m-3">Perfil</h2>
        <section className="text-gray-300 flex justify-center w-full h-full ">
          <div className="p-4 w-full md:w-2/3 lg:w-2/4 xl:w-2/4">
            <div className="h-full border-2 border-b-8 border-orange-600 rounded-lg overflow-hidden">
              <div className="p-2 xl:p-4">
                <div className="flex items-center justify-center m-2">
                  <span className="text-xl">Usuario</span>
                </div>
                <div className="flex items-center justify-between p-2 m-1 bg-gray-700 rounded-lg">
                  <span>Total de Respostas</span>
                  <span>130</span>
                </div>
                <div className="flex items-center justify-between p-2 m-1 bg-gray-700 rounded-lg">
                  <span>Respostas Certas</span>
                  <span>70</span>
                </div>
                <div className="flex items-center justify-between p-2 m-1 bg-gray-700 rounded-lg">
                  <span>Respostas Erradas</span>
                  <span>60</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
