import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '../services/api'
import { Layout } from '../components/Layout'
import { Button } from '../components/Button'

export const Ranking = () => {
  const { data } = useSWR('usuarios/ordenado', fetcher)
  const [ranking, setRanking] = useState('total_respostas')
  const [titulo, setTitulo] = useState('Total de respostas')

  const handleClickTotal = () => {
    setTitulo('Total de respostas')
    setRanking('total_respostas')
  }
  const handleClickCertas = () => {
    setTitulo('Resposta certa')
    setRanking('respostas_certas')
  }

  return (
    <Layout titulo="Ranking" className="h-5/6">
      <div className="w-full h-full p-1 flex flex-col items-center text-orange-600">
        <div className="flex flex-col md:flex-row mb-5">
          <div className="m-2">
            <Button text={'total'} onClick={handleClickTotal} />
          </div>
          <div className="m-2">
            <Button text={'certa'} onClick={handleClickCertas} />
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <h2 className="text-lg lg:text-xl mb-4">{titulo}</h2>
          <div className="scrollbar flex justify-center border-2 border-orange-600 text-gray-300 rounded-md max-h-56 md:max-h-72 xl:max-h-80">
            <table>
              <tr className="bg-orange-600 border border-orange-600 text-gray-300">
                <td className="px-1 md:px-2 lg:px-3">Nº</td>
                <td className="md:px-3 lg:px-5 lg:text-lg">Nome</td>
                <td className="px-1 md:px-3 lg:px-5">*</td>
              </tr>
              {data &&
                data[ranking].map((usuario, index) => {
                  return (
                    <tr key={usuario.id} className={`${index % 2 == 0 ? 'bg-gray-900' : 'bg-gray-800'}`}>
                      <td className="px-1 md:px-2 lg:px-3">{index + 1}</td>
                      <td className="md:px-2 lg:px-5">{usuario.login}</td>
                      <td className="px-1 md:px-3 lg:px-5">{usuario[ranking]}</td>
                    </tr>
                  )
                })}
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}
