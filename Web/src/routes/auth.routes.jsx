import { Routes, Route } from 'react-router-dom'
import { Erro } from '../templates/Erro'
import { Home } from '../templates/Home'
import { Singleplayer } from '../templates/Singleplayer'
import { Multiplayer } from '../templates/Multiplayer'
import { Ranking } from '../templates/Ranking'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/singleplayer" element={<Singleplayer />}></Route>
      <Route path="/multiplayer" element={<Multiplayer />}></Route>
      <Route path="/ranking" element={<Ranking />}></Route>
      <Route path="*" element={<Erro />} />
    </Routes>
  )
}
