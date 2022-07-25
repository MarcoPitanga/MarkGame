import { Routes, Route } from 'react-router-dom'
import { Erro } from '../templates/Erro'
import { Home } from '../templates/Home'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}
